let element = document.getElementsByTagName('div');
// console.log(this)
let elementWithId = document.getElementById('test');
// console.log("elementWithId", elementWithId);
// let elementWithClass = document.getElementsByClassName('test-div')
// console.log("elementWithClass", elementWithClass);
// let elementQuerySel = document.querySelector('.div');
// console.log("elementQuerySel", elementQuerySel);
// let elementQuerySelAll = document.querySelectorAll('.div');
// console.log("elementQuerySelAll", elementQuerySelAll);

let BGbody = document.body;
BGbody.setAttribute('style', `background: grey`);


let elementWithId2 = document.getElementById('test2');


let btnId = document.getElementById('btn');
let btnId2 = document.getElementById('btn2');




// function changeWidth() {
//     let userWidth = prompt('Сколько надо ширины?', '20');
//     elementWithId.setAttribute('style', `width:${userWidth}px;`);
// }

// function changeColor() {
//     let userColor = prompt('Какой цвет те надо?', 'red');
//     elementWithId2.setAttribute('style', `background-color:${userColor};`);
// }
// btnId2.addEventListener('click', changeWidth);
// btnId2.addEventListener('click', changeColor);
// /////////////////////////////////////////////////////////////////////////////////////////////

let countClick = 0;

function chPosition() {
elementWithId.setAttribute ('style', `margin-left: 20px`);
if(i <= 3 ){
    btnId.addEventListener('click', chPosition()); 
    i += 1; 
    countClick = i; 
}
countClick = i;
}



btnId.addEventListener('click', chPosition());

function chCircle (){
    elementWithId2.setAttribute('style', `border-radius: 50%; background-color: red`);
}
btnId2.addEventListener('click', chCircle);
// /////////////////////////////////////////////////////////////////////////////////////////////////



// function chPosition() {
//     elementWithId.setAttribute('style', `margin-left: 20px`);
// }


// btnId.addEventListener('click', chPosition);

// function chCircle() {
//     elementWithId2.setAttribute('style', `border-radius: 50%; background-color: red`);
// }
// btnId2.addEventListener('click', chCircle);