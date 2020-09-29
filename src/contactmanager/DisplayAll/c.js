import { Component } from 'react'

import { defaultRowList, retrieveAll } from './m'
import { displayAll } from './v'

export default class extends Component {

    render() {

        let t = this

        return displayAll(t)

    }

    async componentDidMount() {

        let t = this
        let s = t.state

        t.setState({ rowList: await retrieveAll(s) })

    }

    constructor(props) {

        super(props);

        let t = this

        t.state = { rowList: defaultRowList() }

    }

}
