
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

// 2.9 Recap 

const a = 5; 
let b = 6; 
var c = 7; 

// 우리가 variable을 지정하는 방법은 총 3가지였다. 

