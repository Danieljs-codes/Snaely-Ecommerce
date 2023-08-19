import { useState } from 'react';

// Define a custom hook for handling form state, validation, and submission
export function useForm(initialState, validationRules, submitCallback) {
  // State to store form values
  const [values, setValues] = useState(initialState);

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Function to validate a specific field based on validation rules
  function validateField(fieldName) {
    if (validationRules[fieldName]) {
      // Call the validation function for the field and get error message, if any
      const errorMessage = validationRules[fieldName](values[fieldName]);
      // Update errors state with the new error message, if any
      setErrors(prevErrors => ({ ...prevErrors, [fieldName]: errorMessage }));
    }
  }

  // Function to validate the entire form
  function validateForm() {
    let hasErrors = false;
    const newErrors = {};

    // Iterate over each field and apply validation rules
    Object.keys(values).forEach(fieldName => {
      // Call the validation function for the field and get error message, if any
      const errorMessage = validationRules[fieldName](values[fieldName]);
      if (errorMessage) {
        newErrors[fieldName] = errorMessage;
        hasErrors = true;
      }
    });

    // Update errors state with new error messages
    setErrors(newErrors);

    // Return true if no validation errors, otherwise false
    return !hasErrors;
  }

  function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  }

  function handleChange(fieldName, value) {
    // Update values state with the new value

    setValues(prevValues => ({ ...prevValues, [fieldName]: value }));
    // Debounce the validateField function using setTimeout

    const debouncedValidation = debounce(fieldName => {
      validateField(fieldName);
    }, 1000);

    debouncedValidation(fieldName);
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Validate the entire form and submit if no errors
    if (validateForm()) {
      submitCallback(values);
      // Hack Around Not clearing the form immediately after submit waiting 3 seconds (Guessing the redirect should have happen by then)
      setValues(initialState);
      setErrors({});
    }
  }

  // Return an object with form values, errors, change handler, and submit handler
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}
