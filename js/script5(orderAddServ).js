let buttonCont=document.getElementById("buttonToFormPassengers");
buttonCont.addEventListener("click", function () {document.location='orderFormPassengers.html';} );

let switchers = document.getElementsByClassName("switcher");
let circles = document.getElementsByClassName("switcherCircle");
let selections = document.getElementsByClassName("selection");
let select = document.getElementsByClassName("select");
let imgSelect = document.getElementsByClassName("imgSelect");
let servGrid = document.getElementsByClassName("servGrid");
let servWrap = document.getElementsByClassName("servWrap");
let check0 = 0;
let checkSelect = 0;
let blockFood = document.getElementById("blockFood");
function getTheStyle(element){let borderColor = window.getComputedStyle(element).borderColor;
                               return borderColor;}
for (let i=0;i<switchers.length;i++) {
switchers[i].addEventListener("click", function () {if (check0 == 0) {circles[i].style.left = "60%";
                                                                                                         circles[i].style.backgroundColor = "rgb(45, 78, 255)";
                                                                                                         switchers[i].style.borderColor  = "rgb(45, 78, 255)";
                                                                                                         check0++;} 
                                                    else {
                                                    if (check0==1) {circles[i].style.left = "5%";
                                                                                                         circles[i].style.backgroundColor = "rgb(217, 217, 217)";
                                                                                                         switchers[i].style.borderColor  = "rgb(217, 217, 217)";
                                                                                                         check0--; }}});  }
for (let j=0;j<selections.length;j++) {
selections[j].addEventListener("click", function () {if (checkSelect == 0) {select[j].innerHTML="Скрыть";
                                                                            imgSelect[j].style.transform = "rotate(180deg)";
                                                                            servGrid[j].style.height="38vmax";
                                                                            servWrap[j].style.height="20%";
                                                                            blockFood.style.display = "grid";
                                                                           checkSelect++;} 
                                                    else {if (checkSelect==1) {select[j].innerHTML="Показать";
                                                    blockFood.style.display = "none";
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
                                                                                                                                                        switchers[0].style.borderColor  = "rgb(217, 217, 217)";
                                                                                                                                                        check0--; }
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
                                                                                                                                                                    switchers[0].style.borderColor  = "rgb(45, 78, 255)";
                                                                                                                                                                    check0++;}
                                                                                                                                                        } } );}




                                                                     