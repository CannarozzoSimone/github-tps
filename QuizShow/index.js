var _domanda = document.getElementById("domanda");
var _risposte = document.getElementsByTagName("span");
var m=0;

var domanda = ["Quanto fa 5+3?", "Capitale d'Italia", "JS è un linguaggio interpretato"];
let risposte = [
    ["6", "7", "8", "9"],
    ["Napoli", "Torino", "Roma", "Fossano"],
    ["Si", "No", "Dipende", "Chiedo a Teo"]
];
caricaDomanda();
function conferma()
{
    if(m>=2){

    }else{
        m++;
        caricaDomanda();
    }
}
function caricaDomanda(){

_domanda.textContent = domanda[m];
for (let j = 0; j < _risposte.length; j++) {
    if (risposte[m][j]) {
        _risposte[j].textContent = risposte[m][j];
        }
    }
}
