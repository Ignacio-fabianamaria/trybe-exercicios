function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  /*Exercício 1
 Crie um calendário dinamicamente.
O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
A tag <ul> deve conter o id 'days';
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
Primeiro passo: Crie uma lista com os dias.*/

//🚀Primeiro passo: Crie uma lista com os dias.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 
    23, 24, 25, 26, 27, 28, 29, 30, 31];

//🚀Segundo passo: Crie a função a ser executada para popular nosso calendário. 
//🚀Terceiro passo: Armazene o elemento da id days em uma variável, para isso, será utilizado o querySelector.
//🚀Quarto passo: Crie um loop que popule a ul com nossa lista.
//🚀Quinto passo Crie uma variável que gere uma li e outra para indicar o dia.
//🚀Sexto passo: Crie condicionais dentro do loop.
//🚀Sétimo passo: Adicione a lógica a cada etapa condicional que você criou.
//🚀Oitavo passo: Execute a função para criar o calendário.
function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');
    for (let index = 0; index < decemberDaysList.length; index += 1) {
    // Este loop vai ocorrer enquanto o index for menor que o tamanho do decemberDaysList
    // A cada iteração do _loop for_ selecione vamos armazenas o elemento dia atual  na variável `day`,  
    //ao mesmo tempo em que a variável `dayItem` armazena a criação de novas `<li>`;
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;

    // Adicione o valor do dia atual para cada <li> criado.
    // crie abaixo a estrutura condicional que adicionará a classe correta à cada dia.

    if (day === 24 || day === 31) {
        // Caso o dia for 24 ou 31
        dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
      } else if (day === 4 || day === 11 || day === 18) {
        // Caso o dia for 4, 11 ou 18
        dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        // Caso o dia for 25
        dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
      } else {
        // Caso o dia for qualquer outro dia que não seja os de cima
        dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
  }
}
}


createDaysOfTheMonth();

