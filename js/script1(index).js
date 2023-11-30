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