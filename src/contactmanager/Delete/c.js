import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import v from './v'

const EP_URL = 'http://localhost:8080/contactmanager/deleteContact'

export default class extends Component {

    render() {

        let t = this

        let s = t.state

        if (s.option === true) {

            return <Redirect to="/" />

        } else if (s.option === false) {

            return <Redirect to={"/Display/" + s.id} />

        }

        return v(t)

    }

    async yesHandler() {

        let t = this

        //t.submitDataMock()
        await t.submitData()

        t.setState({ option: true })

    }

    async noHandler() {

        let t = this

        t.setState({ option: false })

    }

    async submitData() {

        let t = this
        let s = t.state

        await fetch(

            EP_URL + '/' + s.id,

            {

                method: 'DELETE'/*,

                headers: {

                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                }*/

            }

        )

            .catch(e => console.log(e));

    }

    submitDataMock() {

        let t = this

        t.setState({ option: true })

    }

    constructor(props) {

        super(props)

        let t = this

        t.state = {

            id: props.match.params.id,

            option: null

        }

        t.yesHandler = t.yesHandler.bind(t)
        t.noHandler = t.noHandler.bind(t)

    }

}
