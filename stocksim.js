var Cash = 1000;

var AMZprice = 100;
var AMZqty = 0;

var AAPLprice = 130;
var AAPLqty = 0;

var TSLAprice = 120;
var TSLAqty = 0;

var RandomNumber = 0.5;
var AMZprice2 = RandomNumber + AMZprice;

setInterval(function() {
    document.getElementById("Cash").innerHTML = Cash;
    document.getElementById("AMZprice").innerHTML = AMZprice;
    document.getElementById("AMZqty").innerHTML = AMZqty;
    document.getElementById("AAPLprice").innerHTML = AAPLprice;
    document.getElementById("AAPLqty").innerHTML = AAPLqty;
    document.getElementById("TSLAprice").innerHTML = TSLAprice;
    document.getElementById("TSLAqty").innerHTML = TSLAqty;
  }, 2500);

setInterval(function() {
  var RandomNumber = Math.round((Math.random()) * (4 - -2) - 3);
  var AMZpriceChange = AMZprice + RandomNumber;
  AMZprice = AMZpriceChange;
  if (AMZprice < 30) {
    AMZprice = 31;
  }
  if (AMZprice > 170) {
    AMZprice = 120;
  }

  var RandomNumber2 = Math.round((Math.random()) * (6 - -4) - 5);
  var AAPLpriceChange = AAPLprice + RandomNumber2;
  AAPLprice = AAPLpriceChange;
  if (AAPLprice < 60) {
    AAPLprice = 61;
  }
  if (AAPLprice > 200) {
    AAPLprice = 156;
  }
  
  var RandomNumber3 = Math.round((Math.random()) * (8 - -6) - 7);
  var TSLApriceChange = TSLAprice + RandomNumber3;
  TSLAprice = TSLApriceChange;
  if (TSLAprice < 50) {
    TSLAprice = 51;
  }
  if (TSLAprice > 190) {
    TSLAprice = 144;
  }

  document.getElementById("RandomNumber2").innerHTML = RandomNumber2;
  document.getElementById("AAPLpriceChange").innerHTML = AAPLpriceChange;
  document.getElementById("RandomNumber").innerHTML = RandomNumber;
  document.getElementById("AMZpriceChange").innerHTML = AMZpriceChange;
  document.getElementById("RandomNumber3").innerHTML = RandomNumber3;
  document.getElementById("TSLApriceChange").innerHTML = TSLApriceChange;
  }, 1);