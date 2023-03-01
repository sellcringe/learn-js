"user strict"
function checkAge(age){
    return (age > 18) ? 
    true:
    confirm('Родители разрешили?')

}
checkAge(18)
function checkAge(age){
    return (age > 18) || confirm('Родители разрешили ?')
}