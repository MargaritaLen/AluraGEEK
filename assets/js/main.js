// ----------- Footer -----------------------------------------------------

const nome = document.getElementById('nome')
const mensagem = document.getElementById('mensagem')

nome.addEventListener('blur', validaNome)

function validaNome () {
    let nomeInserido = nome.value

    const isNameValid = nomeInserido.match(/^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$/);

    if (isNameValid) {
        nome.classList.remove("error")
        return true;
    }

    nome.classList.add("error")
    return false;
}

mensagem.addEventListener('blur', validaMensagem)

function validaMensagem () {
    let mensagemInserida = mensagem.value

    if (mensagemInserida != "") {
        mensagem.classList.remove("error")
        return true;
    }

    mensagem.classList.add("error")
    return false;
}

const btnEnviarMensagem = document.querySelector('.fale-conosco button')

btnEnviarMensagem.addEventListener('click', validaFaleConosco)

function validaFaleConosco () {

    if (validaNome() && validaMensagem()) {
        alert ("Mensaje enviado")
        return 0
    }
    
    alert ("Todos los campos deben estar llenos")
}


//--------------------------------------------

