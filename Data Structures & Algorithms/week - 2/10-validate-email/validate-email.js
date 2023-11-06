// function validateEmail(email) {
//   //const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   return emailRegex.test(email);
// }

function validateEmail(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }
  // return email.split("@");
  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split(".");
  // return domainExtension;
  if (domainExtension.length < 2 || domainExtension[1] < 2) {
    return false;
  }
  return true;
}

module.exports = validateEmail;
