const submit = document.querySelector(".submit-btn");
const error = document.querySelector(".error");
const input = document.querySelector("input");
const form = document.querySelector("form");
const label = document.querySelector("label");

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate(e) {
    e.preventDefault()
    const inputValue = input.value
    console.log(inputValue)

    if (inputValue === ""){
        error.style.display ="block"
    }else if (!validEmail (inputValue)){
        error.style.display ="block"
    }else{
        error.style.display ="none"
    }
}

function validEmail(input) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test
    (input)
}