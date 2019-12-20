//Declarando variáveis para altura e largura do campo de jogo
var altura = 0
var largura = 0
//Declarando quantidade de vidas
var vidas = 1
var tempo = 50
var criaMoscaTempo = 1500

var nivel = window.location.search
	nivel = nivel.replace('?', '')

	if(nivel === 'Barbadinha'){
		//1500 milesegundos (velocidade mosca)
		criaMoscaTempo = 1500
	} else if(nivel === 'Normal'){
		//1000 milesegundos (velocidade mosca)
		criaMoscaTempo = 1000
	} else if(nivel === 'Dedetizador'){
		//750 milesegundos(velocidade mosca)
		criaMoscaTempo = 750
	}
//Recuperando altura e largura do navegador
function ajustaTamanhoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoJogo()

var cronometro = setInterval(function() {
	tempo -= 1

	if(tempo < 0){
		clearInterval(criaMosca)
		clearInterval(cronometro)
		window.location.href = 'vitoria.html'
	}else{
	document.getElementById('cronometro').innerHTML = tempo
	}

	}, 1000) 

function posicaoRandomica() {

	//remover imagem anterior caso exista
	if(document.getElementById('mosca')){
		document.getElementById('mosca').remove()
		if(vidas > 3){
			window.location.href = 'fim_jogo.html'
		}else{
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
		vidas++	
		}
		
	}
	
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
//Ajustando posicionamento para não ficar no ponto 0
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

//Criando o elemento html através do DOM

	var jogo = document.createElement('img')
	jogo.src = 'imagens/mosca.png'
	jogo.className = tamanhoRandom() + ' ' + ladoAleatorio()
	jogo.style.left = posicaoX + 'px'
	jogo.style.top = posicaoY + 'px'
	jogo.style.position = 'absolute'
	jogo.id = 'mosca'
	//Remoção mosca ao clicar
	jogo.onclick = function() {
		this.remove()
	}

	document.body.appendChild(jogo)
}

console.log(tamanhoRandom())

function tamanhoRandom() {
	var classe = Math.floor(Math.random() * 3)
	

	switch(classe){
		case 0:
			return 'tamanhomosca'
		case 1:
			return 'tamanhomosca1'
		case 2:
			return 'tamanhomosca2'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}


