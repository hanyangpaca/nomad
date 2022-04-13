
let a = 5; 
let b = 2;
let myName= "paca";
var c = 5;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello'+ myName);

// 2.3 let const var 
// let = variable constant = invariable
// if you let a = 2 , let a = 3 -----> a=3 
// but if you const a = 2 , const a = 3 ------> error
// 이런식으로 코드를 짜놓으면 const는 아! 이 사람이 안 바꾸고 싶어했구나 알수 있다.
// 이런 의도 파악에 크게 도움이 되는 기술이다. 
// 옛날에는 var을 썼었다. var만 쓰던 시절이 있었는데 의도 파악이 안됐다.
// 그래서 var -> const , let 두가지를 사용하게 되었다. var을 사용할수는 있다.


// 2.4 boolean

const amIFat = true;
console.log(amIFat);

// 이거는 boolean이다. 파이썬이랑 같다. 

const amIthin = null;
console.log(amIthin)

// 이거는 null으로 아무것도 없음을 뜻한다. false랑 다르다. 값이 없다.
// empty도 아니고 아무것도 없는거다. 

let something;
console.log(something);

// 이렇게 하면 something에 아무런 값을 지정하지 않은것이다. 
// 그래서 undefined 라는 값이 나온다. 데이터타입이다. 텍스트가 아니다.
// null이랑 다르다. null은 절대로 자연적으로 산출될 수 없다. 의도를 가진 값이다. 값이 없다는 것을 표현하고 싶을때 사용한다.
// undefined은 variable 이 존재는 하는데 그 알맹이가 없는거다. 


// 2.5 Arrays 
const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const sat = 'sat';
const sun = 'sun';
const daysOfWeek = ['mon','tue','wed','thu','sat','sun']
daysOfWeek.push('fri')

// JS의 array는 push가 가능하다. daysOfWeek.push("~"); 라고 하면 ~를 데이터 안에 삽입한다.

// 2.6 Object 

const playerName = 'nico';
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = 'little bit';

//const player = ['nico',1212,false,'little bit'];
// 이러한 array는 각 정보의 의미를 담고 있지 않다. 그래서 부적합하다.
// player[0] == name 이런 식으로 정리라도 할 수 있지만.. 좀 귀찮다. 
// 그럴때 object를 활용할 수 있다. 

const player = {
    name:'nico',
    points: 10,
    fat: true,
};
// 중괄호를 열어주는 것이 차이다. 약간 딕셔너리 형태다. 

console.log(player); 
console.log(player.name);
player.name

/* 
콘솔이라는 객체 안에 log라는 명령어가 있다. 마찬가지로 player.name을 하면 
player라는 객체 ( object ) 안에서 name을 찾는(명령하는) 것과 같다. 
*/

console.log(player); // fat이 true 에서 
player.fat = false; 
player.LastName = 'potato';
console.log(player); 
// fat이 false가 될수 있다. object 전체를 한번에 날린 게 아니라 수정이 가능하다.
// 또 LastName 를 var 해주면 object가 const여도 뭔가 추가할수가 있다.


