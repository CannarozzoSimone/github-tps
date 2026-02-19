var c=5,r=5,vet=[];
var max=100,rnd;
for(var i=0;i<5;i++){
    vet[i]=random(rnd);
    console.log(vet[i]);
}let mat=[];
for(var i=0;i<r;i++){
    for(var j=0;j<r;j++){
        mat[[i][j]]=random(rnd);
    }
}
console.log(mat);



function random(rnd){rnd=Math.floor(Math.random() * max);return rnd;}