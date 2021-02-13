// let element = document.getElementsByTagName('div');
// console.log(this)
// let elementWithId = document.getElementById('test');
// console.log("elementWithId", elementWithId);
// let elementWithClass = document.getElementsByClassName('test-div')
// console.log("elementWithClass", elementWithClass);
// let elementQuerySel = document.querySelector('.div');
// console.log("elementQuerySel", elementQuerySel);
// let elementQuerySelAll = document.querySelectorAll('.div');
// console.log("elementQuerySelAll", elementQuerySelAll);

let BGbody = document.body;
BGbody.setAttribute('style', `background: grey`);


// let elementWithId2 = document.getElementById('test2');


// let btnId = document.getElementById('btn');


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

// let countClick = 0;

// function chPosition() {
// elementWithId.setAttribute ('style', `margin-left: 20px`);
// if(i <= 3 ){
//     btnId.addEventListener('click', chPosition());
//     i += 1;
//     countClick = i;
// }
// countClick = i;
// }


// btnId.addEventListener('click', chPosition);
//////////////////////////////////////////////////////////
let btnId2 = document.getElementById('btn2');

let bulletCountClick = 0;
let i = 0;
let bulletBlack = document.getElementById('bulleton');

function bulletChPosition() {
    if(i <= 6){
    bulletBlack.classList.add('shoot');  
    i += 1;
    setTimeout( () => {
        bulletBlack.className = 'bullet';
    }, 200)
    } else {
    alert('Перезарядити !');
    i = 0;
 }
}

function bulletChPosition2 () {
    setTimeout(() => {
        bulletChPosition();
    }, 200)
}

btnId2.addEventListener('click', bulletChPosition2);

let btnBus1 = document.getElementById('btnBus1');
let btnBus2 = document.getElementById('btnBus2');


let bus = document.getElementById('busWrapp');
let wheels1 = document.getElementById('wheels1');
let wheels2 = document.getElementById('wheels2');

function busChPosition() {
    bus.classList.add('movingRight');  
    wheels1.classList.add('clockWise');
    wheels2.classList.add('clockWise');
    setTimeout(() => {
        alert('Шлях завершено, їдемо назад !');
    }, 2500)
}
btnBus1.addEventListener('click', busChPosition);

function busChPosition2() {
    bus.classList.add('movingLeft'); 
    wheels1.classList.add('antiClWise'); 
    wheels2.classList.add('antiClWise');
    setTimeout(() => {
        alert('Вітаю ви вернулись !');
    }, 2500)
}
btnBus2.addEventListener('click', busChPosition2);

// let bulletCountClick = 0;
// let bullet = getElementById('bulleton');

// document.querySelector('#bulleton').onclick = function shootReaction() {
// console.log("hi");
 
// btnId2.addEventListener('click', shootReaction);

// function bulletChPosition() {
//      let bulletBlack = document.getElementById('bullet');
//     bulletBlack.classList.add('shoot');
    
    
// if(i <= 6 ){
//     btnId2.addEventListener('click', bulletChPosition);
//     i += 1;
//     bulletCountClick = i;
// }
// bulletCountClick = i;
// alert('Перезарядити !');
// }
////////////////////////////////////////////////////////////
// function chCircle (){
//     elementWithId2.setAttribute('style', `border-radius: 50%; background-color: red`);
// }
// btnId2.addEventListener('click', chCircle);
// /////////////////////////////////////////////////////////////////////////////////////////////////

// let marginLeft = 50;
// let count = 0;

// function chPosition() {
//     let bulletBlack = document.getElementById('bullet');
//     bulletBlack.classList.add('shoot');
    // count++
    // if (count > 3) {
    //     marginLeft = 0;
    //     count = 0;
    //     elementWithId.setAttribute('style', `margin-left: ${marginLeft}px`);
    // }
    // elementWithId.setAttribute('style', `margin-left: ${marginLeft}px`);
    // marginLeft += 50;
    // imgCent.setAttribute('style', `margin: 0 0 0 30%`);
// }


// btnId2.addEventListener('click', chPosition);

// function chCircle() {
//     count++
//     elementWithId2.setAttribute('style', `border-radius: 50%; background-color: red`);
//     if (count % 2 == 0) {
//         elementWithId2.setAttribute('style', `border-radius: none; background-color: #f0f0f0`);
//     }
// }

// btnId2.addEventListener('click', chCircle);

// let imgCent = document.getElementById('img1');

// imgCent.addEventListener('click', chPosition2);

// function chPosition2(){
//     imgCent.setAttribute('style', `margin: 0 0 0 30%`);
// }
// btnId.addEventListener('click', chPosition);


 