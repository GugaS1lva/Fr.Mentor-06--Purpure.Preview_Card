const email = document.getElementById('email')
const submit = document.getElementById('submit')
const emailERROR = document.getElementById('emailERROR')

submit.addEventListener('click', function(){
    if (email.value == ''){
        emailERROR.classList.add('invalidEmail')
    
    } else{
        emailERROR.classList.remove('invalidEmail')
    }
})