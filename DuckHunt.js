var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

var duck = document.getElementById("duck");
var ducktop = 500;
var duckleft  = 300;

var missclick = document.getElementById("container");
var duckclick = document.getElementById("duck");
var hitscore = document.getElementById("hit");
var missscore = document.getElementById("miss");

var hit = 0;
var miss = 0;

missclick.onclick = missClicked;
duckclick.onclick = duckClicked;

function duckClicked (event) {
    console.log("clicked");
    hit++;
    hitscore.innerHTML = hit;
   

    if (hit === 20){
        alert("Gewonnen!");
    }

    event.stopPropagation();
}

function missClicked (event) {
    console.log("miss");
    miss++;
    missscore.innerHTML = miss;

    if (miss === 20) {
        alert("Verloren!");
    }

    event.stopPropagation();
}

function moveTimer () {
    setInterval(fly, 500);
}

function fly () {

    random = directions[Math.floor(Math.random()*directions.length)];

    switch (random) {
        case "N":
            console.log("N");
            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;

        case "NE": 
            console.log("NE");
            duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;

        case "E":
            console.log("E");
            duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";
            break;

        case "SE":
            console.log("SE");
            ducktop = ducktop + 75;
            duck.style.top = ducktop + "px";

            duckleft = duckleft + 75;
            duck.style.left = duckleft + "px";
            break;

        case "S":
            console.log("S");
            ducktop = ducktop + 75;
            duck.style.top = ducktop + "px";         
            break;

        case "SW":
            console.log("SW");
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop + 75;
            duck.style.top = ducktop + "px";      
            break;

        case "W":
            console.log("W")
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";
            break;

        case "NW":
            console.log("NW");
            duckleft = duckleft - 75;
            duck.style.left = duckleft + "px";

            ducktop = ducktop - 75;
            duck.style.top = ducktop + "px";
            break;
    }
}

moveTimer()
fly()