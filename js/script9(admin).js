
let menuMobileAdmin = document.getElementById("menuMobileEnteredUser");
menuMobileAdmin.addEventListener("click", function () {document.getElementById("navMobileShadow").style.display="block";
                                                       document.getElementById("navMobile").style.display="grid";
                                                       document.getElementById("navMobileText").style.display="grid";  
                                                       document.body.style.overflow="hidden";  
                                                       document.body.style.height="100vh";  });
let close=document.getElementById("close");
                close.addEventListener("click", function () {document.getElementById("navMobileShadow").style.display="none";
                                                                  document.getElementById("navMobile").style.display="none";
                                                                  document.getElementById("navMobileText").style.display="none";   
                                                             document.body.style.overflow="auto"; 
                                                             document.body.style.height="auto";  } ); 
let editButtons = document.getElementsByClassName("editButtons");
for (let ed=0;ed<editButtons.length;ed++) {editButtons[ed].addEventListener("click", function () {document.location='adminFlightEdit.html';} );}