"user strict"
function sumTo(n){
    if (n == 1)return n
    else{
        for(let count = n - 1   ;count !=1; count--  ){
            n +=count

        }

    }return n + 1
}
console.log(sumTo(100))
function sumTo(n){
    if (n == 1) return n
    else{
        return n + sumTo(n - 1)
    }
}
console.log(sumTo(100))