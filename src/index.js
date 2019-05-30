// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/overlook-grand.jpg'

import domUpdates from './domUpdates';

let userData;

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(dataFile => dataFile.json())
  .then(dataFile => userData = dataFile.users);

function timer() {
    console.log(userData);
}

setTimeout(timer, 1000);

let roomsData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
    .then(dataFile => dataFile.json())
    .then(dataFile => roomsData = dataFile.rooms);

let bookingsData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
    .then(dataFile => dataFile.json())
    .then(dataFile => bookingsData = dataFile.bookings);

let roomServicesData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
    .then(dataFile => dataFile.json())
    .then(dataFile => roomServicesData = dataFile.roomServices);

console.log("user data: ", userData)


let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();
if(dd<10) 
{
    dd=`0${dd}`;
} 
if(mm<10) 
{
    mm=`0${mm}`;
} 
today = `${dd}/${mm}/${yyyy}`;
console.log(today);

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
  })
  
  domUpdates.displayDate(today)

})