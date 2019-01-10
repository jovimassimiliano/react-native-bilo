const validate = (val,rules) => {
  let isValid = true;
  
  for(let rule in rules){
    switch(rule){
      case 'isEmail':
        return isValid = isValid && emailValidator(val);
      case 'minLength':
        return isValid = isValid && minLengthValidator(val,rules[rule]);
      case 'equalTo':
        return isValid = isValid && equalToValidator(val,rules[rule]);
      default:
       return isValid;
    }
  }
  return isValid;
}

const emailValidator = val => {
  const regex = /\S+@\S+\.\S+/;

  return regex.test(val)
}

const minLengthValidator = (val,minLength) => {
  return val.length >= minLength;
}

const equalToValidator = (val, checkValue) => {
  return val === checkValue;
}

export default validate;