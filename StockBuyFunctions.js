function buyAMZ() {
    if (Cash >= AMZprice) {
      Cash = Cash - AMZprice;
      AMZqty = AMZqty + 1;
      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("AMZqty").innerHTML = AMZqty;
    }
  }

function buyAAPL() {
    if (Cash >= AAPLprice) {
      Cash = Cash - AAPLprice;
      AAPLqty = AAPLqty + 1;
      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("AAPLqty").innerHTML = AAPLqty;
    }
  }

function buyTSLA() {
    if (Cash >= TSLAprice) {
      Cash = Cash - TSLAprice;
      TSLAqty = TSLAqty + 1;
      document.getElementById("Cash").innerHTML = Cash;
      document.getElementById("TSLAqty").innerHTML = TSLAqty;
    }
  }