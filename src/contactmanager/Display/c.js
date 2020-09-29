import { Component } from 'react'

import { defaultRow, retrieve } from './m'

import { display } from './v'

export default class extends Component {

    render() {

        let t = this

        return display(t)

    }

    async componentDidMount() {

        let t = this
        let s = t.state

        t.setState({ row: await retrieve(s) })

    }

    constructor(props) {

        super(props)

        let t = this

        t.state = {

            id: props.match.params.id,
            row: defaultRow()

        }

    }

}
