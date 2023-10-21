export const validateCheckValidateData = (email, password, name) =>{
    const isEmailValid =/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/.test(password);
    const isNameValidation = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)

    if(!isEmailValid){
        return "Email ID is Not Valid";
    }

    if(!isPasswordValidation){
        return "Password Is Not Valid";
    }

    if(!isNameValidation){
        return "Name Is Not Valid";
    }

    return null;
}