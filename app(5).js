
// 3.6 CSS in JavaScript 

const h1 = document.querySelector("div.hi:first-child h1")

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor; // newColor 는 empty 로 설정해두고 
    if (currentColor === "blue"){
        newColor = "tomato";
    }else {
        newColor = "blue";
    }
    h1.style.color = newColor; // h1에 영향을 줄수 있도록 같다고 설정하면 된다.
}

h1.addEventListener("click", handleTitleClick)