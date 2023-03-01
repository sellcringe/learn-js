"user strict"
let ladder = {
    step :0,
    up(){
        this.step++;
        return this;

    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step);
        return this;

    }
};
ladder.down().down().down(), showStep()

let obj = {
    dntKIllBill:1,
    killBill(){
        this.dntKIllBill--
        return this
    }
}
console.log(obj)