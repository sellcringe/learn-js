"user strcit"

function makeCounter(){
    let count = 0;
    function counter(){
        return count++
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
}
let counter = makeCounter();
console.log(counter);
console.log(counter);
console.log(makeCounter.set(10))

