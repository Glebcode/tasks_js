let bodyElement = document.querySelector('body');
let topM = 0;
let leftM = 0;
let rightM = 0;
let bottomM = 0;
bodyElement.addEventListener('keydown', event => {
    console.log(event.keyCode)
    let imgGleb = document.getElementById("img1")

    if (event.keyCode == 38) {
        topM-=20
        imgGleb.setAttribute('style',`transform: matrix(1, 0, 0, 1, ${leftM}, ${topM})` )
    }
    if(event.keyCode == 37){
        leftM-=20;
        imgGleb.setAttribute('style',`transform: matrix(1, 0, 0, 1, ${leftM},  ${topM})` )
    }
    if(event.keyCode == 40){
        topM+=20;
        imgGleb.setAttribute('style',`transform: matrix(1, 0, 0, 1, ${leftM}, ${topM})` )
    }
    if(event.keyCode == 39){
        leftM+=20;
        imgGleb.setAttribute('style',`transform: matrix(1, 0, 0, 1, ${leftM}, ${topM})` )
    }
});
// console.log(imgGleb)