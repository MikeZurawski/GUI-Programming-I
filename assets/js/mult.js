//File: mult.js
//4610 Assignment 7: Using jQuery
//Michael Zurawski, UMass Lowell Computer Science, michael_zurawski@student.uml.edu
//updated by Mike on November 10, at 6:00 PM
//Purpose: Page deals with the multiplication table
//Sources: 
// Main function does bulk of the work in createing table


function makeTable() {
    var table = document.createElement('table');

    // Get the values from the when submit is pressed
    var multiplicand1 = document.getElementById("multiplicand1").value,
    multiplicand2 = document.getElementById("multiplicand2").value,
    multiplier1 = document.getElementById("multiplier1").value,
    multiplier2 = document.getElementById("multiplier2").value;


    // Verfiy the numbers are correct
    console.log(multiplicand1 + ' ' + multiplicand2 + ' ' + multiplier1 + ' ' + multiplier2);
    var ver1 = multiplicand1,
        ver2 = multiplicand2,
        hor1 = multiplier1,
        hor2 = multiplier2,
        tablerow,
        tabledata,
        text,
        columnNumber;

    // Add horizontal row numbering
    for (var i = 0; i < 1; i ++) {
        tablerow = document.createElement('tr');
        // Columns 
        for (var j = hor1 - 1; j <= hor2; j++) {
            tabledata = document.createElement('td');
            text = document.createTextNode(j);
            tabledata.appendChild(text);
            tablerow.appendChild(tabledata);
        }
        // Add row to table
        table.appendChild(tablerow);
    }

    // Rows
    for (var i = ver1; i <= ver2; i ++) {
        tablerow = document.createElement('tr');
        // Columns 
        columnNumber = true;
        for (var j = hor1; j <= hor2; j++) {
            // Add vertical numbering
            if (columnNumber) {
                tabledata = document.createElement('td');
                text = document.createTextNode(i);
                tabledata.appendChild(text);
                tablerow.appendChild(tabledata);
                columnNumber = false;
            }
            tabledata = document.createElement('td');
            text = document.createTextNode(i * j);
            tabledata.appendChild(text);
            tablerow.appendChild(tabledata);
        }
        // Add row to table
        table.appendChild(tablerow);
    }
    // Display whole table
    var appendToDiv = document.getElementById('multiTable');
    appendToDiv.appendChild(table);
//    document.body.appendChild(table);
//    table.className = "tabsClass";
}


// Remove table after submit button is pressed
function removeTable() {
    var tables= document.getElementsByTagName('table');
    for (var i= tables.length; i-->0;) {
        tables[i].parentNode.removeChild(tables[i]);
    }
}
