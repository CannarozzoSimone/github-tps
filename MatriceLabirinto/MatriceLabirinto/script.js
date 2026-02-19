let mappa = [];
const cella = document.getElementById('labirinto');
const tesoro = document.getElementById('tesoro');
function genera() {
    let bucaFatta = false;
    let tesoroFatto = false;
    for (let i = 0; i < 16; i++) {
        let n = Math.floor(Math.random() * 5);
        if (n == 3) {
            if (bucaFatta) n = 0; 
            else bucaFatta = true;
        }
        if (n == 4) {
            if (tesoroFatto) n = 0;
            else tesoroFatto = true;
        }
        mappa[i] = n;
    }
    let x = Math.floor(Math.random() * 5);
    if(!bucaFatta){
        mappa[x]=3
    }else if(!tesoroFatto){
        x = Math.floor(Math.random() * 5);
        mappa[x]=4
    }
}
function disegna() {
    let contenuto = "";
    for (let i = 0; i < 16; i++) {
        let valore = mappa[i];
        let simbolo = "";
        let colore = "#444";
        switch(valore){
            case 1:
            simbolo = "🏆"; 
            colore = "#ffd700";
            break;
            case 2:
            simbolo = "👾"; 
            colore = "#9932cc"; 
            break;
            case 3:
            simbolo = "💀"; 
            colore = "#ff4500"; 
            break;
            case 4:
            simbolo = "💎"; 
            colore = "#00bfff"; 
            break;
        }
        contenuto += '<div class="cella" style="background-color:' + colore + '">' + simbolo + '</div>';
    }
    cella.innerHTML = contenuto;
}
function TrovaTesoro(){
    let i=0
    while(mappa[i]!=4)
    {
        
    }
    tesoro.innerHTML='<span>il tesoro si trova in posizione: '+ i +'</span>'
}
genera();
disegna();
TrovaTesoro();