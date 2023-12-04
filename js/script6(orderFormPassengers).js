let inputsFormPassenger = document.getElementsByClassName("jsInput");
let labelsForInputsPassenger = document.getElementsByClassName("labelJs");
for (let r = 0; r < inputsFormPassenger.length; r++) {inputsFormPassenger[r].addEventListener("input", function () {inputsFormPassenger[r].style.paddingTop = "3%";
                                                                                                            labelsForInputsPassenger[r].style.display = "block";
                                                                                                            inputsFormPassenger[r].style.color = "black";} );        }

let firstRadioButton = document.getElementById("firstRadioButton");
let secondRadioButton = document.getElementById("secondRadioButton");
firstRadioButton.addEventListener("click", function () {document.getElementById("circle2").style.display="none";
                                                        document.getElementById("circle1").style.display="block";} );
secondRadioButton.addEventListener("click", function () {document.getElementById("circle1").style.display="none";
                                                        document.getElementById("circle2").style.display="block";} );