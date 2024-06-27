const validationLogin = ({email,password}) => {
    const errors = {};
    const regexMail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.(com|COM)$/

    if (!email) {
      errors.email = "Please enter your email."
    } else if (!regexMail.test(email)) {
        errors.email = "Please enter a valid email."
      }

    if (!password) {
      errors.password = "Please enter your password."
    }

    return errors;
}

export default validationLogin