const username = document.querySelector('#username')
const password = document.querySelector('#password')
const email = document.querySelector('#email')
const emailErr = document.querySelector('.email')
const usernameErr = document.querySelector('.username')

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
const englishPattern = /\b\w*a\w*\b/;

function charCount(e, c) {
    const count = e.target.value
    if (count.length <= c) {
        e.target.nextElementSibling.textContent = `It must be ${c} characters!`
        e.target.classList.add('border')
        e.target.classList.add('border-red-400')
        return false
    } else {
        e.target.nextElementSibling.textContent = ``
        e.target.classList.remove('border')
        e.target.classList.remove('border-red-400')
        return true
    }

}
function validateEmail(email) {
    return emailPattern.test(email);
}
function validateEnglish(letter) {
    return englishPattern.test(letter);
}
const errorElements = document.querySelectorAll('.error');

username.addEventListener('keyup', (e) => {
    if (!validateEnglish(e.target.value)) {
        usernameErr.textContent = 'Please type english letters!!!'
        e.target.classList.add('border', 'border-red-400');
        
    } else if (!charCount(e, 4)) {
        usernameErr.textContent = 'It must be 4 characters!'

    } else {
        usernameErr.textContent = ''
        e.target.classList.remove('border', 'border-red-400');
    }
})

password.addEventListener('keyup', (e) => {
    charCount(e, 6)

})

email.addEventListener('keyup', (e) => {
    if (!validateEmail(e.target.value)) {
        emailErr.textContent = 'Email is not valid'
        e.target.classList.add('border')
        e.target.classList.add('border-red-400')
    } else {
        emailErr.textContent = ''
        e.target.classList.remove('border')
        e.target.classList.remove('border-red-400')
    }
})




