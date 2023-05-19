const pass = document.querySelector("#user_pass");
const confirmPass = document.querySelector("#confirm_pass");

pass.addEventListener('input', () =>{
    if (pass.value !== confirmPass.value){
        pass.setCustomValidity("Passwords need to match");                
    }
    else{
        pass.setCustomValidity("");
    }
});


confirmPass.addEventListener('input', () =>{
    if (pass.value !== confirmPass.value){
        pass.setCustomValidity("Passwords need to match");                
    }
    else{
        pass.setCustomValidity("");
    }
});