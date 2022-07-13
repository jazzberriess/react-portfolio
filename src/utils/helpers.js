export function validateEmail(email) {
  const reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return reg.test(String(email).toLocaleLowerCase());
}

export function validateMessage(name, message) {
  const reg = /^[_\.\-!@#\$%\^&*()\]\[\}\{?"',\w]+$/;

  return reg.test(String(name, message));
}
