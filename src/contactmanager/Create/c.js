import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { defaultRow, submit } from './m'

import { createForm, invalidDataMsg } from './v'

export default class extends Component {

    render() {

        let t = this
        let s = t.state

        if (s.isRedirect) {

            return <Redirect to="/" />

        }

        if (s.isInvalidContactData) {

            return invalidDataMsg(t)

        }

        return createForm(t)

    }

    changeHandler(e) {

        let t = this
        let s = t.state

        let row = s.row

        row[e.target.name] = e.target.value

        t.setState({

            row: row

        })

    }

    async submitHandler(e) {

        e.preventDefault()

        let t = this
        let s = t.state

        let result = await submit(s)

        if (result.ok) {

            t.setState({ isRedirect: true })

        } else {

            t.setState({ isInvalidContactData: true })

        }

    }

    closeinvalidDataMsg() {

        let t = this

        t.setState({ isInvalidContactData: false })

    }

    constructor(props) {

        super(props)

        let t = this

        t.state = { row: defaultRow(), isRedirect: false, isInvalidContactData: false }

        t.changeHandler = t.changeHandler.bind(t)
        t.submitHandler = t.submitHandler.bind(t)
        t.closeinvalidDataMsg = t.closeinvalidDataMsg.bind(t)

    }

}