"user strict"
function truncate (str, maxlenght){
    if (str.length >   maxlenght ) return (str.slice(0, maxlenght -1) + '…')
    else return str
 }
 console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))