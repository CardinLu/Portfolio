var bob = document.getElementById('bob');

for (var i = 0; i < 5; i++){
    const paragraph = document.createElement('p');
    const text = document.createTextNode("BOB");
    bob.appendChild(text);
}

function changeColor() {
    document.getElementById('bob').style.color = "blue";
    document.getElementById('bob').style.backgroundColor = "yellow"; 
    document.body.style.backgroundColor = "red";
}