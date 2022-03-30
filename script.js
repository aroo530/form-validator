const register = document.getElementById("register-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Check length of input
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getElementName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getElementName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
//check if the passwords match
function checkPasswordsMatch(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    showError(password, " ");
  } else {
    showSuccess(confirmPassword);
  }
}
//check if input is required and has a value
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getElementName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// this shows the error message + changes the color of the BORDER of the parent
function showError(input, message) {
  //get the form-control element to change the class name and display the error border
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  //get the small element to change the text
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// this changes the color of the BORDER of the parent
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// to make the first letter of the input name uppercase
function getElementName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
register.addEventListener("change", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, confirmPassword);
});
