"user strict"
function delay(ms){
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve('done'), ms)

    })
}
delay(3000).then(() => console.log('rr'))