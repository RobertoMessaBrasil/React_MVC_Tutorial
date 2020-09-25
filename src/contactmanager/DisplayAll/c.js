import { Component } from 'react'

import v from './v'

const EP_URL = 'http://localhost:8080/contactmanager/findAll'

export default class extends Component {

    render() {

        let t = this

        return v(t)

    }

    getDataMock() {

        let t = this

        t.setState({

            rowList: [

                { id: 1, name: 'Judas Priest', description: 'Greatest Heavy Metal Band of The World!' }

            ]

        })

    }

    async getData() {

        let t = this

        await fetch(EP_URL)

            .then(response => response.json())

            .then(result => t.setState({


                rowList: result

            }))

            .catch(e => console.log(e));

    }

    async componentDidMount() {

        let t = this

        //t.getDataMock()

        await t.getData()

    }

    constructor(props) {

        super(props);

        let t = this

        t.state = { 'rowList': [] }

    }

}
