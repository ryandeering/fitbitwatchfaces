

import clock from "clock";
import document from "document";

import { preferences } from "user-settings";

import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
let timeLabel = document.getElementById("timeLabel");
let timeLabel2 = document.getElementById("timeLabel2");
const myMonth = document.getElementById("myMonth");
const myDay = document.getElementById("myDay");

// Update the <text> element with the current time
function updateClock() {

  let today = new Date();
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes())
  let monthnum = today.getMonth();
  let day = today.getDate();
 
  
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";  
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  
  let monthname = month[monthnum];
  
  
  
  
  
  
  
  if (preferences.clockDisplay == "12h"){
    if (hours > 12){
      hours -= 12;
    }else if (hours == 0){
      hours += 12;
    }
  }

  timeLabel.text = `${hours}:${mins}`;
  timeLabel2.text = `${hours}:${mins}`;
  myMonth.text = `${monthname}`;
  myDay.text = `${day}`; 
}

// Update the clock every tick event
clock.ontick = () => updateClock();
