"user strict"
let userName = prompt('введите имя рользователя', '');
let userPassword;
if (userName == 'Админ') {

    userPassword = prompt('Введите пароль', '');
    if (userPassword == 'Я главный'){
        alert('ВСЕМ ГЛАВНЕЫМ КУ !!!')
    } else if (userPassword == '' || userPassword == null){
        alert ('отменено')
    } else{
        alert('неверный пароль')
    }

} else if (userName == '' || userName == null){
    alert('отменено')
} else {
    alert ('я вас не знаю')
}