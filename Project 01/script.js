// Project requirment : 
//     Change the background color by generating random rgb color by clicking the button 

// STEP 01: SELECT THE DOM ELEMENTS
// STEP 02: ADD EVENT LISTNER TO THE DOM ELEMENTS 
// STEP 02: GENERATE A RANDOM COLOR 
// STEP 03: SET THE BACKGROUD 

window.onload = () => main();

function main() {
    const Root = document.getElementById("root");
    const Button = document.getElementById("change-btn");

    Button.addEventListener('click', () => {
        const BackgroundColor = GenerateColor();
        Root.style.background = BackgroundColor;
        
    })

    const GenerateColor = () => {
        const red = Math.floor(Math.random() * 255) + 1;
        const green = Math.floor(Math.random() * 255) + 1;
        const blue = Math.floor(Math.random() * 255) + 1;

        let RGB = `rgb(${red}, ${green}, ${blue})`;
        return RGB;
    }
}