let beefCut = document.getElementById("beef-cut");

// Set variables for weight input here, above cooking choices

let howCooked = document.getElementById("how-cooked");

let howCookedChoice = howCooked.options[howCooked.selectedIndex].value;

const calculateButton = document.getElementById("calculate-button");

// Event listener for the calculation

calculateButton.addEventListener("click", calculate);

// Calculate function

function calculate() {
    let beefCutChoice = beefCut.options[beefCut.selectedIndex].value;
    console.log(beefCutChoice);
    console.log(howCookedChoice);
}