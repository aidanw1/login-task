import { useState, useEffect } from "react";

//validate takes an object, values and returns another object, errors.

const useForm = (
  callback,
  validate,
  LOCAL_STORAGE_KEY,
  rememberMe,
  setRememberMe
) => {
  const [values, setValues] = useState({});

  // const [values, setValues] = useLocalStorage("User values", {});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const email = rememberMe ? localStorage.getItem("email") : "";
    setValues({ email, rememberMe });
    // setValues(email);
    // setRememberMe(rememberMe);
  }, []);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    // Only validate if the validate function is used
    if (validate) {
      setErrors(validate(values));
    }

    if (values) {
      setIsSubmitting(true);
    }

    setValues("");

    if (values.email !== "") {
      alert(`${values.email} has logged in`);
    }

    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("email", rememberMe ? values.email : "");
  };

  const handleChange = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
