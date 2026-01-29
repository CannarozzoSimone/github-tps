var min = 1, max = 9;
var n1 = 0, n2 = 0, n3 = 0;
var giocate = 0;

function gioca() {
    // Incremento del contatore a ogni giocata
    giocate++;
    
    n1 = generaNumero(min, max);
    n2 = generaNumero(min, max);
    n3 = generaNumero(min, max);
    
    document.getElementById("n1").innerHTML = "<b>" + n1 + "</b>";
    document.getElementById("n2").innerHTML = "<b>" + n2 + "</b>";
    document.getElementById("n3").innerHTML = "<b>" + n3 + "</b>";

    var messaggio = document.getElementById("Messaggio");

    if (n1 == n2 && n2 == n3) {
        messaggio.innerHTML = "JACKPOT!!!!!!";
        messaggio.style.cssText = "color: darkgreen; font-weight: bold;";
        giocate = 0;
    } else if (n1 == n2 || n2 == n3 || n1 == n3) {
        messaggio.innerHTML = "Doppia vincita";
        messaggio.style.cssText = "color: lightgreen;";
    } else {
        messaggio.innerHTML = "Niente... riprova";
        messaggio.style.cssText = "color: red;";
    }
    document.getElementById("Contatore").innerHTML = "Giocate: " + giocate;
}
function generaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}