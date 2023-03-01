"user strict"
function isEmpty(obj){
    
    if (undefined in obj) console.log(true)
    else console.log(false)
    
}
let dict = {}
isEmpty(dict)