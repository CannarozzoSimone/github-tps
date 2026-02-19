let vettoreSimboli = ["🍇","🍇","🍎","🍎","🍍","🍍","🍌","🍌","🥭","🥭"];
var tentativi=2;
let prima=-1,seconda=-1,match=false;
vettoreSimboli.sort(function (a, b) {
    let r = Math.random();
    if (r < 0.5) return -1;
    else return 1;
});

function GiraCarta(indice) {
    const caselle = document.querySelectorAll(".carta");
    const casellaCliccata = caselle[indice];
    casellaCliccata.innerHTML = "<span>" + vettoreSimboli[indice] + "</span>";
    if(prima==-1){
        prima=indice;
    }else{
        seconda=indice;
    }
    if(vettoreSimboli[prima]==vettoreSimboli[seconda]){
        prima=-1;seconda=-1;
    }else{
        rigiraCarta(indice);
    }
}

function rigiraCarta(indice) {
    const caselle = document.querySelectorAll(".carta");
    const casellaCliccata = caselle[indice];
    casellaCliccata.innerHTML = "?";
    for(let i=0;i<10;i++){
        caselle[i].innerHTML="?";
    }
}