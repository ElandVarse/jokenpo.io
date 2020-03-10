// //Pensando em maneiras de diminuir e otimizar esse código
// const texto = document.getElementById('texto');

// //definindo resultado do computador
const computerPlay = () => {
    const computer = Array.from(document.querySelectorAll('#right li img'));
    const i = ( Math.floor(Math.random() * 3));
    const pcResult = computer[i];

    pcResult.style.border='3px solid red'
    return pcResult.id;
}

document.getElementById('img').onclick= function(e){
    //Contador contador 
    let emp=0;
    let vit=0;
    let der=0;

    //resultado do player
    const player = e.target.id;
    const computer = computerPlay();    


    const venceu = () => {
        texto.innerHTML='Venceu';
        resultados.innerHTML=`${player} bate ${computerPlay()}`;
        vit+=1;
        document.getElementById("vit").innerHTML=`Vitórias:${vit}`;
    }

    const perdeu = () => {
        console.log(`${computerPlay()} bate ${player}`)
    }

    const empate = () => {
        console.log(`${computerPlay()} e ${player}`)
    }

    switch(player){
        case 'pedra':
            switch(computer){
                case 'pcPe':
                    console.log('Empate')
                    break;
                case 'pcPap':
                    console.log('Perdeu')
                    break;
                case 'pcTes':
                    venceu();
                    break;
            }
    }

}
        

    // switch(player){
    //     case 'pedra':
    //     switch(computer){
    //         case 'pedra':
    //             //teste de resultado
    //             //none é pra zerar bordas toda vez que o player fizer uma escolha, então é selecionada apenas a borda do resultado do computador
    //             pcTes.style.border= 'none';
    //             pcPap.style.border= 'none';
    //             pcPe.style.border= '3px solid red';
    //             texto.innerHTML='Empate';
    //             resultados.innerHTML='Pedra e Pedra'
    //             resultados.style.color='#adb1ad'
    //             emp++
    //             document.getElementById("emp").innerHTML=`Empates:${emp}`;
    //             break;
    //         case 'papel':
    //             pcTes.style.border= 'none';
    //             pcPe.style.border= 'none';
    //             pcPap.style.border= '3px solid red';
    //             texto.innerHTML='Perdeu';
    //             resultados.innerHTML='Papel bate Pedra'
    //             resultados.style.color='red'
    //             der++;
    //             document.getElementById("der").innerHTML=`Derrotas:${der}`;
    //             break;
    //         case 'tesoura':
    //             pcPe.style.border= 'none';
    //             pcPap.style.border= 'none';
    //             pcTes.style.border= '3px solid red';
    //             resultados.style.color='#26ff00'
    //             venceu();
    //             break;
    //     }
    //     break;



    //     case 'papel':
    //         switch(computer){
    //             case 'pedra':
    //                 pcPap.style.border= 'none';
    //                 pcTes.style.border= 'none';
    //                 pcPe.style.border= '3px solid red';
    //                 texto.innerHTML='Venceu';
    //                 resultados.innerHTML='Papel bate Pedra';
    //                 resultados.style.color='#26ff00';
    //                 vit++;
    //                 document.getElementById("vit").innerHTML=`Vitórias:${vit}`;
    //                 break;
    //             case 'papel':
    //                 pcTes.style.border= 'none';
    //                 pcPe.style.border= 'none';
    //                 pcPap.style.border= '3px solid red';
    //                 texto.innerHTML='Empate';
    //                 resultados.innerHTML='Papel e Papel';
    //                 resultados.style.color='#adb1ad';
    //                 emp++;
    //                 document.getElementById("emp").innerHTML=`Empates:${emp}`;
    //                 break;
    //             case 'tesoura':
    //                 pcPe.style.border= 'none';
    //                 pcPap.style.border= 'none';
    //                 pcTes.style.border= '3px solid red';
    //                 texto.innerHTML='Perdeu';
    //                 resultados.innerHTML='Tesoura bate Papel';
    //                 resultados.style.color='red';
    //                 der++;
    //                 document.getElementById("der").innerHTML=`Derrotas:${der}`;
    //                 break;
    //         }
    //     break;
    //     case 'tesoura':
    //         switch(computer){
    //             case 'pedra':
    //                 pcTes.style.border= 'none';
    //                 pcPap.style.border= 'none';
    //                 pcPe.style.border= '3px solid red';
    //                 texto.innerHTML='Perdeu';
    //                 resultados.innerHTML='Pedra bate Tesoura';
    //                 resultados.style.color='red';
    //                 der++;
    //                 document.getElementById("der").innerHTML=`Derrotas:${der}`;
    //                 break;
    //             case 'papel':
    //                 pcPe.style.border= 'none';
    //                 pcTes.style.border= 'none';
    //                 pcPap.style.border= '3px solid red';
    //                 texto.innerHTML='Venceu';
    //                 resultados.innerHTML='Tesoura bate Papel';
    //                 resultados.style.color='#26ff00';
    //                 vit++;
    //                 document.getElementById("vit").innerHTML=`Vitórias:${vit}`;
    //                 break;
    //             case 'tesoura':
    //                 pcPap.style.border= 'none';
    //                 pcPe.style.border= 'none';
    //                 pcTes.style.border= '3px solid red';
    //                 resultados.innerHTML='Tesoura e Tesoura';
    //                 texto.innerHTML='Empate';
    //                 resultados.style.color='#adb1ad';
    //                 emp++;
    //                 document.getElementById("emp").innerHTML=`Empates:${emp}`;
    //                 break;
    //         }
    //         break;
    //     }
    // }




