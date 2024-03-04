
const MAX_DRIVERS = 10;
const MAX_RACES = 24;

let race_results = {
    1 : [ 
        {"Team": "ALP", "Tag":"GAS", "Pos": "8"  , "FastLap": 0, "Points":  4},
        {"Team": "ALP", "Tag":"OCO", "Pos": "7"  , "FastLap": 0, "Points":  6},
        {"Team": "HAS", "Tag":"HUL", "Pos": "6"  , "FastLap": 0, "Points":  8},
        {"Team": "HAS", "Tag":"MAG", "Pos": "2"  , "FastLap": 0, "Points": 18},
        {"Team": "KCK", "Tag":"BOT", "Pos": "9"  , "FastLap": 0, "Points":  2},
        {"Team": "KCK", "Tag":"ZHO", "Pos": "1"  , "FastLap": 0, "Points": 25},
        {"Team": "RB2", "Tag":"RIC", "Pos": "3"  , "FastLap": 0, "Points": 15},
        {"Team": "RB2", "Tag":"TSU", "Pos": "4"  , "FastLap": 0, "Points": 12},
        {"Team": "WIL", "Tag":"ALB", "Pos": "5"  , "FastLap": 0, "Points": 10},
        {"Team": "WIL", "Tag":"SAR", "Pos": "10" , "FastLap": 1, "Points":  2}
    ],
    2 : [ 
        {"Team": "ALP", "Tag":"GAS", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "ALP", "Tag":"OCO", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "HAS", "Tag":"HUL", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "HAS", "Tag":"MAG", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "KCK", "Tag":"BOT", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "KCK", "Tag":"ZHO", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "RB2", "Tag":"RIC", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "RB2", "Tag":"TSU", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "WIL", "Tag":"ALB", "Pos": "DNF"  , "FastLap": 0, "Points":  0},
        {"Team": "WIL", "Tag":"SAR", "Pos": "DNF"  , "FastLap": 0, "Points":  0}
    ]
};

let driver_names = {
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

let teams = {
    "ALP": {"Name":"Alpine", "Color": "#ff88bc"},
    "AST": {"Name":"Aston Martin", "Color": "249970"},
    "FER": {"Name":"Ferrari", "Color": "e8012b"},
    "HAS": {"Name":"HAAS", "Color": "b5babd"},
    "MCL": {"Name":"McLaren", "Color": "ff8100"},
    "MER": {"Name":"Mercedes", "Color": "27f3d1"},
    "RB2": {"Name":"RB VCA", "Color": "6592fe"},
    "RB1": {"Name":"Red Bull", "Color": "3571c7"},
    "KCK": {"Name":"Kick Sauber", "Color": "52e251"},
    "WIL": {"Name":"Williams", "Color": "65c4ff"}
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
        let position = driver["Pos"];
        let points = driver["Points"];
        let driver_name = driver_names[tag];
        let team_name = teams[team]["Name"];
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
        // If driver not found after search through the list we are building
        if (driver_found == false) {
            //console.log("Driver Added ", driver);
            positions = new Array(MAX_DRIVERS).fill(0);
            if ( ( Number(position) !== NaN ) && ( (Number(position) >= 1) && (Number(position) <= MAX_DRIVERS) ) ) {
                positions[Number(position) - 1] += 1;
            }
            driver_totals.push({"Tag": tag, "Name": driver_name, "Team": team, "Points": points, "Positions": positions});
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
            team_totals.push({"Team": team, "Name": team_name, "Points": points});
        }
        //console.log("Team Totals ", team_totals);
    }
    //console.log("Driver Totals ", driver_totals);
    //console.log("Team Totals ", team_totals);
}

driver_totals.sort((a, b) => b["Points"] - a["Points"] || a["Tag"].localeCompare(b["Tag"]))
team_totals.sort((a, b) => b["Points"] - a["Points"] || a["Name"].localeCompare(b["Name"]))

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




