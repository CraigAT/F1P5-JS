
const MAX_DRIVERS = 10;
const MAX_RACES = 24;

let f1p5_data = {

    "Results": [
        {
            "Round": 1,
            "Race_Result": [
                {"Team": "KCK", "Tag":"ZHO", "Result": "1"},
                {"Team": "HAS", "Tag":"MAG", "Result": "2"},
                {"Team": "RB2", "Tag":"RIC", "Result": "3"},
                {"Team": "RB2", "Tag":"TSU", "Result": "4"},
                {"Team": "WIL", "Tag":"ALB", "Result": "5"},
                {"Team": "HAS", "Tag":"HUL", "Result": "6"},
                {"Team": "ALP", "Tag":"OCO", "Result": "7"},
                {"Team": "ALP", "Tag":"GAS", "Result": "8"},
                {"Team": "KCK", "Tag":"BOT", "Result": "9"},
                {"Team": "WIL", "Tag":"SAR", "Result": "10*"}
            ]
        },
        {
            "Round": 2,
            "Race_Result": [
                {"Team": "ALP", "Tag":"GAS", "Result": "1"},
                {"Team": "HAS", "Tag":"HUL", "Result": "2"},
                {"Team": "KCK", "Tag":"ZHO", "Result": "3"},
                {"Team": "HAS", "Tag":"MAG", "Result": "4*"},
                {"Team": "WIL", "Tag":"SAR", "Result": "5"},
                {"Team": "WIL", "Tag":"ALB", "Result": "6"},
                {"Team": "KCK", "Tag":"BOT", "Result": "7"},
                {"Team": "ALP", "Tag":"OCO", "Result": "DNF"},
                {"Team": "RB2", "Tag":"TSU", "Result": "DNS"},
                {"Team": "RB2", "Tag":"RIC", "Result": "DSQ"}
            ],
            "Sprint_Result": [
                {"Team": "WIL", "Tag":"ALB", "Result": "1"},
                {"Team": "RB2", "Tag":"RIC", "Result": "2"},
                {"Team": "HAS", "Tag":"MAG", "Result": "3"},
                {"Team": "WIL", "Tag":"SAR", "Result": "4"},
                {"Team": "KCK", "Tag":"ZHO", "Result": "5"},
                {"Team": "ALP", "Tag":"GAS", "Result": "6"},
                {"Team": "KCK", "Tag":"BOT", "Result": "7"},
                {"Team": "RB2", "Tag":"TSU", "Result": "8"},
                {"Team": "HAS", "Tag":"HUL", "Result": "9"},
                {"Team": "ALP", "Tag":"OCO", "Result": "DNF"}
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
    },

    "Race_Points_Table": {
        "1*": 26, "2*": 19, "3*": 16, "4*": 13, "5*": 11, "6*": 9, "7*": 7, "8*": 5, "9*": 3, "10*": 2,
        "1" : 25, "2" : 18, "3" : 15, "4" : 12, "5" : 10, "6" : 8, "7" : 6, "8" : 4, "9" : 2, "10" : 1,
        "DNF": 0, "DNS": 0, "DSQ": 0
    },

    "Sprint_Points_Table": {
        "1": 8, "2": 7, "3": 6, "4": 5, "5" : 4,
        "6": 3, "7": 2, "8": 1, "9": 0, "10": 0,
        "DNF": 0, "DNS": 0, "DSQ": 0,
    }

}


function add_points_to_driver_totals(totals, tag, points){

}


function add_points_to_team_totals(totals, team, points){
    
}


function calculateTotals(data) {

    let driver_totals = [];
    let team_totals = [];

    for (let round of data["Results"]) {
        //console.log(`Round No: ${round["Round"]}`);

        console.log(`Race Result - Round: ${round["Round"]}`);
        // Total up Race points
        for (let entry of round["Race_Result"]) {

            //console.log(`Driver: ${entry["Tag"]}`);
            let tag = entry["Tag"];
            let team = entry["Team"];
            let result = entry["Result"];
            let points = data["Race_Points_Table"][result];
            //console.log(`Points: ${points}  -  ${result}`);
            message = `Driver: ${tag} / Team: ${team} / Result: ${result} / Points: ${points}`;
            let fastest_lap = result.endsWith("*");
            if (fastest_lap) {
                //console.log(`+ Fastest Lap`);
                message += ` (Fastest Lap)`;
            }
            console.log(message);
            add_points_to_driver_totals(driver_totals,tag,points);
            add_points_to_team_totals(team_totals,team,points);
        }

        if ("Sprint_Result" in round) {
            console.log(`Sprint Result - Round: ${round["Round"]}`);
            // Total up Sprint points
            for (let entry of round["Sprint_Result"]) {
                //console.log(`Driver: ${entry["Tag"]}`);
                let tag = entry["Tag"];
                let team = entry["Team"];
                let result = entry["Result"];
                let points = data["Sprint_Points_Table"][result];
                //console.log(`Points: ${points}`);
                message = `Driver: ${tag} / Team: ${team} / Result: ${result} / Points: ${points}`;
                console.log(message);
                add_points_to_driver_totals(driver_totals, tag, points);
                add_points_to_team_totals(team_totals, team, points);
            }
        }


            /*
            let position = entry["Pos"];
            let fastest_lap = entry["Fast_Lap"];
            
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



