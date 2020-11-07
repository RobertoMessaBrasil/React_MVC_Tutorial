import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { defaultRow, retrieve, submit } from './m'

import { editForm, invalidDataMsg } from './v'

export default class extends Component {

    cState

    render() {

        let t = this

        let s = t.state

        if (s.isRedirect === true) {

            return <Redirect to={"/Display/" + s.id} />

        }

        if (s.isInvalidContactData) {

            return invalidDataMsg(t)

        }

        return editForm(t)

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

        }

    }

    closeinvalidDataMsg() {

        let t = this

        t.setState({ isInvalidContactData: false })

    }

    async componentDidMount() {

        let t = this
        let s = t.state

        t.cState = s

        await retrieve(t)

        t.setState(t.cState)

    }

    constructor(props) {

        super(props)

        let t = this

        t.state = {

            id: props.match.params.id,

            isRedirect: false,

            row: defaultRow()

        }

        t.changeHandler = t.changeHandler.bind(t)
        t.submitHandler = t.submitHandler.bind(t)
        t.closeinvalidDataMsg = t.closeinvalidDataMsg.bind(t)

    }

}
