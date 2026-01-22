var min=1,max=9;
var n1=0,n2=0,n3=0;
var attivo=false;
function gioca()
{
    n1=generaNumero(min,max);
    n2=generaNumero(min,max);
    n3=generaNumero(min,max);
    document.getElementById("n1").innerHTML="<b>"+n1+"</b>";
    document.getElementById("n2").innerHTML="<b>"+n2+"</b>";
    document.getElementById("n3").innerHTML="<b>"+n3+"</b>";
    if(n1==n2 && n2==n3&&n1==n3)
    {
        alert("JACKPOT!!!!!!");
    }else if(n1==n2||n2==n3||n1==n3){
        alert("Doppia vincita");
    }else{
        alert("Hai perso");
    }
}
function cheat(){
    max=1;
    min=1;
}
function generaNumero(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}