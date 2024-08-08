"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: shelbyclarice
   Date:   08/08/2024

	
*/

// Declare a variable thisDay with the date August 30, 2018
let thisDay = new Date('August 30, 2018');

// Create a variable named tableHTML with the initial table structure
let tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// Declare a variable named endDate that is 14 days after thisDay
let endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// Loop through the eventDates array
for (let i = 0; i < eventDates.length; i++) {

    // Create a Date object for the current event date
    let eventDate = new Date(eventDates[i]);

    // Store the event date as a string
    let eventDay = eventDate.toDateString();

    // Store the event time as a string
    let eventTime = eventDate.toLocaleTimeString();

    // Check if the event is within the 14-day window
    if (thisDay <= eventDate && eventDate <= endDate) {
        // Add the event details to the tableHTML variable
        tableHTML += `<tr>
                        <td>${eventDay} @ ${eventTime}</td>
                        <td>${eventDescriptions[i]}</td>
                        <td>${eventPrices[i]}</td>
                      </tr>`;
    }
}

// Close the table HTML structure
tableHTML += "</table>";

// Insert the tableHTML into the div element with the ID eventList
document.getElementById('eventList').innerHTML = tableHTML;


