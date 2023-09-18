const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const musicaFocoInput = document.querySelector('#alterar-musica')
const musica = new Audio('./sons/luna-rise-part-one.mp3')
console.log(musica)



focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    alterarActive('foco')
})

curtoBt.addEventListener('click', () =>{
    alterarContexto('descanso-curto')
    alterarActive('descanso-curto')
})

longoBt.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
    alterarActive('descanso-longo')
})


function alterarActive (contexto) {
    const bottons = document.querySelectorAll('.app__card-button')
    switch (contexto) {
        case 'foco':
            bottons.forEach(function(botao) {
                botao.classList.remove('active')
            })
            focoBt.classList.add('active')
            break;

        case 'descanso-curto':
            bottons.forEach(function(botao) {
                botao.classList.remove('active')
            })
            curtoBt.classList.add('active')
            break;

        case 'descanso-longo':
            bottons.forEach(function(botao) {
                botao.classList.remove('active')
            })
            longoBt.classList.add('active')
            break;
        

        default:
            break;
    }
}


function alterarContexto (contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `<h1 class="app__title">
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
        </h1>`

            break;
        case 'descanso-curto':
            titulo.innerHTML = `<h1 class="app__title">
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
        </h1>`
            break;
        case 'descanso-longo':
            titulo.innerHTML = `<h1 class="app__title">
            hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
        </h1>`
            break
        default:
            break;
    }
}

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})