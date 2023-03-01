"user strict"
let calculator = {
    read(){
        return{
            firstNum: 4,
            secondNum: 3,
        }
    },
    sum(){
        user = read()
        let sumNumbers = {
            sums: user.firstNum
            
        }
        console.log(sumNumbers) 
    },
    mul(){
        let mul = (this.firstNum * this.secondNum)
    }
}
calculator.read()
calculator.sum()