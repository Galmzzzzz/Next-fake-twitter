class PagesConfig{
    PROFILE(username: string){
        return `u/${username}`
    }
    HOME(){
        return '/'
    }
    EXPLORE(){
        return '/explore'
    }
    PROFILE_FAKE(){
        return '/profile-fake'
    }
}

export const PAGES = new PagesConfig()