import {getUser} from './src/scripts/services/user.js';
import { getRepositories } from './src/scripts/services/repositories.js';
import { getEvents } from './src/scripts/services/events.js';

import { user } from './src/scripts/objects/user.js'
import { screen } from './src/scripts/objects/screen.js';

/* A função abaixo está adicionando um listener para quando o botão for clicado, passar o usuario que foi escrito para a função que busca o usuáio na api do github */

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

/* Abaixo é inserido uma função para adionar um evento quando for pressionado a tecla enter e desse forma irá buscar o usuario que foi passado como paramentro */

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode  // essa linha serve para pegar o código chave quando a tecla é apertada
    const isEnterKeyPressed = key === 13   // 13 é o código da tecla enter no javascript

    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Digite o nome de um usuário')
        return true
    }
}


async function getUserData(userName){

    const userResponse = await getUser(userName) // Buscando os dados na api do GitHub

    if(userResponse.message === 'Not Found'){
        screen.renderUserNotFound()
        return
    }
    user.setInfo(userResponse) // Atribuindo o objeto que criamos com a resposta da api

    const repositoriesResponse = await getRepositories(userName)
    user.setRepositories(repositoriesResponse)

    const eventsResponse = await getEvents(userName)
    user.setEvents(eventsResponse)
    
    
    screen.renderUser(user) // Enviando o user para o objeto screen, para ele ser mostrado ao usuário
}



