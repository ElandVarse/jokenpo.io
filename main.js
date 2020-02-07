var texto = document.getElementById('texto');
//definindo resultado do computador
function computerPlay(){ 
    const computer = ['pedra', 'papel', 'tesoura'];
    var i = ( Math.floor(Math.random() * 3));
    return computer[i]; 
}
//Jogo
function jokenpo(){
    //variáveis pra utilizar no contador 
    let emp=0;
    let vit=0;
    let der=0;

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
                emp++
                document.getElementById("emp").innerHTML=`Empates:${emp}`;
                break;
            case 'papel':
                pcTes.style.border= 'none';
                pcPe.style.border= 'none';
                pcPap.style.border= '3px solid red';
                texto.innerHTML='Perdeu';
                der++;
                document.getElementById("der").innerHTML=`Derrotas:${der}`;
                break;
            case 'tesoura':
                pcPe.style.border= 'none';
                pcPap.style.border= 'none';
                pcTes.style.border= '3px solid red';
                texto.innerHTML='Venceu';
                vit++;
                document.getElementById("vit").innerHTML=`Vitórias:${vit}`;
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
                    vit++;
                    document.getElementById("vit").innerHTML=`Vitórias:${vit}`;
                    break;
                case 'papel':
                    pcTes.style.border= 'none';
                    pcPe.style.border= 'none';
                    pcPap.style.border= '3px solid red';
                    texto.innerHTML='Empate';
                    break;
                    emp++
                    document.getElementById("emp").innerHTML=`Empates:${emp}`;
                case 'tesoura':
                    pcPe.style.border= 'none';
                    pcPap.style.border= 'none';
                    pcTes.style.border= '3px solid red';
                    texto.innerHTML='Perdeu';
                    der++;
                    document.getElementById("der").innerHTML=`Derrotas:${der}`;
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
                    der++;
                    document.getElementById("der").innerHTML=`Derrotas:${der}`;
                    break;
                case 'papel':
                    pcPe.style.border= 'none';
                    pcTes.style.border= 'none';
                    pcPap.style.border= '3px solid red';
                    texto.innerHTML='Venceu';
                    vit++;
                    document.getElementById("vit").innerHTML=`Vitórias:${vit}`;
                    break;
                case 'tesoura':
                    pcPap.style.border= 'none';
                    pcPe.style.border= 'none';
                    pcTes.style.border= '3px solid red';
                    texto.innerHTML='Empate';
                    emp++
                    document.getElementById("emp").innerHTML=`Empates:${emp}`;
                    break;
            }
            break;
        } 
    }
}
jokenpo();