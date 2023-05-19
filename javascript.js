const pass = document.querySelector("#user_pass");
const confirmPass = document.querySelector("#confirm_pass");
const createButton = document.querySelector("#create");

createButton.addEventListener('click', () =>{
    if (pass.value !== confirmPass.value){
        confirmPass.setCustomValidity("Passwords need to match");                
    }
    else{
        confirmPass.setCustomValidity("");
    }
});

confirmPass.addEventListener('input', () =>{
    if (pass.value !== confirmPass.value){
        confirmPass.style.borderColor = "red";
        
    }
    else{
        confirmPass.style.borderColor = "blue";
        pass.style.borderColor = "blue";
    }
});

pass.addEventListener('input', () =>{
    if (pass.value !== confirmPass.value){
        confirmPass.style.borderColor = "red";
    }
    else{
        confirmPass.style.borderColor = "blue";
        pass.style.borderColor = "blue";
    }
});
