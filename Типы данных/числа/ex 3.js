"user strict"
function readNumber(){
    
    result = 'Число: ';
    a = prompt('введите число', 0);

    
    if (a == '')return result + null;
    else return result + a;
    


    
}
console.log(readNumber());