let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');

function getTheStyle(element){let left = window.getComputedStyle(element).left;
                            return left;}
let buttonSliderRight = document.getElementById("slideButtonRight");
buttonSliderRight.addEventListener("click", function () {if ((getTheStyle(slide1)=="0px") || (getTheStyle(slide1)=="0%")) {slide1.style.transition="all 1s linear";
                                                                                                                            slide2.style.transition="all 1s linear";
                                                                                                                            slide1.style.left="-100%";
                                                                                                                           slide2.style.left="0%";
                                                                                                                           slide3.style.transition="none";
                                                                                                                           slide3.style.left="100%";} 
                                                         if ((getTheStyle(slide2)=="0px") || (getTheStyle(slide2)=="0%")) {slide2.style.transition="all 1s linear";
                                                                                                                            slide3.style.transition="all 1s linear";
                                                                                                                            slide2.style.left="-100%";
                                                                                                                            slide3.style.left="0%";
                                                                                                                            slide1.style.transition="none";
                                                                                                                            slide1.style.left="100%";}
                                                        if ((getTheStyle(slide3)=="0px") || (getTheStyle(slide3)=="0%")) {slide3.style.transition="all 1s linear";
                                                                                                                            slide1.style.transition="all 1s linear";
                                                                                                                            slide3.style.left="-100%";
                                                                                                                            slide1.style.left="0%";
                                                                                                                            slide2.style.transition="none";
                                                                                                                            slide2.style.left="100%";} }  );
let buttonSliderLeft = document.getElementById("slideButtonLeft");
buttonSliderLeft.addEventListener("click", function () {if ((getTheStyle(slide1)=="0px") || (getTheStyle(slide1)=="0%")) {slide1.style.transition="all 1s linear";
                                                                                                                            slide3.style.transition="all 1s linear";
                                                                                                                            slide1.style.left="100%";
                                                                                                                           slide3.style.left="0%";
                                                                                                                           slide2.style.transition="none";
                                                                                                                           slide2.style.left="-100%";} 
                                                         if ((getTheStyle(slide2)=="0px") || (getTheStyle(slide2)=="0%")) {slide2.style.transition="all 1s linear";
                                                                                                                            slide1.style.transition="all 1s linear";
                                                                                                                            slide2.style.left="100%";
                                                                                                                            slide1.style.left="0%";
                                                                                                                            slide3.style.transition="none";
                                                                                                                            slide3.style.left="-100%";}
                                                        if ((getTheStyle(slide3)=="0px") || (getTheStyle(slide3)=="0%")) {slide3.style.transition="all 1s linear";
                                                                                                                            slide2.style.transition="all 1s linear";
                                                                                                                            slide3.style.left="100%";
                                                                                                                            slide2.style.left="0%";
                                                                                                                            slide1.style.transition="none";
                                                                                                                            slide1.style.left="-100%";} }  );
let learnMore = document.getElementsByClassName("buttonLearnMore");
for (let b=0; b<learnMore.length; b++) {learnMore[b].addEventListener("click", function () {document.location = "info.html"} );}
let buttonTriangle = document.getElementById("buttonTriangle");
let checkTriangle = 0;
buttonTriangle.addEventListener("click", function () {if (checkTriangle == 0) {document.getElementById("blockForSelectHeaderPassenger").style.display="grid";
                                                                                checkTriangle++;}
                                                       else {document.getElementById("blockForSelectHeaderPassenger").style.display="none";
                                                                                    checkTriangle--;} }  );
let countAdults = 1;
let countChildren = 0;
let countAll = 1;
let buttonMinusAdult = document.getElementById("buttonMinusAdult");
let buttonPlusAdult = document.getElementById("buttonPlusAdult");
let buttonPlusChildren = document.getElementById("buttonPlusChildren");
let buttonMinusChildren = document.getElementById("buttonMinusChildren");
buttonMinusAdult.addEventListener("click", function () {if (buttonMinusAdult.classList.contains('activeButton')) {countAdults--;
                                                                                                                  countAll--;
                                                                                                                  buttonPlusAdult.classList.remove("disabledButton");
                                                                                                                  buttonPlusAdult.classList.add("activeButton");
                                                                                                             document.getElementById("adultNum").innerHTML=`${countAdults}`;
                                                                                                             if (countAll==0 || countAll>4) { document.getElementById("countPassengers").innerHTML=`${countAll} пассажиров`;}
                                                                                                                else if (countAll==1) { document.getElementById("countPassengers").innerHTML=`${countAll} пассажир`;}
                                                                                                                   else { document.getElementById("countPassengers").innerHTML=`${countAll} пассажира`;}
                                                                                                             if (countAdults==0) {buttonMinusAdult.classList.add("disabledButton");
                                                                                                                                  buttonMinusAdult.classList.remove("activeButton");} } } );
buttonPlusAdult.addEventListener("click", function () {if (buttonPlusAdult.classList.contains('activeButton')) {countAdults++;
                                                                                                                countAll++;
                                                                                                                buttonMinusAdult.classList.remove("disabledButton");
                                                                                                                buttonMinusAdult.classList.add("activeButton");
                                                                                                           document.getElementById("adultNum").innerHTML=`${countAdults}`;
                                                                                                           if (countAll==0 || countAll>4) { document.getElementById("countPassengers").innerHTML=`${countAll} пассажиров`;}
                                                                                                              else if (countAll==1) { document.getElementById("countPassengers").innerHTML=`${countAll} пассажир`;}
                                                                                                                 else { document.getElementById("countPassengers").innerHTML=`${countAll} пассажира`;}
                                                                                                           if (countAdults==19) {buttonPlusAdult.classList.add("disabledButton");
                                                                                                                                buttonPlusAdult.classList.remove("activeButton");} } } );
buttonMinusChildren.addEventListener("click", function () {if (buttonMinusChildren.classList.contains('activeButton')) {countChildren--;
                                                                                                                                    countAll--;
                                                                                                                                    buttonPlusChildren.classList.remove("disabledButton");
                                                                                                                                    buttonPlusChildren.classList.add("activeButton");
                                                                                                                               document.getElementById("childrenNum").innerHTML=`${countChildren}`;
                                                                                                                               if (countAll==0 || countAll>4) { document.getElementById("countPassengers").innerHTML=`${countAll} пассажиров`;}
                                                                                                                                  else if (countAll==1) { document.getElementById("countPassengers").innerHTML=`${countAll} пассажир`;}
                                                                                                                                     else { document.getElementById("countPassengers").innerHTML=`${countAll} пассажира`;}
                                                                                                                               if (countChildren==0) {buttonMinusChildren.classList.add("disabledButton");
                                                                                                                                                    buttonMinusChildren.classList.remove("activeButton");} } } );
buttonPlusChildren.addEventListener("click", function () {if (buttonPlusChildren.classList.contains('activeButton')) {countChildren++;
                                                                                                                                  countAll++;
                                                                                                                                  buttonMinusChildren.classList.remove("disabledButton");
                                                                                                                                  buttonMinusChildren.classList.add("activeButton");
                                                                                                                             document.getElementById("childrenNum").innerHTML=`${countChildren}`;
                                                                                                                             if (countAll==0 || countAll>4) { document.getElementById("countPassengers").innerHTML=`${countAll} пассажиров`;}
                                                                                                                                else if (countAll==1) { document.getElementById("countPassengers").innerHTML=`${countAll} пассажир`;}
                                                                                                                                   else { document.getElementById("countPassengers").innerHTML=`${countAll} пассажира`;}
                                                                                                                             if (countChildren==19) {buttonPlusChildren.classList.add("disabledButton");
                                                                                                                                                  buttonPlusChildren.classList.remove("activeButton");} } } );
                        