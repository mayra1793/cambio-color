window.addEventListener("load", function() {
   var button = document.getElementById("resultado");
   button.addEventListener("click", function() {
       var cuentaSegundos = parseInt(document.getElementById("cuentaSegundos").value);
        setInterval(color,cuentaSegundos*1000);
        function color(){
        document.body.style.backgroundColor= '#'+Math.floor(Math.random()*1677721).toString(16);
		}
    });
});