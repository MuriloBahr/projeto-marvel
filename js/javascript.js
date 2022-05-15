const personagens = document.querySelectorAll(".personagens")


personagens.forEach((personagens) =>{
    personagens.addEventListener('mouseenter', () =>{
        
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagens.classList.add('selecionado')
        
        const  idSelecionado = personagens.attributes.id.value;
        console.log(idSelecionado)
        const imagemJogador1 = document.querySelector('#personagem-jogador1')
        imagemJogador1.src = `./imagens/${idSelecionado}.png`
        const nomes = document.querySelector('.nome-personagem')
        const nomeSelecionado = personagens.getAttribute('data-name')
        nomes.innerHTML = `${nomeSelecionado}`
    })
})