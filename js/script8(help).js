let chatBlock = document.getElementById("chat");
let addVoid1 = document.getElementById("addVoid1");
let addVoid2 = document.getElementById("addVoid2");
function getTheStyle(element){let height = window.getComputedStyle(element).height;
                                return height;}
alert (parseInt(getTheStyle(chatBlock)));
if (parseInt(getTheStyle(chatBlock))>750) {addVoid1.style.display = "block";
                                     addVoid2.style.display = "block";}
else if  ((parseInt(getTheStyle(chatBlock))<820) && (parseInt(getTheStyle(chatBlock))>750)) {addVoid1.style.display = "block";}