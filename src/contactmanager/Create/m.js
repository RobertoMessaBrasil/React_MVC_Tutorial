//import { create } from './mock'
import {create} from './rest'

export async function submit(t) {

    let s = t.cState

    if (s.row.name === '') {

        s.ok = false

        return

    }

    await create(t)

}

export function defaultRow() {

    return ({

        name: '',
        description: ''

    })

}
