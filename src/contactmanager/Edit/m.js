//import { findById } from './mock'
//import { updateContact } from './mock'
import {findById} from './rest'
import { updateContact } from './rest'

export async function retrieve(s) {

    return await findById(s)

}

export async function submit(s) {

    if (s.row.name === '') {

        return { ok: false }

    }

    return await updateContact(s)

}

export function defaultRow() {

    return ({

        name: '',
        description: ''

    })

}
