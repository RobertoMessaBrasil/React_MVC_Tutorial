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

        let tt = {state:s}

        await retrieveAll(tt)

        t.setState(tt.state)

    }

    constructor(props) {

        super(props);

        let t = this

        t.state = { rowList: defaultRowList() }

    }

}
