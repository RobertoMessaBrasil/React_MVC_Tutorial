const EP_URL = 'http://192.168.0.103:8080/contactmanager/contacts'

export async function findAll(t) {

    await fetch(EP_URL)

        .then(response => {

            return response.json()

        })
        .then(json => {

            t.cState.rowList = json

        })

        .catch(e => console.log(e))

}
