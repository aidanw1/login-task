// 1. Define validation rules for the form
// 2. Store any errors in a state variable
// 3. Prevent the form from submitting if any errors exist

//1.
export default function validateLogin(values) {
  let errors = {};

  // Email Errors
  //2. if value is empty string it will evaluate to true - checks values exist
  if (!values.email) {
    errors.email = "Email required";

    //3.
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
}
