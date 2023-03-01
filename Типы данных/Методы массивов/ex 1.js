"user strict"
function campilaze(str){
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word.toUpperCase() + word.slice(1)
        )
        .join('');
}