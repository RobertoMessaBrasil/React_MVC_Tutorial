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

        let tt = {state:s}

        await retrieve(tt)

        t.setState(tt)

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
