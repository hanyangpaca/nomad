
// 3.0 The Document Object
// document 를 치면 html 에 대해서 console에서 나온다. 
// document.dir 을 console 에 치면 object처럼 폴더에 있는 목록이 나온다.
// document.title 을 치면 html의 title에 접근할 수 있다. 
// 즉 html 을 읽어온다. 

/*-------------------------------------------------------------
// 3.1 HTML in JavaScript

// document.title = 'Hi' 을 콘솔에 치면 타이틀이 변한다. 즉 js로 html을 수정할 수도 있다.

const title = document.getElementById("title");

console.dir(title);

// 이렇게 하면 title 이라는 id를 가진 h1에서 dir을 통해서 많은 요소들을 console에서 볼 수 있게 한다.
// 정말 많은 요소들이 존재하는데 다 HTML에 포함되어있는 요소인거다.
// autofocus: false 같은 것이 있다. 

// <h1 autofocus class="hello" id='title>Grab me</h1> 이런 식으로 하면 JS에서 element들의 값이 false에서 true로 변한다.
// 즉 이건 className 과 같은 요소들을 가져오고, 바꿀수 있다는 것을 뜻한다. 

title.innerText = "Got you"; 

console.log(title.id);
console.log(title.className);

// HTML 을 JS에서 읽는 것이 매우 중요하다. 그래서 상호작용이 중요하고, 그걸 가능하게 하는 것이 document 함수이다.
// getElement.id 를 통해 js 가 html 에서 id 태그에 속한 element를 가져오고 ->  수정하고, 읽고가 가능하다.
-----------------------------------------------------------------*/

// 3.2 Searching For Elements --------------------------
// id 는 편하지만 실제로는 className을 많이 활용한다. 
/* 
    <h1 class="hi">하이</h1>
    <h1 class="hi">하이</h1>
    <h1 class="hi">하이</h1>
    <h1 class="hi">하이</h1>
    <h1 class="hi">하이</h1> 
    const title = document.getElementById("title");
*/
// 이렇게 하면 error 뜬다. 에러 읽어보면 된다. title이라는 id 가 없어서 그렇다. 

    // const hi = document.getElementsByClassName('hi');
    // console.log(hi);

// 순간 404 에러떠서 당황했는데 아이콘 문제라는 걸 구글에서 찾아서 해결했다.
// 이게 element를 가져오는 메소오드중 하나다. 여러개 가져와야할때 쓴다.

//const title = document.getElementsByTagName("h1")
//console.log(title);

// 이런 방법 const title = document.getElementsByTagName("h1")
// console.log(title); 을 통해서 h1 태그에 있는 모든 것들을 불러올 수가 있다.

/*
const title = document.querySelector(".hi h1")
console.log(title);
*/

// 이렇게 활용하면 css 형태로 h1 태그를 소환할 수 있다. 
// querySelector에서는 getElements 와 다르게 .hi 를 명시해줘야한다. ( 클래스 명을 명시해야한다. )
// 모든 영상과 개발에서 사용할 예정이니 이것만 기억해도 되긴 한다. 
// div h1 으로도 검색할 수 있다. 
// hi h1이 3개인 경우에는 첫번째것만 나온다 array도 아니고. 
// 세개 다 가져오고 싶으면 getElementsbytagname 안해도 되고 querySelectorAll 쓰면 된다. 
// getElementsbyClassname 같은 경우는 array로 정보를 반환한다. query랑 다르다.
// query는 css처럼 (".hello h1:first-child") 와 같은 형태로 반환해준다.
// query 와 getelement는 하는 일은 같은데 후자는 css형태로 정보를 가져올 수가 없다. 
// 이 둘의 차이점에 대해서 좀 더 공부해보자. 

// 3.3 Events --------------------------------------------------------------------------------
// app.js를 import 했기 때문에 document를 소환할 수 있다. 
// 포인트는 html이 app.js를 import -> browser이 허가 -> 수정, 불러오기 가능 

const h1 = document.querySelector('div.hi:first-child h1');
console.log(h1);
    //title.innerText = "hello";

// hi:first-child 는 css 문법이다. 거기 속해있는 것중에 가장 첫번째 요소를 반환한다.
// h1 - style - color 순으로 항목이 존재한다. h1.style.color 순으로 지정할 수 있다. 이거는 {} 여기서 뭐 찾을때 . 찍는거 생각하면 된다.


// 이렇게 스타일, 컬러를 자바스크립트에서 바꿀 수 있다.
// 근데 사실 컬러는 css 영역이긴 하니까.. 이벤트가 중요하다.

function handleTitleClick() {
    h1.style.color = "yellow";
    h1.innerText= "헤헤 좀더 ";
}

function handleMouseEnter() {
    h1.innerText= "헤헤 쓰다듬어주세용";
    h1.style.color = "blue";
}

function handleMouseLeave() {
    h1.innerText = "야 돌아와라"
    h1.style.color = "red";
}

h1.addEventListener("click", handleTitleClick)
h1.addEventListener("mouseenter",handleMouseEnter)
h1.addEventListener("mouseleave",handleMouseLeave)

// handleTitleClick 에 ()를 넣으면 안되고 나중에 함수를 따로 실행해야한다.

    //handleTitleClick()

// js가 대신 실행시켜주길 바라는거다. 안에다가 ()를 넣어버리면 유저가 클릭 -> 실행 되는게 아니라
// 그냥 멋대로 컴퓨터가 바로 실행시켜버린다. addEventListener 에서 click을 지정하고 실행해버리면 클릭여부와 무관하게 바로 실행되어버린다. 
// title.addEventListner에서 handleTitleClick도 정의해버렸으니 ()하면 실행이 되버린다. 정의 = true 니까 그냥 실행해버린다. 
// 그래서 따로 받고 나중에 실행해야한다.

// ------------------------------------------------------------------------------------

// 3.4 Events part Two 3.5 More events

    //handleMouseEnter()
    //handleMouseLeave()

// 이 두 함수를 통해서 올라갔다 내려갔다를 할 수 있다 쩔지! 

    //title.onclick = handleTitleClick;

// 이런 식으로도 구축할 수가 있다. onclick 이 좋은 이유는 나중에 지우기가 용이하다.

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}


window.addEventListener("resize", handleWindowResize);

// 굳이 따로 함수 안빼도 addEventListener가 인식해서 함수가 돌아간다.
// document.body , head , title은 가능한데 div같은 요소는 query로 해야한다.

function handleWindowCody() {
    alert("copier!")
}

window.addEventListener("copy",handleWindowCody);

// wifi event 도 존재한다. 

function handleWindowOffline() {
    alert("sos no wifi")
}

window.addEventListener("offline", handleWindowOffline)

function handleWindowOnline() {
    alert("alright")
}

window.addEventListener("Online", handleWindowOnline)

// 이러한 다양한 이벤트들이 존재하니 테스트해보면 좋다. 