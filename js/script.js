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
    



                                                                                                                            