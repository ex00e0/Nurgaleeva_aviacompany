let inputsFormPassenger = document.getElementsByClassName("jsInput");
let labelsForInputsPassenger = document.getElementsByClassName("labelJs");
for (let r = 0; r < inputsFormPassenger.length; r++) {inputsFormPassenger[r].addEventListener("input", function () {inputsFormPassenger[r].style.paddingTop = "3%";
                                                                                                            labelsForInputsPassenger[r].style.display = "block";
                                                                                                            inputsFormPassenger[r].style.color = "black";} );        }

let radioButtons = document.getElementsByClassName("radioButton");
let circleRadio = document.getElementsByClassName ("circleRadio");
for (let m=0; m<radioButtons.length; m++) {radioButtons[m].addEventListener("click", function () {if (radioButtons[m].classList.contains("firstRadioButton")) {circleRadio[m+1].style.display="none";
                                                        circleRadio[m].style.display="block";}
                                                        else {circleRadio[m-1].style.display="none";
                                                        circleRadio[m].style.display="block";} } ); }


let switchers2 = document.getElementsByClassName("switcher2");
let circles2 = document.getElementsByClassName("switcherCircle2");
let check0 = 0;
for (let z=0; z<switchers2.length; z++) {switchers2[z].addEventListener("click", function () { if (check0 == 1) {circles2[z].style.left = "5%";
                                                                                                circles2[z].style.backgroundColor = "rgb(217, 217, 217)";
                                                                                                switchers2[z].style.borderColor  = "rgb(217, 217, 217)";
                                                                                                check0--; }
                                                                                                   else if (check0 == 0) {circles2[z].style.left = "65%";
                                                                                                circles2[z].style.backgroundColor = "rgb(45, 78, 255)";
                                                                                                switchers2[z].style.borderColor  = "rgb(45, 78, 255)";
                                                                                                check0++;}} );}