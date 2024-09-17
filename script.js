// Getting the references of HTML elements

let button1 = document.getElementById("button-1");

let button2 = document.getElementById("button-2");

let copyCode = document.querySelector(".copyCode");

let rgb1 = "#000";

let rgb2 = "#fff";

// Generating Random Hex Values: Hex values are of length 6 and is between 0 and 15

let myHexValue = () => {

    let myHexValues = "0123456789ABCDEF";

    let myColor = "#";

    for (let i = 0; i < 6; i++) {

        myColor += myHexValues[Math.floor(Math.random() * 16)];
    }

    return myColor;
};

// Adding Event Listeners to the buttons

const handleButtonClick1 = () => {

    rgb1 = myHexValue();

    button1.innerText = rgb1;

    button1.style.backgroundColor = rgb1;

    button1.style.borderColor = rgb1;

    button1.style.border = `2px solid ${rgb1}`;

    button1.style.color = "white";

    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;

    copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButtonClick2 = () => {

    rgb2 = myHexValue();

    button2.innerText = rgb2;

    button2.style.backgroundColor = rgb2;

    button2.style.borderColor = rgb2;

    button2.style.border = `2px solid ${rgb2}`;

    button2.style.color = "white";

    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;

    copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

button1.addEventListener("click", handleButtonClick1);

button2.addEventListener("click", handleButtonClick2);

// Function to copy the hex code using the clipboard API

copyCode.addEventListener("click", () => {

    navigator.clipboard.writeText(copyCode.innerText);
    
    alert("Code Copied!");
});