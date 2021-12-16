/*Mostrar y esconder los logins*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

signUp.addEventListener('click', () => {
    //eliminar clasess primero, si existen
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    //añadir las clases
    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

signIn.addEventListener('click', () => {
    //eliminar clasess primero, si existen
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    //añadir las clases
    loginIn.classList.add('block')
    loginUp.classList.add('none')
})