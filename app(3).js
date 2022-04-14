
// 2.7 Function part One 
// 함수는 알다싶이 코드를 짧게 쓸수 있는 기술이다. 

/*
console.log("Hello my name is Nico")
console.log("Hello my name is dal")
console.log("Hello my name is shigatsu")
console.log("Hello my name is Nico")
console.log("Hello my name is Nico")
*/

// 이런 건 당연히 바람직하지 않다. 너무 비효율적이다. 당연!

function sayHello(){
    console.log('Hello my name is');
}

sayHello("nico");
sayHello("nico");
sayHello("nico");

// fucntion은 ( ) 와 코드 블럭 {}이 필요하다. 
// 블록안에 작성된게 함수 실행할때마다 실행되는거다. ()를 붙이는게 함수를 실행하는거다.
// 함수에게 변수를 주고 싶으면 argument를 활용해야한다. hello name is ~ 같은거.
// name is ~~~를 하고 싶으면 함수에게 데이터를 보내야한다.

// 2.8 Functions part Two

function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+ nameOfPerson + "and I'm"+ age);
}

sayHello("nico",10);
sayHello("dal",23);
sayHello("eliie",21);

// 이렇게 하면 nameOfPerson이라는 변수를 받게 된다. 
// 그래서 ( ) 안에 있는 변수를 받아서 프린트한다.
// arguments 는 여러개를 할수 있다. age처럼. 파이썬이랑 개 똑같다 ㄷㄷ 오히려 더 직관적인듯

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

plus();
plus(8, 60);

// 여기서 a+b마저도 지정안하면 undefined 가 나오고 a+b 지정하면 빈칸이나 문자하면 NaN = not a number이 나온다.
// 순서에 맞게 실행된다고 보면 된다. 
// firstNumber과 같은 argument 는 함수 블럭 안에서만 정의된거다. 밖에서는 못한다.
// argument를 지정해준 것 만으로 함수 실행에서 입력한 데이터를 반영해서 도출된다.

const player = {
    name:"heon",
    sayHello: function(otherPersonsName){
        console.log("Hello"+  otherPersonsName + " nice to meet you")
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("paca");
player.sayHello("nico");

// function sayHello 와 다르게 const 안에서는 sayHello: function() 형태다.
// console.log(player.name)의 경우는 player에서 name를 부르는거고 ( 하나의 string이니까 )
// 반면에 player.sayHello(); 의 경우는 자체로 함수라서 바로 소환이 가능하다. 이게 함수를 만드는 JS method!

// 2.9 Recap ( variable, datatype = array..)

const a = 5; 
let b = 6; 
var c = 7; 

// 우리가 variable을 지정하는 방법은 총 3가지였다.

const d = null ; 
let hello;

// 이 경우는 d 안에 아무것도 넣고 싶지 않다는 의사표현이다.
// hello 같은 경우는 undefined 이다. 존재는 하는데 아무것도 없다. 추가를 하고 싶을수도 있고.. 뭐.. 
// 여러가지 의사가 표현될 수 있다. 개발적 관점 

const days = [1, 2, false, true, null, undefined];

// days[0] 은 파이썬 인덱스처럼 1이다. 
// days[0]= pizza 하면 1이 pizza로 바뀐다. 
// days.push("hamburger") 하면 제일 끝에 hamburger이 추가된다.

// 2.10 Recap ll 

const players = {
    name: "Nico",
    age: 98,
};

players.name = "nicolas"
console.log(players, console)

// variable 안에 variable은 property라고 부르긴 한다.
// console은 object였다. ( 오브젝트가 정확히 뭘까? )
// console 도 log로 조회해보면 console이라는 자바의 객체 모음을 확인할 수 있다. 
// console도 사실 variable의 모임이다. 또 player.name은 추후에 업데이트할 수 있다. 
// js 는 위에서 아래로 실행된다. const는 수정 안되지만 안의 내용물을 수정하는 건 상관없다. 

function caption(msg){
    alert(msg)
}

//caption("hi")

// 2.11 Returns 

// console log는 이제 너무 진부하다!!!! 코드 내에서 답을 구하고 싶어질것이다. 
// 그러니까 화면 송출이나.. 아니면 변경이나 눈에 보이는 게 나도 하고 싶긴 했다 ㅋ 
// 예를 들어 뭐 사이트에서 데이터 받아서 작동하는 것 같은거 해보고 싶다! 

const calculator= {

plus1: function(a,b){
    return alert(a + b);
},
minus: function(a,b){
    return alert(a - b);
},
times: function(a,b){
    return alert(a * b);
},
divide: function(a,b){
    return alert(a / b);
},
power: function(a,b){
    return alert(a ** b);
},
};

/*
calculator.plus1(2, 3);
calculator.minus(2, 3);
calculator.times(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);

console.log(calculator.plus(2,3));
*/

// 이런 식으로 하게 되면 calculator 자체의 값은 존재하지 않는다.

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;    
}

const krAge = calculateKrAge(age);

console.log(calculateKrAge)

// 이렇게 하게 되면 age에 96을 호출해서 fucntion을 가고 96 +2 가 실행되고 98이 return 된다.
// 이것도 파이썬이랑 똑같넹 ㅋㅋ 개꿀쥄 ㅋ 

/*
const plusResult = calculator.plus1(2, 3);
const minusResult = calculator.minus(2, plusResult);
console.log(plusResult);
*/

// 이렇게 하게 되면 plusResult를 return 값으로 가지고 반환하게 된다.
// 또 plus, minus가 상호의존적으로 구성될 수가 있다. 
// 또 이러면 콘솔창에서 각각의 값에 접근할 수가 있다. variable의 value를 지정할 수 있게 된다. 
// 또 return 앞의 명령어까지만 실행한다.

// 2.13 2.14 2.15 Conditionals 1,2,3

//const age1 = prompt("How old are you?")
// prompt 는 창을 띄울 수 있게 해주는 함수다. 
// 미친 함수 뒤 괄호에 마우스 올리면 뭐 할 수 있는지 알려주네
// 이걸 실행하게 되면 JS console은 멈춰있다. 그래서 더 이상 이 함수는 안쓴다. 
// 메세지가 일단 못생겼고 ㅋ CSS를 적용시킬수가 없어서.. 옛 방식이다.
// cancel 누르면 null 뜨고 그런다.. 

typeof age1

// type of를 하면 age의 data type을 확인할 수가 있다. 
// " 15 " => 15 로 바꾸는 메쏘오드가 존재한다. 

console.log(typeof "15", typeof parseInt("15"));

// 이렇게 하게 되면 15가 숫자로 반환된다. 
// 이 방식이 좋은 이유는 숫자간의 크기 비교가 가능하기 때문이다.
// 또 숫자가 아닌 정보를 입력했을때 parseInt로 숫자 변환이 안되면 NaN이 나와서 막을 수 있다.
// 나이 적으라고 했는데 개소리 치면 반환안되는 느낌이랄까? 

const age1 = parseInt(prompt("How old are you?"));

console.log(age1)

console.log(isNaN(age1));

// isNan 을 쓰면 숫자인지 아닌지 boolean 값으로 반환해준다.
// 숫자를 쓰면 false ( is not a number? ) 를 반환한다. 
// 나머지는 다 true 반환한다. 

if (isNaN(age1)){
    alert("Please write a number")
} 



