// step-1: add click event handle
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submit button clicked')
    // step-2:
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // const passwordField = document.getElementById('user-password');
    // const password = passwordField.value;
    // console.log(email,password);
    if(email === 'mdsharafat@gmail.com' && password ==='secret'){
        // console.log('valid user')
        window.location.href='bank.html';
    }
    else{
        alert('otke ami taj jo gosona korlam . tui password bula gasos invalid user')
    }
})