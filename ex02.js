//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares (x, y) {
    var cont;

    for(cont = x; cont <= y; cont++) {
        if(cont % 2 === 0) {
            console.log(cont);
        }
    }
}

pares(32, 321);