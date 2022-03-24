export const validateNumber = (value: string) => {
  const phone = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
  if (value.match(phone)) {
    return true;
  } else {
    return false;
  }
};
