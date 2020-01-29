var texto = document.getElementById('texto');
//definindo resultado do computador
function computerPlay(){ 
    const computer = ['pedra', 'papel', 'tesoura'];
    var i = ( Math.floor(Math.random() * 3));
    return computer[i]; 
}
//Jogo
function jokenpo(){
    let pcPe = document.querySelector('#pcPe');
    let pcPap = document.querySelector('#pcPap');
    let pcTes = document.querySelector('#pcTes');

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
                //none é pra zerar bordas toda vez que o player fizer uma escolha, então é selecionada apenas a borda do resultado do computador
                pcTes.style.border= 'none';
                pcPap.style.border= 'none';
                pcPe.style.border= '3px solid red';
                texto.innerHTML='Empate';
                break;
            case 'papel':
                pcTes.style.border= 'none';
                pcPe.style.border= 'none';
                pcPap.style.border= '3px solid red';
                texto.innerHTML='Perdeu';
                break;
            case 'tesoura':
                pcPe.style.border= 'none';
                pcPap.style.border= 'none';
                pcTes.style.border= '3px solid red';
                texto.innerHTML='Venceu';
                break;
        }
        break;
        case 'papel':
            switch(computer){
                case 'pedra':
                    pcPap.style.border= 'none';
                    pcTes.style.border= 'none';
                    pcPe.style.border= '3px solid red';
                    texto.innerHTML='Venceu';
                    break;
                case 'papel':
                    pcTes.style.border= 'none';
                    pcPe.style.border= 'none';
                    pcPap.style.border= '3px solid red';
                    texto.innerHTML='Empate';
                    break;
                case 'tesoura':
                    pcPe.style.border= 'none';
                    pcPap.style.border= 'none';
                    pcTes.style.border= '3px solid red';
                    texto.innerHTML='Perdeu';
                    break;
            }
        break;
        case 'tesoura':
            switch(computer){
                case 'pedra':
                    pcTes.style.border= 'none';
                    pcPap.style.border= 'none';
                    pcPe.style.border= '3px solid red';
                    texto.innerHTML='Perdeu';
                    break;
                case 'papel':
                    pcPe.style.border= 'none';
                    pcTes.style.border= 'none';
                    pcPap.style.border= '3px solid red';
                    texto.innerHTML='Venceu';
                case 'tesoura':
                    pcPap.style.border= 'none';
                    pcPe.style.border= 'none';
                    pcTes.style.border= '3px solid red';
                    texto.innerHTML='Empate';
                    break;
            }
            break;
        } 
    }
}
jokenpo();

//respirando através de alerts :(