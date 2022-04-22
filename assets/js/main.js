const email = document.getElementById('input-email')
const visible = document.getElementById('visible')
const emailOutput = document.getElementById('email-output')
const hiddenModal = document.getElementById('hidden-modal')


const subscribeModal = () => {

    if (email.value == '') {
        alert('Please enter a Email adresse')
    } else {
        console.log(email.value);
        emailOutput.innerHTML = email.value
        hiddenModal.style.visibility = 'visible'
        visible.style.visibility = 'hidden'
    }

}

const closeModal = () => {
    hiddenModal.style.visibility = 'hidden'
    visible.style.visibility = 'visible'
    email.value = ''
}