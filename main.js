//event listener for buttons
document.getElementById("Random nickname").addEventListener("click", randomButtonHandler)
document.getElementById("All names").addEventListener("click", allButtonHandler)

// Global Variables
let nicknames;
//load names
fetch("nicknames.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    nicknames = stringData.split(/\r?\n/);
}

//input names and generate nickname

function randomButtonHandler () {
    //input
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    //output
    let randomNickname = nicknames[randomInt(0, nicknames.length)]
    document.getElementById("nickname").innerHTML = `${firstName} "${randomNickname}" ${lastName}`;
}

function allButtonHandler () {
    //input
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    for (let i = 0; i < nicknames.length; i++) {
        document.getElementById("nickname").innerHTML += `${firstName} "${nicknames[i]}" ${lastName}<br>`;
    }
    
}