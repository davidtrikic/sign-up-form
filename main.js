const signupForm = document.querySelector('.main-form');
const passwordDiv = document.querySelector('#password-confirm').parentElement;
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#password-confirm');

const validatePassword = () => {
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    if(password != passwordConfirm) {
        
        passwordDiv.classList.add('error-text');
        passwordInput.classList.add('error');
        passwordConfirmInput.classList.add('error');
    }
    if (password === passwordConfirm) {
        passwordDiv.classList.remove('error-text');
        passwordInput.classList.remove('error');
        passwordConfirmInput.classList.remove('error');
    }
    
}

signupForm.addEventListener('submit', function(e) {e.preventDefault();}); // Prevents form from submitting
passwordConfirmInput.addEventListener('input', validatePassword); 