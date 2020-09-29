import { findById } from './mock'
//import {findById} from './rest'

export async function retrieve(s) {

    return await findById(s)

}

export function defaultRow() {

    return ({

        name: '',
        description: ''

    })

}
