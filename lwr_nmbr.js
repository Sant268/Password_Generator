var copyString;
function generate(){
randomstring = Math.random().toString(36).slice(-12);
copyString = randomstring;
document.getElementById('password_lower').innerHTML = randomstring ; //onClick
}
function executeCopy() {
  var copyhelper = document.createElement("input");
  copyhelper.className = 'copyhelper'
  document.body.appendChild(copyhelper);
  copyhelper.value = copyString;
  copyhelper.select();
  document.execCommand("copy");
  document.body.removeChild(copyhelper);
  alert("your results has been copied");
};
