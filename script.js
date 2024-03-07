
const MAX_DRIVERS = 10;
const MAX_RACES = 24;

let f1p5_data = {

    "Race_Results": [
        {
            "Race_Number": 1,
            "Race_Result": [
                {"Team": "KCK", "Tag":"ZHO", "Pos": "1"  , "Fast_Lap": 0, "Points": 25},
                {"Team": "HAS", "Tag":"MAG", "Pos": "2"  , "Fast_Lap": 0, "Points": 18},
                {"Team": "RB2", "Tag":"RIC", "Pos": "3"  , "Fast_Lap": 0, "Points": 15},
                {"Team": "RB2", "Tag":"TSU", "Pos": "4"  , "Fast_Lap": 0, "Points": 12},
                {"Team": "WIL", "Tag":"ALB", "Pos": "5"  , "Fast_Lap": 0, "Points": 10},
                {"Team": "HAS", "Tag":"HUL", "Pos": "6"  , "Fast_Lap": 0, "Points":  8},
                {"Team": "ALP", "Tag":"OCO", "Pos": "7"  , "Fast_Lap": 0, "Points":  6},
                {"Team": "ALP", "Tag":"GAS", "Pos": "8"  , "Fast_Lap": 0, "Points":  4},
                {"Team": "KCK", "Tag":"BOT", "Pos": "9"  , "Fast_Lap": 0, "Points":  2},
                {"Team": "WIL", "Tag":"SAR", "Pos": "10" , "Fast_Lap": 1, "Points":  2}
            ]
        },
        {
            "Race_Number": 2,
            "Race_Result": [
                {"Team": "ALP", "Tag":"GAS", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "ALP", "Tag":"OCO", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "HAS", "Tag":"HUL", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "HAS", "Tag":"MAG", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "KCK", "Tag":"BOT", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "KCK", "Tag":"ZHO", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "RB2", "Tag":"RIC", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "RB2", "Tag":"TSU", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "WIL", "Tag":"ALB", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0},
                {"Team": "WIL", "Tag":"SAR", "Pos": "DNF"  , "Fast_Lap": 0, "Points":  0}
            ]
        }
    ],

    "Driver_Names": {
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
    },

    "Teams": {
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

}


function calculateTotals(data) {

    let driver_totals = [];
    let team_totals = [];

    for (let race of data["Race_Results"]) {
        console.log(`Race No: ${race["Race_Number"]}`);
        for (let place of race["Race_Result"]) {
            console.log(`Driver: ${place["Tag"]}`);

            let tag = place["Tag"];
            let team = place["Team"];
            /*
            let position = place["Pos"];
            let fastest_lap = place["Fast_Lap"];
            let points = place["Points"];
            let driver_name = driver_names[tag];
            let team_name = data["Teams"][team]["Name"];

            // Check if driver already in the list
            driver_found = false;  // Assume the driver is not already in the list
            for (let entry of driver_totals) {
                if (tag == entry["Tag"]) {
                    driver_found = true;
                    //console.log("Driver Found ", driver);
                    entry["Points"] += points;
                }
            }
            */
        }
    }

}

calculateTotals(f1p5_data);










/*
function createTable(data) {

    var headers = Object.keys(data[0]);
    console.log(headers);
    //var headers = ["Title", "Author", "Read?"];

    
    var table = document.createElement("TABLE");  //makes a table element for the page
        
    for(var i = 0; i < books.length; i++) {
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = books[i].title;
        row.insertCell(1).innerHTML = books[i].author;
        row.insertCell(2).innerHTML = books[i].alreadyRead;
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }

    document.body.append(table);
    
}
*/


/*

let driver_totals = [];
let team_totals = [];

for (let race_num in race_results) {

    createTable(race_results[race_num]);
    
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


*/



