const EP_URL = 'http://192.168.0.103:8080/contactmanager/contacts'

export async function create(t) {

    let s = t.cState

    await fetch(

        EP_URL,

        {

            method: 'POST',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({

                name: s.row.name,

                description: s.row.description

            })

        })

        .then(response => { t.cState.ok = true })

        .catch(

            e => {

                t.cState.ok = false

                console.log(e)

            }

        )


}
