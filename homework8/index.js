const validator=require ("validator");
const email="test@test.com";
const email2=abcDE123;
console.log(validator.isEmail(email))
console.log(validator.isEmail(email2))