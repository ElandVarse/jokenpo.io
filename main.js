//Contador
let victory = 0;
let lose = 0;
let draw = 0;

// //definindo resultado do computador
const computerPlay = () => {
	const computer = Array.from(document.querySelectorAll('#right li img'));
	const i = (Math.floor(Math.random() * 3));
	const pcResult = computer[i];

    //definindo um background pro resultado escolhido
	computer.forEach(element => {
		if (element === pcResult) {
			element.style.background = '#FF000088'
		} else {
			element.style.background = 'none'
		}

		//resetar os resultados
		reset.addEventListener('click', () => {
			victory=0, lose=0, draw=0;
			vit.innerHTML = `0`
			der.innerHTML = `0`
			emp.innerHTML = `0`
			element.style.background='none'
			document.querySelector(".middle").classList.add("hide")
			
		})
	})
	return pcResult.id
}

//pegando a lista do html
const lista = document.querySelectorAll('#left li img');
const listaArr = Array.from(lista)
//faz com que o jogo só seja chamado se uma opção por clicada
listaArr.forEach(element => {
	element.onclick = async function (e) {
		//definindo o player/pc
		const player = e.target.id;
		const computer = computerPlay();
		
        //retira o hide do middle para que não apareça antes da hora
        document.querySelector(".middle").classList.remove("hide")

        //Textos
		const text = document.querySelector('.middle h3')
		const resultados = document.querySelector('.middle p')

        //funções para vitória/derrota/empate
		const empate = () => {
			//Texto de resultado:
			text.innerHTML = 'Empate!'
			text.style.color = '#F8EBFF'
			middle.style.backgroundColor = '#80808055'
			resultados.innerHTML = `${player} e ${computer}`
			//Placar
			draw += 1;
			emp.innerHTML = `${draw}`
		}
		const derrota = () => {
			text.innerHTML = 'Você perdeu.'
			text.style.color = '#F8EBFF'
			middle.style.backgroundColor = '#FF000088'
			resultados.innerHTML = `${computer} bate ${player}`
			lose += 1;
			der.innerHTML = `${lose} `
		}
		const vitoria = () => {
			text.innerHTML = 'Vitória!'
			text.style.color = '#F8EBFF'
			middle.style.backgroundColor = '#FF697Faa'
			resultados.innerHTML = `${player} bate ${computer}`
			victory += 1;
			vit.innerHTML = `${victory}`
		}

        //Switch no player e então no computador pra definir o resultado
		switch (player) {
			case 'Pedra':
				switch (computer) {
					case 'Pedra':
						empate();
						break;
					case 'Papel':
						derrota();
						break;
					case 'Tesoura':
						vitoria();
						break;
				}
				break;

			case 'Papel':
				switch (computer) {
					case 'Pedra':
						vitoria();
						break;
					case 'Papel':
						empate();
						break;
					case 'Tesoura':
						derrota();
						break;
				}
				break;

			case 'Tesoura':
				switch (computer) {
					case 'Pedra':
						derrota();
						break;
					case 'Papel':
						vitoria();
						break;
					case 'Tesoura':
						empate();
						break;
				}
				break;
		}
	}
});
