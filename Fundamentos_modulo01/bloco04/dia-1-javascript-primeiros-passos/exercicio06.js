//06-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
//sem aumentar a quantidade de condicionais.
//*Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//*Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//*Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = 'reI';

switch (pecaXadrez.toLowerCase()) {
    case 'bispo': console.log('Bispo-> Diagonal');

        break;
    case 'rainha': console.log('Rainha-> Move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
        break;
    case 'rei': console.log('Rei-> Mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');

        break;
    case 'cavalo': console.log('Cavalo-> O movimento do cavalo é em forma de “L”');

        break;
    case 'torre': console.log('Torre-> Movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');

        break;
    case 'peão': console.log('Peão-> Movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.');

        break;

    default: console.log('ERRO');
        break;
}