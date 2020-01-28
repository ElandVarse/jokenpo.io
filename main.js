var texto = document.getElementById('texto');
//definindo resultado do computador
function computerPlay(){ 
    const computer = ['pedra', 'papel', 'tesoura'];
    var i = ( Math.floor(Math.random() * 3));
    return computer[i]; 
}
//Jogo
function jokenpo(){
    //Aqui é pra pegar o resultado de qual imagem foi clicada
    document.getElementById('img').onclick= function(e){
    let player = e.target.id;
    //daqui pra baixo é o resultado aleatório do computador e depois a lógica
    let computer = computerPlay();

    switch(player){
        case 'pedra':
        switch(computer){
            case 'pedra':
                //teste de resultado
                texto.innerHTML='Empate';
                break;
            case 'papel':
                texto.innerHTML='Perdeu';
                break;
            case 'tesoura':
                texto.innerHTML='Venceu';
                break;
        }
        break;

    case 'papel':
        switch(computer){
            case 'pedra':
                //teste de resultado
                alert(`Computador escolheu ${computer}`);
                alert('Você venceu!')
                break;
            case 'papel':
                alert(`Computador escolheu ${computer}`);
                alert('Empate')
                break;
            case 'tesoura':
                alert(`Computador escolheu ${computer}`);
                alert('Você perdeu')
                break;
        }
    break;

    case 'tesoura':
        switch(computer){
            case 'pedra':
                alert(`Computador escolheu ${computer}`);
                alert('Você perdeu')
                break;
            case 'papel':
                alert(`Computador escolheu ${computer}`);
                alert('Você venceu!')
                break;
            case 'tesoura':
                alert(`Computador escolheu ${computer}`);
                alert('Empate')
                break;
         }
         break;
    } 
 }
}
jokenpo();

//respirando através de alerts :(