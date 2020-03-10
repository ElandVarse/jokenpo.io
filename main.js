//Contador
const contVit = document.querySelector('#vit')
const contDer = document.querySelector('#der')
const contEmp = document.querySelector('#emp')
let victory=0;
let lose=0;
let draw=0;


// //definindo resultado do computador
const computerPlay = () => {
    const computer = Array.from(document.querySelectorAll('#right li img'));
    const i = (Math.floor(Math.random() * 3));
    const pcResult = computer[i];
    
    computer.forEach(element => {
        if(element===pcResult){
            element.style.border='3px solid red'
        }
        else{
            element.style.border='none'
        }
    })
    return pcResult.id
}


document.querySelector('#left').onclick= function(e){
    const text = document.querySelector('.middle .contour h3')
    const resultados = document.querySelector('.middle .contour p')
    
    //resultado do player/pc
    const player = e.target.id;
    const computer = computerPlay();  
    
    const empate = () =>{
        //Texto de resultado:
        text.innerHTML='Empate!'
        resultados.innerHTML=`${player} e ${computer}`
        resultados.style.color='grey'
        //Placar
        draw+=1;
        contEmp.innerHTML=`Empates:${draw}`
        console.log('Empate!')
    }
    const derrota = () =>{
        text.innerHTML='Derrota!'
        resultados.innerHTML=`${computer} bate ${player}`
        resultados.style.color='red'
        lose+=1;
        contDer.innerHTML=`Derrotas:${lose}`
        console.log('derrota!')
    }
    const vitoria = () =>{
        text.innerHTML='Vitória!'
        resultados.innerHTML=`${player} bate ${computer}`
        resultados.style.color='green'
        victory+=1;
        contVit.innerHTML=`Vitórias:${victory}`
        console.log('Vitória!')
    }
    
    switch(player){
        case 'pedra':
            switch(computer){
                case 'pedra':
                    empate();
                    break;
                case 'papel':
                    derrota();
                    break;
                case 'tesoura':
                    vitoria();
                    break;
            }
            break;

            case 'papel':
                switch(computer){
                    case 'pedra':
                        vitoria();
                        break;
                    case 'papel':
                        empate();
                        break;
                    case 'tesoura':
                        derrota();
                        break;
                }
                break;

                case 'tesoura':
                    switch(computer){
                        case 'pedra':
                            derrota();
                            break;
                        case 'papel':
                            vitoria();
                            break;
                        case 'tesoura':
                            empate();
                            break;
                    }
                    break;
                    default:
                        console.log('Não entendi')
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




