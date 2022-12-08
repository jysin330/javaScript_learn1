// var num1 = 7;
// var num2 = 6;
// console.log(num1 + num2);

var sellingPrice = 199;
var listingPrice = 799;
var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("discount percentage is :" + discountPercent);
var displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage);
result = (typeof displayDiscountPercentage);
console.log(result);