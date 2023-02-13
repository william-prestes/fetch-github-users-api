const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥.'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😥.'}</p><br>
                                            <ul>
                                                <li>👥 ${user.followers} Seguidores</li>
                                                <li>👥 ${user.following} Seguindo</li>
                                            </ul>
                                        </div>
                                    </div>`
    
        if (user.repositories.length > 0) {
            let repositoriesItems = ''
            user.repositories.forEach (repo => {              
                repositoriesItems += `<li><a href="${repo.html_url}" target="_blank"><h4>${repo.name}</h4>
                                        <i> 🍴 ${repo.forks_count}</i>
                                        <i> ⭐ ${repo.stargazers_count}</i>
                                        <i> 👀 ${repo.watchers_count}</i>
                                        <i> 👩‍💻 ${repo.language ?? 'Linguagem não identificada.'}</i>
                                    </a></li>`
            })
                
            this.userProfile.innerHTML += `<div class="repositories">
                                              <h2>Repositórios:</h2>
                                              <ul>${repositoriesItems}</ul>
                                           </div>`
        }

        if (user.events.length > 0) {            
            let eventsItems = ''
            user.events.forEach(event => {
                if (event.payload) {
                    if (event.payload.commits) {
                        const commits = event.payload.commits
                        const commitsList = commits.map (commit => `<span>${commit.message}</span>`)
                        eventsItems += `<li><strong>${event.repo.name}:</strong> ${commitsList}</li>`
                    }
                }
            })

        this.userProfile.innerHTML += `<div class="events">
                                            <h2>Eventos:<h2>
                                            <ul>${eventsItems}</ul>
                                        </div>` 
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado.</h3>`
    }
}

export { screen }