"user strict"
function multiplyNumeric(obj){
    for (let key in obj){
        
        if(typeof(obj[key] === Number)){
            
            obj[key] *= 2;
        }
    
   
    
    }
    return obj;
}
console.log(multiplyNumeric(salaries))