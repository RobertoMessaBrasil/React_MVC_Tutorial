const EP_URL = '/contacts'

export async function deleteContact(s) {

    return (

        await fetch(

            EP_URL + '/' + s.id,

            {

                method: 'DELETE',

                headers: {

                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                }
                
            }

        )

            .then(response => { ok: true })

            .catch(e => {

                console.log(e)

                return { ok: false }

            })

    )

}
