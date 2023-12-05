

function isOverflownHeight(element) {return element.clientHeight; }

let descriptionServ = document.getElementsByClassName ("descriptionServ");
let servGrid = document.getElementsByClassName("servGrid");

const mediaSmall = window.matchMedia("(max-width: 480px) and (orientation:portrait)");
if (mediaSmall.matches) {alert((isOverflownHeight(descriptionServ[1])));
    for (let counter1=0; counter1<descriptionServ.length; counter1++) {if (isOverflownHeight(descriptionServ[counter1]) > "10") {servGrid[counter1].style.height="11vmax";} }
  } else {
    alert("nothing");
  }




let buttonCont=document.getElementById("buttonToFormPassengers");
buttonCont.addEventListener("click", function () {document.location='orderFormPassengers.html';} );
let blockFood = document.getElementById("blockFood");

let switchers = document.getElementsByClassName("switcher");
let circles = document.getElementsByClassName("switcherCircle");
let selections = document.getElementsByClassName("selection");
let select = document.getElementsByClassName("select");
let imgSelect = document.getElementsByClassName("imgSelect");

let servWrap = document.getElementsByClassName("servWrap");
let check0 = 0;
let checkSelect = 0;


for (let j=0;j<selections.length;j++) {
selections[j].addEventListener("click", function () {if (checkSelect == 0) {select[j].innerHTML="Скрыть";
                                                                            imgSelect[j].style.transform = "rotate(180deg)";
                                                                            servGrid[j].style.height="38vmax";
                                                                            servWrap[j].style.height="20%";
                                                                            if (j==0) {blockFood.style.display = "grid";
                                                                            mediaSmall.addEventListener("change", screenTest);}
                                                                           checkSelect++;} 
                                                            
                                                    else {if (checkSelect==1) {select[j].innerHTML="Показать";
                                                    if (j==0) {blockFood.style.display = "none";}
                                                    imgSelect[j].style.transform = "rotate(360deg)";
                                                    servGrid[j].style.height="8vmax";
                                                    servWrap[j].style.height="100%";
                                                                         checkSelect--; }}});  } 
let countBreakfast = 0;
let countLunch = 0;
let countDinner = 0;
let buttonMinus = document.getElementsByClassName("buttonMinusServ");
let buttonPlus = document.getElementsByClassName("buttonPlusServ");
let numbersServ = document.getElementsByClassName("numServ");
for (let x=0; x<buttonMinus.length; x++) {buttonMinus[x].addEventListener("click", function () {if (buttonMinus[x].classList.contains('activeButton')) {buttonPlus[x].classList.remove("disabledButton");
                                                                                                                                                        buttonPlus[x].classList.add("activeButton");
                                                                                                                                                         if (x==0) {countBreakfast--;
                                                                                                                                                                   numbersServ[x].innerHTML = `${countBreakfast}`; 
                                                                                                                                                                   if (countBreakfast==0) {buttonMinus[x].classList.add("disabledButton");
                                                                                                                                                                    buttonMinus[x].classList.remove("activeButton");}}
                                                                                                                                                            else if (x==1) {countLunch--;
                                                                                                                                                                numbersServ[x].innerHTML = `${countLunch}`;
                                                                                                                                                                if (countLunch==0) {buttonMinus[x].classList.add("disabledButton");
                                                                                                                                                                    buttonMinus[x].classList.remove("activeButton");}} 
                                                                                                                                                                else if (x==2) {countDinner--;
                                                                                                                                                                    numbersServ[x].innerHTML = `${countDinner}`;
                                                                                                                                                                    if (countDinner==0) {buttonMinus[x].classList.add("disabledButton");
                                                                                                                                                                    buttonMinus[x].classList.remove("activeButton");}
                                                                                                                                                        }  
                                                                                                                                                        if (numbersServ[0].textContent == 0 && numbersServ[1].textContent == 0 && numbersServ[2].textContent == 0) {circles[0].style.left = "5%";
                                                                                                                                                        circles[0].style.backgroundColor = "rgb(217, 217, 217)";
                                                                                                                                                        switchers[0].style.borderColor  = "rgb(217, 217, 217)";}
                                                                                                                                                        } } );}
for (let x=0; x<buttonPlus.length; x++) {buttonPlus[x].addEventListener("click", function () {if (buttonPlus[x].classList.contains('activeButton')) {buttonMinus[x].classList.remove("disabledButton");
                                                                                                                                                        buttonMinus[x].classList.add("activeButton");
                                                                                                                                                         if (x==0) {countBreakfast++;
                                                                                                                                                                   numbersServ[x].innerHTML = `${countBreakfast}`; 
                                                                                                                                                                   if (countBreakfast==5) {buttonPlus[x].classList.add("disabledButton");
                                                                                                                                                                    buttonPlus[x].classList.remove("activeButton");}}
                                                                                                                                                            else if (x==1) {countLunch++;
                                                                                                                                                                numbersServ[x].innerHTML = `${countLunch}`;
                                                                                                                                                                if (countLunch==5) {buttonPlus[x].classList.add("disabledButton");
                                                                                                                                                                    buttonPlus[x].classList.remove("activeButton");}} 
                                                                                                                                                                else if (x==2) {countDinner++;
                                                                                                                                                                    numbersServ[x].innerHTML = `${countDinner}`;
                                                                                                                                                                    if (countDinner==5) {buttonPlus[x].classList.add("disabledButton");
                                                                                                                                                                    buttonPlus[x].classList.remove("activeButton");}} 
                                                                                                                                                                    if (numbersServ[0].textContent != 0 || numbersServ[1].textContent != 0 || numbersServ[2].textContent != 0) {circles[0].style.left = "60%";
                                                                                                                                                                    circles[0].style.backgroundColor = "rgb(45, 78, 255)";
                                                                                                                                                                    switchers[0].style.borderColor  = "rgb(45, 78, 255)";}
                                                                                                                                                        } } );}
let switchers2 = document.getElementsByClassName("switcher2");
let circles2 = document.getElementsByClassName("switcherCircle2");
for (let z=0; z<switchers2.length; z++) {switchers2[z].addEventListener("click", function () { if (check0 == 1) {circles2[z].style.left = "5%";
                                        circles2[z].style.backgroundColor = "rgb(217, 217, 217)";
                                        switchers2[z].style.borderColor  = "rgb(217, 217, 217)";
                                        check0--; }
                                           else if (check0 == 0) {circles2[z].style.left = "60%";
                                        circles2[z].style.backgroundColor = "rgb(45, 78, 255)";
                                        switchers2[z].style.borderColor  = "rgb(45, 78, 255)";
                                        check0++;}} );}






                                                                     