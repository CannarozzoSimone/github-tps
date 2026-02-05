var _domanda = document.getElementById("domanda");
var _risposte = document.getElementsByTagName("span");
var _pallini = document.getElementsByName("risposta");

var m = 0;
var punti = 0;

var domanda = ["Quanto fa 5+3?", "Capitale d'Italia", "JS è un linguaggio interpretato"];
var risposte = [
    ["6", "7", "8", "9"],
    ["Napoli", "Torino", "Roma", "Fossano"],
    ["Si", "No", "Dipende", "Chiedo a Teo"]
];
var soluzioni = [2, 2, 0];

caricaDomanda();

function caricaDomanda() {
    _domanda.textContent = domanda[m];
    for (var j = 0; j < _risposte.length; j++) {
        _risposte[j].textContent = risposte[m][j];
        _pallini[j].checked = false;
    }
}

function conferma() {
    var scelta = -1;

    for (var i = 0; i < _pallini.length; i++) {
        if (_pallini[i].checked) {
            scelta = i;
        }
    }

    if (scelta == -1) {
        alert("Seleziona una risposta!");
        return;
    }

    if (scelta == soluzioni[m]) {
        alert("Corretto!");
        punti++;
    } else {
        alert("Sbagliato!");
    }

    if (m < domanda.length - 1) {
        m++;
        caricaDomanda();
    } else {
        alert("Fine! punteggio finale: " + punti + "/" + domanda.length);
    }
}