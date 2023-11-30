let navBlue = document.getElementsByClassName("navBlue");
                for(let i=0; i<navBlue.length;i++) {navBlue[i].addEventListener("mouseover", function () {document.getElementById("curPage").style.color="black";}   );
                                                    navBlue[i].addEventListener("mouseout", function () {document.getElementById("curPage").style.color="#2D4EFF";}  );}

                let menuMobile=document.getElementById("menuMobile");
                menuMobile.addEventListener("click", function () {document.getElementById("navMobileShadow").style.display="block";
                                                                  document.getElementById("navMobile").style.display="grid";
                                                                  document.getElementById("navMobileText").style.display="grid";  
                                                                  document.body.style.overflow="hidden";  
                                                                  document.body.style.height="100vh";  } );
                let close=document.getElementById("close");
                close.addEventListener("click", function () {document.getElementById("navMobileShadow").style.display="none";
                                                                  document.getElementById("navMobile").style.display="none";
                                                                  document.getElementById("navMobileText").style.display="none";   
                                                             document.body.style.overflow="auto"; 
                                                             document.body.style.height="auto";  } );   
                                                             
                let scrollHeight = document.body.scrollHeight;
                document.getElementById("modalShadow").style.height=`${scrollHeight}px`;                                             
                let enter=document.getElementById("enter");
                enter.addEventListener("click", function () {document.getElementById("modalEnter").style.top="50%";
                                                            document.getElementById("modalShadow").style.display="block";
                                                            } );
                let closeEnter = document.getElementById("closeEnter");
                closeEnter.addEventListener("click", function () {document.getElementById("modalEnter").style.top="-50%";
                                                                  document.getElementById("modalShadow").style.display="none";} );
                let reg=document.getElementById("reg");
                reg.addEventListener("click", function () {document.getElementById("modalReg").style.top="50%";
                                                            document.getElementById("modalShadow").style.display="block";
                                                            } );
                let closeReg = document.getElementById("closeReg");
                closeReg.addEventListener("click", function () {document.getElementById("modalReg").style.top="-50%";
                                                                  document.getElementById("modalShadow").style.display="none";} );
                
                let inputs = document.getElementsByClassName("inputModal");
                let labelsForInputs = document.getElementsByClassName("labelModal");
                for (let i = 0; i < inputs.length; i++) {inputs[i].addEventListener("input", function () {inputs[i].style.paddingTop = "5%";
                                                                                                            labelsForInputs[i].style.display = "block";
                                                                                                            inputs[i].style.color = "black";} );        }
    


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
                                                                                                                            