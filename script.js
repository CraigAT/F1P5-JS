
let race_results = {
    1 : [ 
        {"Tag":"GAS", "Team": "ALP", "Pos": "1"  , "FastLap": 1, "Points": 26},
        {"Tag":"OCO", "Team": "ALP", "Pos": "2"  , "FastLap": 0, "Points": 18},
        {"Tag":"HUL", "Team": "HAS", "Pos": "3"  , "FastLap": 0, "Points": 15},
        {"Tag":"MAG", "Team": "HAS", "Pos": "4"  , "FastLap": 0, "Points": 12},
        {"Tag":"BOT", "Team": "KCK", "Pos": "5"  , "FastLap": 0, "Points": 10},
        {"Tag":"ZHO", "Team": "KCK", "Pos": "6"  , "FastLap": 0, "Points":  8},
        {"Tag":"RIC", "Team": "RB2", "Pos": "7"  , "FastLap": 0, "Points":  6},
        {"Tag":"TSU", "Team": "RB2", "Pos": "8"  , "FastLap": 0, "Points":  4},
        {"Tag":"ALB", "Team": "WIL", "Pos": "9"  , "FastLap": 0, "Points":  2},
        {"Tag":"SAR", "Team": "WIL", "Pos": "DNF", "FastLap": 0, "Points":  0}
    ],
    2 : [ 
        {"Tag":"GAS", "Team": "ALP", "Pos": "5"  , "FastLap": 0, "Points": 10},
        {"Tag":"OCO", "Team": "ALP", "Pos": "4"  , "FastLap": 0, "Points": 12},
        {"Tag":"HUL", "Team": "HAS", "Pos": "6"  , "FastLap": 0, "Points":  8},
        {"Tag":"MAG", "Team": "HAS", "Pos": "3"  , "FastLap": 0, "Points": 15},
        {"Tag":"BOT", "Team": "KCK", "Pos": "DNF", "FastLap": 0, "Points":  0},
        {"Tag":"ZHO", "Team": "KCK", "Pos": "2"  , "FastLap": 1, "Points": 19},
        {"Tag":"RIC", "Team": "RB2", "Pos": "8"  , "FastLap": 0, "Points":  4},
        {"Tag":"TSU", "Team": "RB2", "Pos": "1"  , "FastLap": 0, "Points": 25},
        {"Tag":"ALB", "Team": "WIL", "Pos": "9"  , "FastLap": 0, "Points":  2},
        {"Tag":"SAR", "Team": "WIL", "Pos": "7"  , "FastLap": 0, "Points":  6}
    ]
};

let drivers_f1p5 = {
    "GAS": "Pierre GASLY",
    "OCO": "Esteban OCON",
    "HUL": "Nico HULKENBERG",
    "MAG": "Kevin MAGNUSSEN",
    "BOT": "Valtteri BOTTAS",
    "ZHO": "ZHOU Guanyu",
    "RIC": "Daniel RICCIARDO",
    "TSU": "Yuki TSUNODA",
    "ALB": "Alexander ALBON",
    "SAR": "Logan SARGEANT"
}

let teams_f1p5 = {
    "ALP": "Alpine",
    "HAS": "HAAS",
    "RB2": "RB VCA",
    "KCK": "Kick Sauber",
    "WIL": "Williams"
}

let teams_f1 = {
    "ALP": "Alpine",
    "AST": "Aston Martin",
    "FER": "Ferrari",
    "HAS": "HAAS",
    "MCL": "McLaren",
    "MER": "Mercedes",
    "RB2": "RB VCA",
    "RB1": "Red Bull",
    "KCK": "Kick Sauber",
    "WIL": "Williams"
}

let team_colours_f1 = {
    "ALP": "#ff88bc",
    "AST": "#249970",
    "FER": "#e8012b",
    "HAS": "#b5babd",
    "MCL": "#ff8100",
    "MER": "#27f3d1",
    "RB2": "#6592fe",
    "RB1": "#3571c7",
    "KCK": "#52e251",
    "WIL": "#65c4ff"
}


let driver_totals = [];
let team_totals = [];

for (let race_num in race_results) {

    //console.log("Race No. ", race_num);
    //console.log("Race Results ", race_results[race_num]);
    for (let driver of race_results[race_num]) {

        //console.log("Driver: ", driver);
        let tag = driver["Tag"];
        let team = driver["Team"];
        let points = driver["Points"];
        //console.log("Tag ", tag);
        
        // Check if driver already in the list
        driver_found = false;
        for (let entry of driver_totals) {
            if (tag == entry["Tag"]) {
                driver_found = true;
                //console.log("Driver Found ", driver);
                entry["Points"] += points;
            }
        }
        if (driver_found == false) {
            //console.log("Driver Added ", driver);
            driver_totals.push({"Tag": tag, "Team": team, "Points": points});
        }
        //console.log("Driver Totals ", driver_totals);

        team_found = false;
        for (let entry of team_totals) {
            if (team == entry["Team"]) {
                team_found = true;
                //console.log("Team Found ", team);
                entry["Points"] += points;
            }
        }
        if (team_found == false) {
            //console.log("Team Added ", team);
            team_totals.push({"Team": team, "Points": points});
        }
        //console.log("Team Totals ", team_totals);
    }
    //console.log("Driver Totals ", driver_totals);
    //console.log("Team Totals ", team_totals);
}

driver_totals.sort((a, b) => b["Points"] - a["Points"] || a["Tag"].localeCompare(b["Tag"]))
team_totals.sort((a, b) => b["Points"] - a["Points"] || a["Team"].localeCompare(b["Team"]))

console.log("Driver Totals ", driver_totals);
console.log("Team Totals ", team_totals);

let element = document.getElementById("content");

let para = document.createElement("p");
let node = document.createTextNode("This is newer than new.");
para.appendChild(node);

element.append(para);


let table = document.createElement("table");


// Find a <table> element with id="myTable":
//var table = document.getElementById("myTable");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";

element.append(table)




