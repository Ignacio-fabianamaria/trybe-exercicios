//05-Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
//Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//*Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//*Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo01 = 35;
let angulo02 = 60;
let angulo03 = 90;

let somaAngulo = angulo01 + angulo02 + angulo03;
let positivAngulo = angulo01 > 0 && angulo02 > 0 && angulo03 > 0;

if (positivAngulo) {
    if (somaAngulo === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
}else{
    console.log('Erro');
}