"user strict"
function count(obj){
    let count = 0;
    for (let value of Object.values(obj)){
        count++;
    }
    return count;
  }
  let user = {
    name: 'John',
    age: 30
  };
  console.log(count(user));