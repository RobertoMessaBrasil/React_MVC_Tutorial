const EP_URL = 'http://192.168.0.103:8080/contacts'

export async function findById(t) {

    await fetch(EP_URL + '/' + t.state.id)

        .then(response => response.json())

        .then(json => { t.state.row = json })

        .catch(e => console.log(e))

}
