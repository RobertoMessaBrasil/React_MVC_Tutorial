const EP_URL = 'http://localhost:8080/contactmanager/findById'
const EP_UPDATEURL = 'http://localhost:8080/contactmanager/updateContact'

export async function findById(s) {

    return (

        await fetch(EP_URL + '/' + s.id)

            .then(response => response.json())

            .catch(e => console.log(e))

    )

}

export async function updateContact(s) {

    let row = s.row

    return (

        await fetch(

            EP_UPDATEURL,

            {

                method: 'PUT',

                headers: {

                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },

                body: JSON.stringify({

                    id: row.id,

                    name: row.name,

                    description: row.description

                })

            }

        )

            .then(response => { ok: true })

            .catch(e => {

                console.log(e)

                return { ok: false }

            })

    )

}
