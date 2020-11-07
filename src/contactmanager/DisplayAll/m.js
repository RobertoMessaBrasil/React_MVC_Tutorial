//import { findAll } from './mock'
import { findAll } from './rest'

export async function retrieveAll(t) {

    await findAll(t)

}

export function defaultRowList() {

    return []

}
