//Discount = (ListPrice - SellingPrice)/ListPrice * 100

// a + ((b * c) / d) * e

var SellingPrice = 199;
var listPrice = 799;

var discountPercent = ((listPrice - SellingPrice) / listPrice) * 100;

console.log("Discount Price is: " + discountPercent);

roundDiscountPercentage = Math.round(discountPercent);

console.log(roundDiscountPercentage + "% off");

var result = listPrice > SellingPrice;

console.log(typeof result);