function generate(){
var randomstring = Math.random().toString(36).slice(-12);
document.getElementById('password_lower').innerHTML = randomstring ; //onClick
}
