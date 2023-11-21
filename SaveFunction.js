var i=0;
setInterval(function(){
    var titles=['stock simulator', 'come back!', 'stock simulator', '[!] Extreme Volatility [!]', 'stock simulator', 'Business Casual!'];
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 3000);

setInterval(function() {
    saveGame();
}, 30000);

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.which == 83) { /* Control + S to manual save */
      event.preventDefault();
      saveGame();
  }
}, false);

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (savedGame && savedGame.AMZprice !== undefined && savedGame.AMZprice !== null) AMZprice = savedGame.AMZprice;
  if (savedGame && savedGame.AMZqty !== undefined && savedGame.AMZqty !== null) AMZqty = savedGame.AMZqty;
  if (savedGame && savedGame.Cash !== undefined && savedGame.Cash !== null) Cash = savedGame.Cash;
}
  
  function saveGame() {
    var gameSave = {
      AMZprice: AMZprice,
      AMZqty: AMZqty,
      Cash: Cash
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
  }
  
  window.onload = function () {
    loadGame();
    var amzPriceElement = document.getElementById("AMZprice");
    var amzQtyElement = document.getElementById("AMZqty");
    var cashElement = document.getElementById("Cash");

    if (amzPriceElement && amzQtyElement && cashElement) {
        amzPriceElement.innerHTML = AMZprice;
        amzQtyElement.innerHTML = AMZqty;
        cashElement.innerHTML = Cash;
    }
  };
