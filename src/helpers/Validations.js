export const validationLogin = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Is not a valid email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { //Expresiones regulares
    errors.email = 'Is not a valid email';
  } else if (values.email.trim().length > 50) {
    errors.email = 'Wrong credentials';
  } else if (values.email.trim().length < 8) {
    errors.email = 'Wrong credentials';
  } else if (values.email.trim().split(" ").length > 1) {
    errors.email = 'Wrong credentials';
  }

  if (!values.password) {
    errors.password = 'Wrong credentials'
  } else if (values.password.length < 8) {
    errors.password = 'Wrong credentials'
  } else if (values.password.length > 30) {
    errors.password = 'Wrong credentials'
  }
  return errors;
};

export const validationRegister = (values) => {
  let errors = {};
  if (!values.naim) {
    errors.naim = 'The name is a must'
  } else if (values.naim.trim().length > 30){
    errors.naim = 'The name cannot have more than 30 characters'
  } else if (values.naim.trim().length < 3){
    errors.naim = 'The name cannot have less than 3 characters'
  }

  if (!values.email) {
    errors.email = 'The email is a must';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { //Expresiones regulares
    errors.email = 'The email is not valid';
  } else if (values.email.trim().length > 50) {
    errors.email = 'The email cannot have more than 50 characters';
  } else if (values.email.trim().length < 8) {
    errors.email = 'The email cannot have less than 8 characters';
  } else if (values.email.trim().split(" ").length > 1) {
    errors.email = 'The email cannot have spaces';
  }

  if (!values.pass1 || !values.pass2) {
    errors.password = 'The password is a must'
  } else if (values.pass1 !== values.pass2) {
    errors.password = 'The passwords are not alike'
  } else if (values.pass1.length < 8){
    errors.password = 'The password cannot have less than 8 characters'
  } else if (values.pass1.length > 30) {
    errors.password = 'The password cannot have more than 30 characters'
  }

  return errors;
};