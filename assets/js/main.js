const email = document.getElementById('input-email')
const emailOutput = document.getElementById('email-output')
const hiddenModal = document.getElementById('hidden-modal')


const subscribeModal = () => {

    if (email.value == '') {
        alert('enter a email')
    } else {
        console.log(email.value);
        emailOutput.innerHTML = email.value
        hiddenModal.style.visibility = 'visible'
        email.style.visibility = 'hidden'
    }

}

const closeModal = () => {
    hiddenModal.style.visibility = 'hidden'
    email.style.visibility = 'visible'
    email.value = ''
}