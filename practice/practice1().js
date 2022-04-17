
// 크기 표현 
var size = document.getElementById("size");
window.onresize = function(event){
  var innerWidth = window.innerWidth;
  size.textContent = innerWidth;
}

// 크기에 따른 변화 주기 
// ? 는 true면 좌측, false면 우측을 반환한다. 
const body = document.getElementsByTagName("body")[0];
window.onresize = function(event){
  var innerWidth = window.innerWidth;
  if (innerWidth <= "800"){
    body.style.backgroundColor = "blue"
    h1.innerText=" ; ( "
 } else if (innerWidth > "800"){
    body.style.backgroundColor = "yellow"
    h1.innerText=": D "
 } else {
    body.style.backgroundColor = "white"
    h1.innerText="Mouse was RightClicked!"
 }}

 /*
 var innerWidth = window.innerWidth;
  innerWidth <= "800" ? body.style.backgroundColor = "blue" : body.style.backgroundColor = "yellow";
}
*/

// 마우스 우클릭 

const h1 = document.getElementById("size")

function MouseRight(){
    h1.innerText="Mouse was RightClicked!"
}

window.addEventListener("contextmenu",MouseRight)
