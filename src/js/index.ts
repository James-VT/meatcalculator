let beefCut = (document.getElementById("beef-cut")) as HTMLSelectElement;

// Set variables for weight input here, above cooking choices

let cutWeight = (document.getElementById("cut-weight")) as HTMLInputElement;

let howCooked = (document.getElementById("how-cooked")) as HTMLSelectElement;

const calculateButton = document.getElementById("calculate-button");

// Event listener for the calculation

calculateButton?.addEventListener("click", calculate);

// Calculate function (these are all just testers for now)

function beefCutSelection() {
    console.log("function called");
    let howCookedSelected = howCooked?.options[howCooked.selectedIndex].value;
    console.log(howCookedSelected);

    if (howCookedSelected === "rare") {
        const beefCutString = "rare chosen";
        return console.log(beefCutString);
    } else if (howCookedSelected != "rare") {
        const beefCutString = "not rare";
        return console.log(beefCutString);
    } else {
        return console.log("nothing doing");
    };

    //return beefCutString
};

function calculate() {
    beefCutSelection();
    let beefCutChoice = beefCut?.options[beefCut.selectedIndex].value;
    let howCookedChoice = howCooked?.options[howCooked.selectedIndex].value;
    let cutWeightChoice = cutWeight?.value;

    console.log(beefCutChoice);
    console.log(cutWeightChoice);
    console.log(howCookedChoice);
};


