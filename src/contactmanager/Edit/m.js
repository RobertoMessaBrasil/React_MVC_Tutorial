//import { findById } from './mock'
//import { updateContact } from './mock'
import { findById } from './rest'
import { updateContact } from './rest'

export async function retrieve(t) {

    await findById(t)

}

export async function submit(t) {

    let s = t.state
    
    if (s.row.name === '') {
        
        t.state.ok = false

        return

    }

    await updateContact(t)

}

export function defaultRow() {

    return ({

        name: '',
        description: ''

    })

}
