//Contador
const contVit = document.querySelector('#vit')
const contDer = document.querySelector('#der')
const contEmp = document.querySelector('#emp')
let victory = 0;
let lose = 0;
let draw = 0;


// //definindo resultado do computador
const computerPlay = () => {
	const computer = Array.from(document.querySelectorAll('#right li img'));
	const i = (Math.floor(Math.random() * 3));
	const pcResult = computer[i];

    //definindo uma border pro resultado escolhido
	computer.forEach(element => {
		if (element === pcResult) {
			element.style.border = '3px solid red'
		} else {
			element.style.border = 'none'
		}
	})
	return pcResult.id
}

//pegando a lista do html
const lista = document.querySelectorAll('#left li');
const listaArr = Array.from(lista)
//faz com que o jogo só seja chamado se uma opção por clicada
listaArr.forEach(element => {
	element.onclick = function (e) {
		//definindo o player/pc
		const player = e.target.id;
        const computer = computerPlay();
        
        //retira o hide do middle para que não apareça antes da hora
        document.querySelector(".middle").classList.remove("hide")

        //Textos
		const text = document.querySelector('.middle .contour h3')
		const resultados = document.querySelector('.middle .contour p')

        //funções para vitória/derrota/empate
		const empate = () => {
			//Texto de resultado:
			text.innerHTML = 'Empate!'
			text.style.color = '#adb1ad'
			resultados.innerHTML = `${player} e ${computer}`
			//Placar
			draw += 1;
			contEmp.innerHTML = `Empates:${draw}`
		}
		const derrota = () => {
			text.innerHTML = 'Você perdeu'
			text.style.color = 'red'
			resultados.innerHTML = `${computer} bate ${player}`
			lose += 1;
			contDer.innerHTML = `Derrotas:${lose}`
		}
		const vitoria = () => {
			text.innerHTML = 'Vitória!'
			text.style.color = '#62ff47'
			resultados.innerHTML = `${player} bate ${computer}`
			victory += 1;
			contVit.innerHTML = `Vitórias:${victory}`
		}
        //Switch no player e então no computador pra definir o resultado
		switch (player) {
			case 'pedra':
				switch (computer) {
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
				switch (computer) {
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
				switch (computer) {
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
		}
	}
});