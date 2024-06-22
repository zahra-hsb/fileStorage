const username = document.querySelector('#username')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#c-password')
const email = document.querySelector('#email')
const emailErr = document.querySelector('.email')
const usernameErr = document.querySelector('.username')
const cPassErr = document.querySelector('.c-password')
const hide = document.querySelectorAll('.hide')
const SignIn = document.querySelector('#SignIn')

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
const englishPattern = /\b\w*a\w*\b/;

function charCount(e, c) {
    const count = e.target.value
    if (count.length <= c) {
        e.target.nextElementSibling.nextElementSibling.textContent = `It must be ${c} characters!`
        e.target.classList.add('border')
        e.target.classList.add('border-red-400')
        SignIn.disabled = true
        return false
    } else {
        e.target.nextElementSibling.nextElementSibling.textContent = ``
        e.target.classList.remove('border')
        e.target.classList.remove('border-red-400')
        SignIn.disabled = false
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
        SignIn.disabled = true
    } else if (!charCount(e, 4)) {
        usernameErr.textContent = 'It must be 4 characters!'
        SignIn.disabled = true

    } else {
        usernameErr.textContent = ''
        e.target.classList.remove('border', 'border-red-400');
        SignIn.disabled = false
    }
})

password.addEventListener('keyup', (e) => {
    charCount(e, 6)

})

cpassword.addEventListener('keyup', (e) => {
    if (password.value !== e.target.value) {
        cPassErr.textContent = 'confirm password is incorrect'
        e.target.classList.add('border')
        SignIn.disabled = true
        e.target.classList.add('border-red-400')
    } else {
        cPassErr.textContent = ''
        e.target.classList.remove('border')
        e.target.classList.remove('border-red-400')
        SignIn.disabled = false
    }

})

email.addEventListener('keyup', (e) => {
    if (!validateEmail(e.target.value)) {
        emailErr.textContent = 'Email is not valid'
        e.target.classList.add('border')
        SignIn.disabled = true
        e.target.classList.add('border-red-400')
    } else {
        emailErr.textContent = ''
        e.target.classList.remove('border')
        e.target.classList.remove('border-red-400')
        SignIn.disabled = false
    }
})

hide.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (e.target.previousElementSibling.type == 'password')
            e.target.previousElementSibling.type = 'text'
        else
            e.target.previousElementSibling.type = 'password'
    })
})

if (email.value === '' || username.value === '' || password.value === '' || cpassword.value === '') {
    SignIn.disabled = true
}

// if (SignIn.disabled === true) {
//     SignIn.classList.add('opacity-50')
//     SignIn.classList.add('cursor-not-allowed')
// }

