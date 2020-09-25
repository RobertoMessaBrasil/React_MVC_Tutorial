import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import i18n from './i18n'
import v from './v'

const EP_URL = 'http://localhost:8080/contactmanager/createContact'

class c extends Component {

    render() {

        let t = this
        let s = t.state

        if (s.redirect === true) {

            return <Redirect to="/" />

        }

        return v(t)

    }

    changeHandler(e) {

        let t = this

        t.setState({

            [e.target.name]: e.target.value

        })

    }

    async submitHandler(e) {

        e.preventDefault()

        let t = this
        let s = t.state

        if (s.name === '') {

            alert(i18n.msg1)

            return

        }

        //t.submitDataMock()

        await t.submitData()

    }

    async submitData() {

        let t = this
        let s = t.state

        await fetch(

            EP_URL,

            {

                method: 'POST',

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({

                    name: s.name,

                    description: s.description

                })

            }

        )

            .then(response => response.json())

            .then(result => t.setState({


                rowList: result,
                redirect: true

            }))

            .catch(e => console.log(e));

    }

    submitDataMock() {

        let t = this

        t.setState({ redirect: true })

    }

    constructor(props) {

        super(props)

        let t = this

        t.state = { name: '', description: '', redirect: false }

        t.changeHandler = t.changeHandler.bind(t)
        t.submitHandler = t.submitHandler.bind(t)

    }

}

export default c
