const EP_URL = '/contacts'

export async function create(t) {

    let s = t.state

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

        .then(response => { t.state.ok = true })

        .catch(

            e => {

                t.state.ok = false

                console.log(e)

            }

        )


}
