"user strict"
let message
message = (login == 'сотрудник')?
'привет':
(login == 'директор')?
'Здравствуйте':
(login == '')?
'нет логина':
''
