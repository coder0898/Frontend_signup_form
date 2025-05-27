import "./style.css";

// Input elements
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailId = document.getElementById("emailId");
const password = document.getElementById("password");

// Error messages
const nameError = document.getElementById("nameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Error icons
const fnameIcon = document.getElementById("fnameIcon");
const lnameIcon = document.getElementById("lnameIcon");
const emailIcon = document.getElementById("emailIcon");
const passwordIcon = document.getElementById("passwordIcon");

const submitBtn = document.getElementById("submitBtn");

// Helper: Email validation
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

// Helper: Set error message, icon, and styling
function setError(input, errorElement, iconElement, message) {
  errorElement.innerText = message;
  iconElement.style.display = "block";
  input.style.borderColor = "var(--primary-background)";
  input.style.color = "var(--primary-background)";
}

// Helper: Clear previous errors
function clearErrors() {
  const errorElements = [nameError, lastNameError, emailError, passwordError];
  const iconElements = [fnameIcon, lnameIcon, emailIcon, passwordIcon];
  const inputElements = [firstName, lastName, emailId, password];

  errorElements.forEach((error) => (error.innerText = ""));
  iconElements.forEach((icon) => (icon.style.display = "none"));
  inputElements.forEach((input) => {
    input.style.borderColor = "";
    input.style.color = "";
  });
}

// Main validation function
function submitSignup() {
  clearErrors(); // clear previous errors

  const inputFname = firstName.value.trim();
  const inputLname = lastName.value.trim();
  const inputEmail = emailId.value.trim();
  const inputPassword = password.value.trim();

  let hasError = false;

  if (!inputFname) {
    setError(firstName, nameError, fnameIcon, "First Name cannot be empty");
    hasError = true;
  }

  if (!inputLname) {
    setError(lastName, lastNameError, lnameIcon, "Last Name cannot be empty");
    hasError = true;
  }

  if (!inputEmail) {
    setError(emailId, emailError, emailIcon, "Email cannot be empty");
    hasError = true;
  } else if (!isValidEmail(inputEmail)) {
    setError(emailId, emailError, emailIcon, "Looks like this is not an email");
    hasError = true;
  }

  if (!inputPassword) {
    setError(password, passwordError, passwordIcon, "Password cannot be empty");
    hasError = true;
  }

  if (!hasError) {
    // You can proceed with form submission here (e.g. send to backend)
    console.log("Form submitted successfully!");
  }
}

// Attach listener
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitSignup();
});
