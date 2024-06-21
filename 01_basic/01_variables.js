const accountId = 12345
let accountEmail = "anandchaudharyk@google.com"
var accountPassword = "123"
accountCity = "Solan" 
let accountState

// accountId = 1 //not allowed to change const variable
accountEmail = "hc@hc.com"
accountPassword = "321"
accountCity = "delhi"

console.log(accountId);
/*
Prefer not to use VAR
because of issues in block scope and funcitonal scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState]);