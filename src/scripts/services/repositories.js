import { baseUrl, repositoriesQuantity} from '../../scripts/variables.js';

// Para buscar os repositórios do usuários é preciso usar a função com o link abaixo

async function getRepositories(userName){
    const response = await fetch(`${ baseUrl }/${userName}/repos?per_page=${repositoriesQuantity}`) //limitando a busca para até 10 repositórios
    return await response.json()
}

export { getRepositories }