// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import fetch from 'cross-fetch';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/overlook-grand.jpg'

import domUpdates from './domUpdates';
import Hotel from './Hotel';
import Guest from './Guest';

let hotel;
let currentGuest;


$(document).ready(function() {
let userData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(dataFile => dataFile.json())
  .then(dataFile => userData = dataFile.users);

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


function timer() {
  // console.log("booking data: ", bookingsData)
  hotel = new Hotel(today, userData, bookingsData, roomServicesData)
  domUpdates.displayAllTodayBookings(hotel.todayBookings)
  domUpdates.displayPercentOccupied(hotel.todayBookings)
  domUpdates.displayAllTodayOrders(hotel.todayOrders)
  domUpdates.displayTotalSalesRoomServiceToday(hotel.todayOrderSalesTotal)
  domUpdates.displayNumberAvailableRooms(hotel.todayBookings)
  
  
  $(".guest-search-form").on('submit', function(e) {
    e.preventDefault()
    let inputValue = $(".guest-search-input").val()
    let obj = hotel.findCurrentGuestByName(inputValue)
    if(!obj) {
      domUpdates.displayErrorMsg()
    } else {
    currentGuest = new Guest(obj, bookingsData, roomServicesData)
    console.log(currentGuest)
    domUpdates.displayGuestName(currentGuest)
    domUpdates.displayGuestBookings(currentGuest)
    }
    $(".guest-search-input").val('')
  })
}


setTimeout(timer, 500);

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
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
  })
  domUpdates.displayDate(today)


 
})