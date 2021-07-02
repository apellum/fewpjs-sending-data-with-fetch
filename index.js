// Add your code here
// //}

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name, email})
    })
    .then(resp => resp.json())
    .then(data => displayId(data))
    .catch(error => displayError(error))

}

// const getUserAndEmail = () => {
//     const userInfo = {
//         name: userInput().value,
//         email: emailInput().value
//     }
//     return userInfo
// }

const displayId = (data) => {
        const wrapper = document.createElement('div')
        const text = document.createElement("p")
        text.innerHTML = data.id

        wrapper.appendChild(text)

        document.getElementById('data-ids').appendChild(wrapper)
}
const displayError = (error) => {
        const errorWrapper = document.createElement('div')
        const errorText = document.createElement("p")
        errorText.innerHTML = error.message

        errorWrapper.appendChild(errorText)

        document.getElementById('error-messages').appendChild(errorWrapper)
}