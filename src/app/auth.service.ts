export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800)
        })
        return promise;
    }

    onloggedIn(){
        this.loggedIn = true;
    }

    onLogout(){
        this.loggedIn = false;
    }
}