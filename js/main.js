const form = document.getElementById('form1');
const name = document.getElementById('name');
const uname = document.getElementById('uname');
const mob = document.getElementById('mob');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passworderror = document.getElementById('passworderror');


function validateName() {
    if (name.value.trim() === '') {
        name.value = 'Name is required';
    } 
}

function validateUname() {
    if (uname.value.trim() === '') {
        uname.value = 'Username is required';
    } 
}

function validateEmail() {
    const emailPattern = /^([a-zA-Z0-9._-]+)@([a-zA-Z.-]+).([a-zA-Z]{2,4})$/;
    if (!emailPattern.test(email.value)) {
        email.value = 'Invalid email format';
    } 
}


function validatePassword(){
if (password.value.trim() === '') {
    passworderror.textContent = 'Password is required.';
} else if (password.value.length < 8) {
    passworderror.textContent = 'Password must be at least 8 characters.';

}
}
function validateMob(){
    if(mob.value === '')
    {
        mob.value = 'Mobile Number is required'
    }
}

name.addEventListener('blur', validateName);
uname.addEventListener('blur', validateUname);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
mob.addEventListener('blur',validateMob);

form.addEventListener('submit', function (event) {
    validateName();
    validateEmail();
    validatePassword();
    validateUname();
    validateMob();

    if (!name.value ||!uname.value|| !email.value ||!password.value||!mob.value) {
        event.preventDefault(); 
    }
});


