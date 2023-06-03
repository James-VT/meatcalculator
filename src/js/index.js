let beefCut = document.getElementById("beef-cut");

// Set variables for weight input here, above cooking choices

let cutWeight = document.getElementById("cut-weight");

let howCooked = document.getElementById("how-cooked");

const calculateButton = document.getElementById("calculate-button");

// Event listener for the calculation

calculateButton.addEventListener("click", calculate);

// Calculate function (these are all just testers for now)

function calculate() {
    let beefCutChoice = beefCut.options[beefCut.selectedIndex].value;
    let howCookedChoice = howCooked.options[howCooked.selectedIndex].value;
    let cutWeightChoice = cutWeight.value;
    console.log(beefCutChoice);
    console.log(cutWeightChoice);
    console.log(howCookedChoice);
};

function beefCutSelection() {
    let howCookedSelected = howCooked.options[howCooked.selectedIndex].value;

    if (howCookedSelected === "rare") {
        console.log("rare chosen")
    } else {
        console.log("not rare")
    }
};