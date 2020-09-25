import { Component } from 'react'

import v from './v'

const EP_URL = 'http://localhost:8080/contactmanager/findById'

export default class extends Component {

    render() {

        let t = this

        return v(t)

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

    constructor(props) {

        super(props)

        let t = this

        t.state = {

            id: props.match.params.id

        }

    }

}
