"user strict"
let user = {};
user['name'] = 'jhon';
user['surname'] = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user)