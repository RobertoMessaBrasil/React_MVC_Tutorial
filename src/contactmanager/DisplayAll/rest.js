const EP_URL = 'http://localhost:8080/contactmanager/findAll'

export async function findAll(s) {

    return (

        await fetch(EP_URL)

            .then(response => response.json())

            .catch(e => console.log(e))

    )

}
