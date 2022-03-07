const url = "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"

function getApiNumber(){
    fetch( url, {
        method: 'GET',
        mode:'cors',
        cache:'no-cache'
    })
    .then(res => res.json())
    .then((data) => {
        let responseNumber = data.value;
        console.log(responseNumber, String(responseNumber).length)
    })
    .catch(e => {
        console.log(e)
    })
}

getApiNumber();