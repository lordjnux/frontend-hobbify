const validationRegister = ({name,surname,username,email,password,confirmPassword}) => {
    const errors = {};
    const regexName = /^[a-zA-Z\s]+$/
    const regexUsername = /^[\w.-]+$/
    const regexMail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.(com|COM)$/

         
    if (!name) {
      errors.name = "Please enter your name."
    } else if (!regexName.test(name)) {
      errors.name = "Name should only contain letters."
    }

    if (!surname) {
      errors.surname = "Please enter your surname."
    } else if (!regexName.test(surname)) {
      errors.surname = "Surname should only contain letters."
    }

    if (!username) {
      errors.username = "Please enter your username."
    } else if (!regexUsername.test(username)) {
      errors.username = "Username can only contain alphanumeric characters, dots, dashes and underscores."
    }

    if (!email) {
      errors.email = "Please enter your email."
    } else if (!regexMail.test(email)) {
      errors.email = "Please enter a valid email."
    }

    if (!password) {
      errors.password = "Please enter your password"
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password"
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Password confirmation must match the entered password."
    }

          return errors;
}

export default validationRegister