import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { submit } from './m'

import { confirmDialog } from './v'

const YES = 'y'
const NO = 'n'

export default class extends Component {

    render() {

        let t = this

        let s = t.state

        if (s.option === YES) {

            return <Redirect to="/" />

        } else if (s.option === NO) {

            return <Redirect to={"/Display/" + s.id} />

        }

        return confirmDialog(t)

    }

    async yesHandler() {

        let t = this

        await submit()

        t.setState({ option: YES })

    }

    async noHandler() {

        let t = this

        t.setState({ option: NO })

    }

    constructor(props) {

        super(props)

        let t = this

        t.state = {

            id: props.match.params.id,

            option: ''

        }

        t.yesHandler = t.yesHandler.bind(t)
        t.noHandler = t.noHandler.bind(t)

    }

}
