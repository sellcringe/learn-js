"user strict"
function Accamulator(startintValue){
    this.count = 0
    this.read = function(){
        
        this.a = +prompt('введите число', 0);
        this.count += this.a + startintValue    
    }
     
    }

let acamulator = new Accamulator(1);
acamulator.read()
acamulator.read()
alert (acamulator.count)
