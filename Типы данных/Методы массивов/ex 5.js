"user strict"
function Calculator(){
    this.meethod = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };
    this.calculate = function(str){
        let split = str.split(' '),
        a =     +split[0],
        op = split[1],
        b = +split[2]
    if (!this.meethod[op] || isNaN(a) || isNaN (b)){
        return NaN;
    }
    return this.meethod[op](a,b);
    }
    this.addMeethod = function(name, func){
        this.meethod[name] = func;
    };
}