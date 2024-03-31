// let myHeading = document.querySelector("h1");
// myHeading.textContent = "hello World";

let myImage = document.querySelector("img");

myImage.onclick = (e) => {
    console.log("图片被点击了" + e);
}

let myBtn = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = "请输入你的名字";
    localStorage.setItem("name", myName);
    myHeading.textContent = "太帅了" + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "帅呆了" + storedName;
}

myBtn.onclick = function () {
    setUserName();
}