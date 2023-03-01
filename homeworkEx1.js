class String{
    constructor(str){
        this.str = str;

    }
    lowReg(){
        let normalRegistr = this.str[0].toUpperCase()  + this.str.slice(1).toLowerCase()

        console.log(normalRegistr)
        
    }
    spaceRender(){
        while(true){

            if (this.str.indexOf(',.') !== -1){
                let err = new Error('введите правильный текст')
                console.log(err)
                break
                
            } 
            if (this.str.indexOf(' ,') == -1 && this.str.indexOf(' .') == -1 && this.str.indexOf('  ') == -1) break
            else{
                if (this.str.indexOf(' .') !== -1 ){            ///////////////// минус пробелы в пунктуации
                    this.str = this.str.replace(' .', '.');
                }
                
                if (this.str.indexOf('. ') == -1){
                    this.str = this.str.replace('.', '. ');
                }
            
                if (this.str.indexOf(' ,' !== -1 )){
                    this.str = this.str.replace(' ,', ',');
                }
            
                
                if (this.str.indexOf(', ') == -1 ){
                    this.str = this.str.replace(',', ', ');
                }
                if(this.str.indexOf('  ') !== -1){                      ///////////минус двойные пробелы
                    this.str = this.str.replace('  ', ' '); 
    
                }
            }
             
        }

            

    console.log(this.str)      
        
    }
    WordHowMany(){
        let listString = this.str.split(' ');
        let count = 0
        for (let i of listString ){
            count += 1 
        }
        console.log(count)
    }
    uniqueWord(){
        let listString = this.str.split(' ');
        let obj = {}
        let count 
        for (let i of listString){
            i = i.replace('.', '');
            i = i.replace(',', '');
            
            count = obj[i]? obj[i] : 0;
            obj[i] = count + 1;
        
        }
        let final = Object.keys(obj)
        final.forEach(element =>console.log( `слово ${element} используется ${obj[element]} раз `))
        
    }

}
strConfigure = new String('lera lera leralera lera lera lera lera lera lera lera')
strConfigure.lowReg()
strConfigure.spaceRender()
strConfigure.WordHowMany()
strConfigure.uniqueWord()
