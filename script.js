let frågor = [
    "Är du redo att gå ombord på årets julkryssning?",
    "Kommer du att bli sjörövarfull både till och från Helsinki?",
    "Kommer du att bråka med folk i buffekön?",
    "Kommer du att störa de andra gästerna och sjunga nubbevisor högt som fan?",
    "Kommer du rycka till dig kareokemikrofonen från en medresenär?",
    "Kommer du (Herman håller det i år) att klaga på det vanligtvis sjukt överkomplicerade julquizet som Karin brukar hålla i?",
    "Kommer du spela bort en betydande summa pengar på hasardspel?",
    "Är du redo att försvara familjens heder på öppet hav?",
    "Är du beredd på en oförglömlig kryssning?",
    "Svär du trohet till Julkryssningen 2026?"
];

let frågeIndex = 0;
let besökarNamn = "";
function startaProv() {
    besökarNamn = document.getElementById("namn").value.trim();

    if (besökarNamn === "") {
        alert("Kaptenen kräver att du uppger ditt namn!");
        return;
    }

    document.getElementById("start").style.display = "none";
    document.getElementById("prov").style.display = "block";

    visaFråga();
}

function visaFråga() {
    document.getElementById("fråga").textContent =
        frågor[frågeIndex];

    document.getElementById("nummer").textContent =
        "Fråga " + (frågeIndex + 1) + " av " + frågor.length;
}

function svaraJa() {
    frågeIndex++;

    if (frågeIndex < frågor.length) {
        document.getElementById("svar").textContent = "";
        visaFråga();
    } else {
        document.getElementById("prov").style.display = "none";
        document.getElementById("licens").style.display = "block";

        document.getElementById("licensNamn").textContent =
            besökarNamn;
    }
}

function svaraNej() {
    document.getElementById("svar").textContent =
        "Fel svar! Kaptenen beviljar dig inte sjörövarlicens. Försök igen!";
}

function skapaSno() {
    let behallare = document.querySelector(".snofall");

    for (let i = 0; i < 40; i++) {
        let flinga = document.createElement("span");

        flinga.className = "snoflinga";
        flinga.textContent = "❄";

        flinga.style.left = Math.random() * 100 + "%";
        flinga.style.fontSize = 10 + Math.random() * 15 + "px";
        flinga.style.animationDelay = Math.random() * -8 + "s";

        behallare.appendChild(flinga);
    }
}

skapaSno();
