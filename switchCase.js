var user = "testprep";
switch (user) {
    case "admin":
        console.log("gets full access");
        break;
    case "subadmin":
        console.log("gets access to create/ delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume contact");
        break;
    default:
        console.log("trial user");
        break;
}