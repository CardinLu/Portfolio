var bob = document.getElementById("bob");

    for (var i = 0; i < 5; i++) {
        var paragraph = document.createElement("p");
        paragraph.textContent = "Bob " + (i + 1);

        bob.appendChild(paragraph);
    }

function changeColor() {
    document.getElementById('bob').style.color = "blue";
    document.getElementById('bob').style.backgroundColor = "yellow"; 
    document.body.style.backgroundColor = "red";
}