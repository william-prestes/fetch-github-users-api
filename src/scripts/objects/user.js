const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    forks: '',
    stars: '',
    watchers: '',
    language: '',
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.forks = gitHubUser.forks
        this.stars = gitHubUser.stars
        this.watchers = gitHubUser.watchers
        this.language = gitHubUser.language
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}

export { user }