"user strict"
function dictinary(obj){
    let sumCash = 0;
    for (let key in obj){
        
        sumCash += obj[key];
        
        
    }   

    return sumCash;
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let blackhole = {}