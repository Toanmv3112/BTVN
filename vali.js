let formElement = document.querySelector('#form-vali');
let userNameElement = formElement.querySelector('#username');
let passElement = formElement.querySelector('#password');
let fullNameElement = formElement.querySelector('#fullname');
let emailElement = formElement.querySelector('#email');
//user, pass, fullname có ĐK giống nhau nên tạo fuction dùng chung
function validate(input) {
    error = input.parentElement.querySelector('.form-error');
    if (!input.value.trim()) {
        error.innerText = 'Vui lòng nhập trường này'
        return false;
    } else if (input.value.trim().length < 5 || input.value.trim().length > 10) {
        error.innerText = 'độ dài từ 5-10 ký tự'
        return false;
    } else {
        error.innerText = '';
        return true;
    }
}
function validateEmail(input) {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
    error = input.parentElement.querySelector('.form-error');
    if (!input.value.trim()) {
        error.innerText = 'Vui lòng nhập trường này'
        return false;
    } else if (regex.test(input.value.trim())) {
        error.innerText = '';
        return true;
    } else {
        error.innerText = 'Phải nhập email ở đây';
        return false;
    }
}
userNameElement.onblur = function () {
    validate(userNameElement)
}
passElement.onblur = function () {
    validate(passElement)
}
fullNameElement.onblur = function () {
    validate(fullNameElement)
}
emailElement.onblur = function () {
    validateEmail(emailElement)
}
formElement.onsubmit = function (e) {
    validate(userNameElement)
    validate(passElement)
    validate(fullNameElement)
    validateEmail(emailElement)
    let check= validate(userNameElement)+validate(passElement)+validate(fullNameElement)+ validateEmail(emailElement)
    console.log(check); // tiện cho KT có bao nhiều thằng ok
    if(check!=4){
        return false;
    } return true;
}
    


