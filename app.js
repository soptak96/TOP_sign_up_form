        const form = document.querySelector("form");
        const firstName = document.querySelector("#first_name");
        const lastName = document.querySelector("#last_name");
        const email = document.querySelector("#email");
        const number = document.querySelector("#phone_number");
        const password1 = document.querySelector("#password");
        const password2 = document.querySelector("#confirm_password")

        form.addEventListener("submit", e => 
        {
            e.preventDefault();
            validateInput();
        });

        // form.addEventListener("change", validateInput)


        function validateInput() {
            const firstNameValue = firstName.value.trim();
            const lastNameValue = lastName.value.trim();
            const emailValue = email.value.trim();
            const numberValue = number.value.trim();
            const password1Value = password1.value.trim();
            const password2Value = password2.value.trim();

            if (firstNameValue === "" || firstNameValue === null){
                setError(firstName, "first name cannot be empty!")

            }
            else setSuccess(firstName);

            if(lastNameValue === ""){
                setError(lastName, "last name cannot be empty!")
            }
            
            else setSuccess(lastName);

            if(emailValue === ""){
                setError(email, "email cannot be empty!")
            }
            
            else if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailValue)))
            {
                setError(email, "please provide a valid email address")
            }
            else setSuccess(email);

            if(numberValue === ""){
                setError(number, "number cannot be empty!")
            }
            else setSuccess(number);

            if(password1Value === ""){
                setError(password1, "password cannot be empty!")
            }
            else setSuccess(password1);
            
            if(password2Value === ""){
                setError(password2, "this field cannot be empty!")
            }
            else if(password2Value !==  password1Value){
                setError(password2, "password doesn't match!")
            }
            else {setSuccess(password2)};

            // if(firstNameValue && lastNameValue && emailValue && numberValue && password1Value && password2Value){
            //     location.reload()
            // }
            if(firstName.className === "success" && lastName.className === "success" && email.className === "success"
            && number.className === "success" && password1.className === "success" && password2.className === "success")
                {
                    swal(`${firstNameValue}!`, "You successfully sign-up an account!", "success");
                    setTimeout(() => { location.reload(); }, 2000);}

        }

        function setError(element, message){
            const inputControl = element.parentNode;
            const msg = inputControl.querySelector(".msg");
            msg.textContent = message;
            element.classList.add("error");
            element.classList.remove("success") 
        }

        function setSuccess(element){
            const inputControl = element.parentNode;
            console.log(inputControl);
            const msg = inputControl.querySelector(".msg");
            element.classList.add("success");
            element.classList.remove("error")
            msg.textContent = "";
        }
