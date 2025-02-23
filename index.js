
//email pattern
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//email value
let emailInput = document.querySelector('.email-input');

//button value
let buttonElement = document.querySelector(".emailbutton");

//Button function
buttonElement.addEventListener("click", function (event){
  if (emailInput.value.match(emailPattern)) {
    emailInput.textContent = 'Valid email';
    emailInput.style.color = 'green';
    event.preventDefault();
  } else {
    emailInput.textContent = 'Invalid email';
    emailInput.style.color = 'red';
    event.preventDefault();
  }
}
 )


