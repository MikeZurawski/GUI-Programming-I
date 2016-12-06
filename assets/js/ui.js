//File: ui.js
//4610 Assignment 8: Using the jQuery UI Slider and Tab Widgets
//Michael Zurawski, UMass Lowell Computer Science, michael_zurawski@student.uml.edu
//updated by Mike on November 20, at 6:00 PM
//Purpose: Hanldes jQuery ui interface
//Sources: 
//http://www.jquerycodesnippets.com/2013/01/add-jquery-tabs-dynamically.html  
// http://stackoverflow.com/questions/22258183/jquery-ui-slider-and-textbox-value-2-way-update
// http://stackoverflow.com/questions/36297428/scrollable-tab-list-with-jquery-ui
// Create sliders
$().ready(function() {
    $(".amount-slider").slider({
        min: 0,
        max: 30,
        step: 1,
        value: 0,
        animate: true,
        slide: function (event, ui) {
            $(this).next(".form-control").val(ui.value);
        },
        create: function (event, ui) {
            $(this).next(".form-control").val(0);
        }
    });
    
    $(".amount-value").on('change', function() {
        $(this).prev('.amount-slider').slider('value', this.value );
    });
});

// Found this website very helpful for figuring out how tabs worked: http://www.jquerycodesnippets.com/2013/01/add-jquery-tabs-dynamically.html  
$(function() { 
    // Initialize tabs
    $("#divTabs").tabs(); 
}); 
// Keep track of our tabs
var tabCounter = 0; 

function addNewTab(newTabName) { 
    tabCounter++; 
    var divTabs = $("#divTabs"); 
    var contentDivId = "divTab" + tabCounter; 
    var tabTitle = "<li><a href='#" + contentDivId + "'>" + newTabName + "</a>" +
    "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>";

    // Add the new LI element for the tab, and point it to the content's id.  
    $("#divTabs ul").append(tabTitle);
    
    // Add the content that the new tab points to.  
    divTabs.append('<div id="divTab' + tabCounter + '">' + $("#multiTable").html() + '</div>');
    
    // Refresh tabs
    divTabs.tabs("refresh");

    // Make the new tab the "active" one.
    divTabs.tabs({ active: (tabCounter - 1) }); 
    
    // Removing tabs, found this source helpful http://stackoverflow.com/questions/36297428/scrollable-tab-list-with-jquery-ui
    divTabs.delegate( "span.ui-icon-close", "click", function() {
        var panelID = $( this ).closest( "li" ).remove().attr( "aria-controls" );
        $( "#" + panelID ).remove();
        divTabs.tabs("refresh");
    });
}
