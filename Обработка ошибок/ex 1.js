"user strict"
class MyError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}
class SyntaxisError extends MyError{

}
class ValidError extends SyntaxisError{
    constructor(property){
        super('нет свойств' + property);
        this.property = property;
    }
}
function test(){
    try{
        test()
    }
    catch(err){
        if (err instanceof SyntaxisError){
            console.log('syntxError' + err.message);
        }else if (err instanceof ValidError){
            console.log('ValigError' + err.message)

        }else 
        throw err;
    }
}