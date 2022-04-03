// Project requirment : 
//     Change the background color by generating random hex color by clicking the button 
//     The hex color have to display in input field
//     Copy the color code by clicking the copy button


window.onload = () => main();

function main() {
    // STEP 01: SELECT THE DOM ELEMENTS
    const Root = document.getElementById("root");
    const Button = document.getElementById("change-btn");
    const Inputfield = document.getElementById("output");
    const CopyButton = document.getElementById("copy-btn");
    
    // STEP 02: ADD EVENT LISTNER TO THE DOM ELEMENTS 
    Button.addEventListener('click', () => {
        // STEP 04: SET THE BACKGROUD 
        const BackgroundColor = GenerateColor();
        Root.style.background = BackgroundColor;
        // STEP 05: Display the hex color in the input field
        Inputfield.value = BackgroundColor;
        
    })

    // STEP 06: copy the hex color code by clicking the copy button 
    CopyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(Inputfield.value)
    })
}

// STEP 03: GENERATE A RANDOM Hex COLOR 
const GenerateColor = () => {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;

    // let RGBColor = `rgb(${red}, ${green}, ${blue})`;
    let HexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return HexColor;
}