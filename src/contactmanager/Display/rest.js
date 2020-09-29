const EP_URL = 'http://localhost:8080/contactmanager/findById'

export async function findById(s) {

    return (

        await fetch(EP_URL + '/' + s.row.id)

            .then(response => response.json())

            .catch(e => console.log(e))

    )

}
