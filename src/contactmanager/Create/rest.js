const EP_URL = 'http://localhost:8080/contactmanager/createContact'

export async function create(s) {

    return (

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

            }

        )

            .then(response => s.result = { ok: true })

            .catch(

                e => {

                    s.result = { ok: false }

                    console.log(e)

                }

            )

    )


}
