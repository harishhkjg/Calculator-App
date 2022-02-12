let ans = document.getElementById("output");
function show(number) {
  ans.value += number;
}
function Result() {
  try {
    ans.value = eval(ans.value);
  } catch (err) {
    alert("Invalid Input..");
  }
}
function Del() {
  ans.value = ans.value.slice(0, -1);
}

/*document.querySelector('.one').addEventListener('click',function(){
document.querySelector('.output').value = 1;
})*/
