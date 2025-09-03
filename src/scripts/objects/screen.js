const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        this.userProfile.innerHTML = `<div class = "info">
                                <img src = "${user.avatarUrl}" alt = "Foto do perfil do usuário"/>
                                <div class = "data">
                                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1> 
                                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                    <div class = "datafollow">
                                        <p class= "followers">👥 Seguidores: ${user.followers} </p>
                                        <p class= "followers">👥 Seguindo: ${user.following}</p>
                                    </div>
                                </div>
                        </div>`
        
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="_blank">${repo.name} 
                            <ul class = "repo-info"> 
                                 <li>🍴${repo.forks_count}</li> 
                                 <li>⭐ ${repo.stargazers_count}</li>
                                 <li>👀 ${repo.watchers_count}</li>
                                 <li> 🧑‍💻 ${repo.language ?? 'Sem linguagem'}</li>
                            </ul>
                            </a>
        </li>`);
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class = "repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ''
        user.events.forEach((even) => {
            if(even.type == 'PushEvent'){
                eventsItens += `<li><p class="event-header">${even.repo.name}</p> - <p> ${even.payload.commits[0].message ?? 'Evento não possui descrição'}</p></li>`
            }else if(even.type == 'CreateEvent'){
                eventsItens += `<li><p class="event-header">${even.repo.name}</p> - <p> ${even.payload.description ?? 'Evento não possui descrição'}</p></li>`
            }
        })
        
        if(eventsItens.length > 0){
            this.userProfile.innerHTML += `<div class = "events section">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                           </div>`
        }
    },

    renderUserNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }