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
                                                                            servGrid[j].style.height="45vmax";
                                                                            servWrap[j].style.height="20%";
                                                                           checkSelect++;} 
                                                    else {if (checkSelect==1) {select[j].innerHTML="Показать";
                                                    imgSelect[j].style.transform = "rotate(360deg)";
                                                    servGrid[j].style.height="8vmax";
                                                    servWrap[j].style.height="100%";
                                                                         checkSelect--; }}});  } 