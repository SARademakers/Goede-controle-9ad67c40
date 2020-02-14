let input = document.querySelectorAll('input');
let message = document.querySelector('h4');

var antwoord = ["Parijs", 8, "IJsselmeer"];

function antwoorden() {
    var points = 0;
    for(var i = 0; i < antwoord.length; i++) {
        if(input[i].value == antwoord[i]) {
            points++;
        }
    }
    return points;
}

function resultaat() {
    message.innerText = "Je hebt er " + antwoorden() + " goed";
}