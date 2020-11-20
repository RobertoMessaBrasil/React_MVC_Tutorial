const EP_URL = '/contacts'

export async function findById(t) {

    return (

        await fetch(EP_URL + '/' + t.state.id)

            .then(response => response.json())

            .then(json => { t.state.row = json })

            .catch(e => console.log(e))

    )

}

export async function updateContact(t) {

    let s = t.state
    let row = s.row

    return (

        await fetch(

            EP_URL + '/' + row.id,

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

            .then(response => { t.state.ok = true })

            .catch(e => {

                console.log(e)

                t.state.ok = false

            })

    )

}
