"user strict"
class HttpError extends Error {
    constructor (responce) {
        super (`${responce.status} for ${responce.url}` );
        this.name = 'HttpError';
        this.responce  = responce;

    }
}
    
async function loadJson (url) {
    let responce = await fetch(url);
    if (responce.status == 200){
        let json = await responce.json();
        return json;
    }
}   throw new HttpError(responce);

async function demoGitHubUser() {
    let name = prompt ('введите логин', 'cringe');
    for (let i of user.name){
        loadJson();

    }

    
}