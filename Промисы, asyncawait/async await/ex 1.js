"user strict"
async function loadJson(url){

    let responce  = await fetch(url);
    if (responce.status == 200){
        return await responce.json();
    }
    else{
        throw new Error (responce.status);
    }
        
    
    
    
}
loadJson('sfhskh.json');