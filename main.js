//event listener for buttons
document.getElementById("Random nickname").addEventListener("click", buttonHandler)
document.getElementById("All names").addEventListener("click", buttonHandler)

//load names

function buttonHandler () {
    //input
    let name1 = +document.getElementById("firstname").value;
    let name2 = +document.getElementById("lastname").value;
    //output
    document.getElementById("output").innerHTML = (firstname + output + lastname)
}