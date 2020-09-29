//import { findAll } from './mock'
import { findAll } from './rest'

export async function retrieveAll(s) {

    return await findAll(s)

}

export function defaultRowList() {

    return []

}
