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
    if (typeof savedGame.AMZprice !== undefined) AMZprice = savedGame.AMZprice;
    if (typeof savedGame.AMZqty !== undefined) AMZqty = savedGame.AMZqty;
    if (typeof savedGame.Cash !== undefined) Cash = savedGame.Cash;
  }
  
  function saveGame() {
    var gameSave = {
      AMZprice: AMZprice,
      AMZqty: AMZqty,
      Cash: Cash
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
  }
  
  window.onload = function() {
    loadGame();
    document.getElementById("AMZprice").innerHTML = AMZprice;
    document.getElementById("AMZqty").innerHTML = AMZqty;
    document.getElementById("Cash").innerHTML = Cash;
    window.onload = function begin001() {
      message001.innerHTML = a001 + " + " + a002 + " =";
      message002.innerHTML = "<input type=text id=input001 /> <button onclick=check001() class=mathcheck>Check</button>";
  }
  };