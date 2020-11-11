//import { findById } from './mock'
import {findById} from './rest'

export async function retrieve(t) {

    return await findById(t)

}

export function defaultRow() {

    return ({

        name: '',
        description: ''

    })

}
