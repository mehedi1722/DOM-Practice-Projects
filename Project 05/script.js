// Project requirment : 
//     Change the background color by generating random hex color by clicking the button 
//     The hex color have to display in input field
//     Copy the hex color code by clicking the copy button 
//     Display a toast message also when click in the copy button
//     Remove the toast message clicking the toast message 


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
        // STEP 07: Display a toast message when the color code copied  
        if(IsColorValid(Inputfield.value)) {
            DisplayToastMessage(`${Inputfield.value} copied`);
        }else{
            alert("Color code is not valid")
        }
    })

    // STEP 07: GIVE A COLOR CODE IN INPUT FIELD TO CHANGE THE BACKGROUND 
    Inputfield.addEventListener('keyup', (e) => {
        const color = e.target.value;
        if(color && IsColorValid(color)) {
            Root.style.background = color;
        }else{
            Root.style.background = "#000";
        }
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

const DisplayToastMessage = message => {
    const div = document.createElement('div');
    div.innerText = message;
    div.classList = 'toast-message toast-message-slide-in';
    document.body.appendChild(div)

    div.addEventListener('click', () => {
        div.classList.add("toast-message-slide-out")
        div.classList.remove("toast-message-slide-in")

        div.addEventListener('animationend', () => {
            div.remove();
        })
    })
}

// Color code validation function 
const IsColorValid = (color) => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

