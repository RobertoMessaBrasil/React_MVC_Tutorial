import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import i18n from './i18n'
import v from './v'

const EP_URL = 'http://localhost:8080/contactmanager/findById'
const EP_UPDATEURL = 'http://localhost:8080/contactmanager/updateContact'

export default class extends Component {

    render() {

        let t = this

        let s = t.state

        if (s.redirect === true) {

            return <Redirect to={"/Display/" + s.id} />

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

    async getData() {

        let t = this
        let s = t.state

        await fetch(EP_URL + '/' + s.id)

            .then(response => response.json())

            .then(result => t.setState({

                id: result.id,
                name: result.name,
                description: result.description

            }))

            .catch(e => console.log(e));

    }

    getDataMock() {

        let t = this

        t.setState({

            name: 'Judas Priest',
            description: 'Greatest Heavy Metal Band of The World!'

        })

    }

    async componentDidMount() {

        let t = this

        //t.getDataMock()

        await t.getData()

    }

    async submitData() {

        let t = this
        let s = t.state

        await fetch(

            EP_UPDATEURL,

            {

                method: 'PUT',

                headers: {

                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },

                body: JSON.stringify({

                    id: s.id,

                    name: s.name,

                    description: s.description

                })

            }

        )

            .then(result => t.setState({

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

        t.state = {

            id: props.match.params.id,

            redirect: false

        }

        t.changeHandler = t.changeHandler.bind(t)
        t.submitHandler = t.submitHandler.bind(t)

    }

}
