const EP_URL = '/contacts'

export async function findAll(t) {

    await fetch(EP_URL)

        .then(response => {

            return response.json()

        })

        .then(json => {

            t.state.rowList = json

        })

        .catch(e => console.log(e))

}
