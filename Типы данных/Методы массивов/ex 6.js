"user strict"
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];

function listAppend(){
    listName = []
    for(let i of users){

        listName.push(i.name)
    }
    return listName

} 
let names = listAppend();
console.log(names)