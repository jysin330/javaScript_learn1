tipper(5);

//  global context collect all  the information about the code

//  execution context scans all code , and makes functions available  for execution

function tipper(a) {
    var bill = parseInt(a); // parseInt convert the value in number
    console.log(bill + 5);
}
function bigTipper(a) {
    var bill = parseInt(a); // parseInt convert the value in number
    console.log(bill + 5);
}
bigTipper(10);



