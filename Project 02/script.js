// Project requirment : 
//     Change the background color by generating random hex color by clicking the button 
//     The hex color have to display in input field

// STEP 01: SELECT THE DOM ELEMENTS
// STEP 02: ADD EVENT LISTNER TO THE DOM ELEMENTS 
// STEP 03: GENERATE A RANDOM Hex COLOR 
// STEP 04: SET THE BACKGROUD 
// STEP 05: Display the hex color in the input field

window.onload = () => main();

function main() {
    const Root = document.getElementById("root");
    const Button = document.getElementById("change-btn");
    const Inputfield = document.getElementById("output");

    Button.addEventListener('click', () => {
        const BackgroundColor = GenerateColor();
        Root.style.background = BackgroundColor;
        Inputfield.value = BackgroundColor;
        
    })
}

const GenerateColor = () => {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;

    // let RGBColor = `rgb(${red}, ${green}, ${blue})`;
    let HexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return HexColor;
}