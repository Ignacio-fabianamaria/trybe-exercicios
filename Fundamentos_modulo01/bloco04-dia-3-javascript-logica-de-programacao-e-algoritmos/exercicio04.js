//4- Um número primo é um número inteiro maior do que 1 que possui somente 
//dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numPrimoMarior = 0;

for (let index = 2; index <=50; index+=1) {
          let Primo = true;
        for (let indexdiv = 2; indexdiv  < index; indexdiv  += 1) {
          if (index % indexdiv  === 0) {
            Primo = false;
          }
        }
        if (Primo) {
            numPrimoMarior = index;
        }
      }
      
      console.log(numPrimoMarior);