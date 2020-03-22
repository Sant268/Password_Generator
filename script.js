var copyString;
function generate_aln(){
randomstring = Math.random().toString(36).slice(-12);
copyString = randomstring;
document.getElementById('password_lower').innerHTML = randomstring ; //onClick
}
function executeCopy_aln() {
  var copyhelper = document.createElement("input");
  copyhelper.className = 'copyhelper'
  document.body.appendChild(copyhelper);
  copyhelper.value = copyString;
  copyhelper.select();
  document.execCommand("copy");
  document.body.removeChild(copyhelper);
  alert("your results has been copied");
};
function generate_sym(){
      var length = 12,
          charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*+`()/[]ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      copyString = retVal;
      document.getElementById('symbol').innerHTML = retVal;
}

function executeCopy_sym() {
  var copyhelper = document.createElement("input");
  copyhelper.className = 'copyhelper'
  document.body.appendChild(copyhelper);
  copyhelper.value = copyString;
  copyhelper.select();
  document.execCommand("copy");
  document.body.removeChild(copyhelper);
  alert("your results has been copied");
};
