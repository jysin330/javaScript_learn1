var getUserrole = function (name, role) {
    // function getUserrole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is the admin with all access`;
            break;
        case "subadmin":
            return `${name} is the subadmin with access to create/delete courses`;
            break;
        case "testprep":
            return `${name} is the testprep with access to create/delete test`;
            break;
        case "user":
            return `${name} is the user consume all content`;
            break;
        default:
            return `trial user`;
            break;
    }
}

var userRole = getUserrole("jyoti", "testprep");
console.log(userRole);