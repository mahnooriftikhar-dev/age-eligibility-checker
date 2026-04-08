const input = document.getElementById("input");
const submit = document.getElementById("submit");
let display = document.getElementById("display");


submit.onclick = function () {
    let age = input.value;
    let message;
    if (isNaN(age)) {
        message = "Please enter a valid number!";
    }

    else if (age >= 16) {
        message = "You are allowed to enter the site";
    }
    else if(age == 16) {
        message = "You are not allowed to enter this site";
    }
        else if(age <= 16) {
        message = "Not Allowed! You are just a Baby!";
    }
    else{
        message="You are free to use it";
    }

    display.textContent = message;
    console.log(message);
}