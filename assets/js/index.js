let beefCut = document.getElementById("beef-cut");

let beefCutChoice = ""

// Set variables for weight input here, above cooking choices

let howCooked = document.getElementById("how-cooked");

let howCookedChoice = howCooked.options[howCooked.selectedIndex].value;

const calculateButton = document.getElementById("calculate-button");

// Event listener for the calculation

calculateButton.addEventListener("click", calculate);

// Change which option has the select tag in the html

function updateCutChoice() {
    var beefCutChoice = beefCut.options[beefCut.selectedIndex].value;
    console.log(beefCutChoice);
    return beefCutChoice;
}

// Calculate function

function calculate() {
    updateCutChoice();
    console.log(beefCutChoice);
    console.log(howCookedChoice);
}