//import { create } from './mock'
import {create} from './rest'

export async function submit(s) {

    if (s.row.name === '') {

        return { ok: false }

    }

    return await create(s)

}

export function defaultRow() {

    return ({

        name: '',
        description: ''

    })

}
