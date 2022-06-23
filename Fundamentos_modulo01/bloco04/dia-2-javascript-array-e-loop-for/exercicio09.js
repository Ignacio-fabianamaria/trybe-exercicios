//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let listaNumbers=[];

for (let index = 1; index <= 25; index+=1) {
    listaNumbers.push(index);
    
}
console.log(listaNumbers);

let divListaNumbers=[];

for (let index = 0; index < listaNumbers.length; index+=1) {
   divListaNumbers.push(listaNumbers[index]/2);
    
}
console.log(divListaNumbers);