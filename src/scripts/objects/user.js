// Criando um objeto para o usuário, ele irá ajudar a transitar menos informações pois só irá retornar o que desejamos da api


const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following:'',
    repositories: [],
    events: [],

    // Atribuindo valor as propriedades criadas acima
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },

    // Agora um método para atribuir os repositórios
    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
       this.events = events
    }
}

export { user }