const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

// const emailPattern = /^ ([A-Za-z0-9_.]) +\@([a-z0-9]) +\.([a-z])  +$/;



form.addEventListener('submit' , (e) => {
    e.preventDefault();
    validation();  
    alert('success');     
})
// form.addEventListener('submit' , validation , false)

function validation(){
    // alert('clicked');
    if(username.value == ''){
        alert('Enter Username');
        form.username.focus();
        form.username.style.outline = '2px solid red';
        return false;
    }

    if(!isNaN(username.value)){
        alert('Enter alphabets only');
        form.username.focus();
        return false;
    }

    if(username.value.length > 0){
        form.username.style.outline = '2px solid green';
    }


    if(email.value ==''){
        alert('Enter valid email');
        form.email.focus();
        form.email.style.outline = '2px solid red';
        return false;
    } else if(!email.value.isEmail()){
        alert('Enter valid email');
        form.email.focus();
        form.email.style.outline = '2px solid red';
        return false;
    } else{
        form.email.style.outline = '2px solid green';
    }





    if(password.value.length <3 || password.value.length >10 ){
        alert('Enter password min 3 or max 10 characters');
        form.password.focus();
        form.password.style.outline = '2px solid red';
        return false;
    }

    if(password.value.length >=3 || password.value.length <=10){
        form.password.style.outline = '2px solid green';
    }

    if(password.value != password2.value) {
        alert('Password and Confirm password should be matched');
        form.password2.focus();
        form.password2.style.outline = '2px solid red';
        return false;
    }

    if(password.value == password2.value){
        form.password2.style.outline = '2px solid green';
    }

    return true;




}