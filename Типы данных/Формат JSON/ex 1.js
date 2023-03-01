"user strict"
let user = {
    name: "Василий Иванович",
    age: 35
  };


let json = JSON.stringify(user)
console.log(typeof json)
let toObj = JSON.parse(json)
console.log(typeof toObj)