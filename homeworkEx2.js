//если честно, то я не понимаю как можно сделать то, для чего нужен тип данных bigint и  без bigint
// я представляю как можно это сделать с суммой и произведением чисел из за их особенностей это возможно
// конечно я не знаю уровень высший математики, быть может там есть какие то объяснения разложения чисел при делении и вычитании
// но к сожалению я не совсем понимаю как сделать это задание без этого типа данных bigint
// в интернете я нашел способ который делает это с умножением, я оставил его ниже в коде
// на основании его я попытался провести аналогию с суммой, но все тщетно
// надеюсь что позже походу обучения я пойму как это сделать и буду смотреть на это со смехом


class Calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    
    sum(){
        let SUM = BigInt(+this.a + +this.b);
        let SUMToStr = String(SUM).replace('n', '')
        console.log(SUMToStr) 
        
    }



    multiply(){
        let SUM = BigInt(+this.a * +this.b);
        let SUMToStr = String(SUM).replace('n', '')
        console.log(SUMToStr) 
        
        
        
    }
    subtraction(){
        let SUM = BigInt(+this.a - +this.b);
        let SUMToStr = String(SUM).replace('n', '')
        console.log(SUMToStr) 
    } 
    division(){
        let SUM = BigInt(+this.a / +this.b);
        let SUMToStr = String(SUM).replace('n', '')
        console.log(SUMToStr) 
    }
    
}
calculator = new Calculator('-60', '30')

calculator.multiply()
calculator.sum()
calculator.subtraction()
calculator.division()


















// this.a = this.a.split('').reverse();
        // this.b = this.b.split('').reverse();
        // let list = [];
        // for (let i = 0; i < this.a.length; i++){
        //     for (let row = 0; row < this.b.length; row++){
        //         if(i === '-' || i === '+' || row ==='-' || row === '+') continue
        //         let SUM = this.a[i] * +this.b[row];
                
        //         list[i + row] = (list[i + row]) ? list [i + row] + SUM : SUM;
        //     }
        // }
        // for (let i = 0; i < list.length; i++){
        //     let num  = list[i] % 10;
            
        //     let move = Math.floor(list[i] / 10);
        //     list[i] = num;
        //     if (list[i + 1]){
        //         list[i + 1] += move;
        //     }else if (move !=0)
        //         list[i+1] = move;
        // }

        // console.log(list.reverse().join(''))