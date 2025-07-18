document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('dropform')
    const usernameInput = document.getElementById('username')
    const emailInput = document.getElementById('email')
    const subjectSelect = document.getElementById('subject')
    const passwordInput = document.getElementById('password')
    const subjectInput = document.getElementById('confirm')
    const errParagraph = document.getElementById('error')

    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        let errMessages = []
        usernameInput.classList.remove("is-invalid");
        emailInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-invalid");
        subjectSelect.classList.remove("is-invalid");
        subjectInput.classList.remove("is-invalid");

        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const subject = subjectSelect.value;
        const confirm = subjectInput.value;

        if(username.trim() === ""){
            errMessages.push("กรุณากรอก Username");
            usernameInput.classList.add("is-invalid");
        }
        if(email.trim()===""){
            errMessages.push("กรุณากรอก Email");
            emailInput.classList.add("is-invalid");
        }
        if(password.trim()===""){
            errMessages.push("กรุณากรอก password");
            passwordInput.classList.add("is-invalid");
        }
        if(subject===""){
            errMessages.push("กรุณาเลือกวิชา");
            subjectSelect.classList.add("is-invalid");
        }
        if(!subjectInput.checked){//!confirm.checked
            errMessages.push("กรุณากด check-box");
            subjectInput.classList.add("is-invalid");
        }
        
        if(errMessages.length>=0){
            errParagraph.innerHTML = errMessages.join("<br>");
        }

    })
})
