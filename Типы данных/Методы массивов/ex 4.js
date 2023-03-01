"user strict"
let arr3  = ["HTML", "JavaScript", "CSS"];
function copySorted(arr3){
        return arr3.slice().sort()
}
let sorted = copySorted(arr3)

console.log(sorted)