"user strict"
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function sumSalaries(salaries){
    let count = 0
    for(let value of Object.values(salaries)){
        count += value
        
    }
    return count
}


  console.log (sumSalaries(salaries))