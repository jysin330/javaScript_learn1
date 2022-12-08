var isLoggedIn = false;
var isEmailVarified = true;
var cardInfo = true;
// if (isLoggedIn) {
//     console.log("logged in success");
//     if (isEmailVarified) {
//         console.log("email is verified");
//         if (cardInfo) {
//             console.log("you make a purchase");
//         }
//     }
// }
if (isEmailVarified && isLoggedIn && cardInfo) {
    console.log("you make a purchase");
} else {
    console.log("you are not allowed to purchase");
}