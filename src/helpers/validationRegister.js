const validationRegister = ({city,country,phone,username,email,password,confirmPassword}) => {
    const errors = {};
    const regexLetters = /^[a-zA-Z\s]+$/
    const regexUsername = /^[\w.-]+$/
    const regexMail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.(com|COM)$/

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

    if (!regexLetters.test(city) && city !== "") {
      errors.city = "Please enter a valid city"
    }

    if (!regexLetters.test(country) && country !== "") {
      errors.country = "Please enter a valid country"
    }

    if (phone < 100000000 && phone !== "") {
      errors.phone = "Your phone number must contain at least 9 digits"
    }

          return errors;
}

export default validationRegister