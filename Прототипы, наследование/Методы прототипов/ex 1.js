"user strict"
let dict = Object.create(null,{
    toString:{
        value(){
            return Object.keys(this).join();
        }
    }
});
d