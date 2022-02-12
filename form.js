var user1 = document.getElementById("user");
var pwd1 = document.getElementById("pwd");
var form1 = document.getElementById("form");

function validate() {
  if (user1.value == "") {
    alert("username is empty");
    return false;
  }
  if (pwd1.value == "") {
    alert("Password is empty");
    return false;
  } else {
    return true;
  }
}
