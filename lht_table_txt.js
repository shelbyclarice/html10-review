"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: shelbyclarice
   Date:   08/08/2024

	
*/

/* Set the date displayed in the calendar */
var thisDay = new Date();

/*Write the calendar to the element with the id "eventList" */
document.getElementById("eventList").innerHTML = createTable(thisDay);

/* Function to generate the table */
function createTable(calDate) {
   var tableHTML = "<table id='eventTable'>";
      tableHTML += calCaption(calDate);
      tableHTML += calWeekdayRow();
      tableHTML += calDays(calDate);
      tableHTML += "</table>";
      return tableHTML;
}

