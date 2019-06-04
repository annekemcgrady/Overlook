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
  hotel = new Hotel(today, userData, bookingsData, roomServicesData, roomsData);
  domUpdates.displayAmountTotalSales(hotel.totalSales)
  domUpdates.displayTotalSalesRoomServiceToday(hotel.todayOrderSalesTotal);
  domUpdates.displayPercentOccupied(hotel.todayBookings);
  if(hotel.todayBookings.length) {
  domUpdates.displayAllTodayBookings(hotel.todayBookings);
  } else { domUpdates.displayNoBookingsMsg()};
  if(hotel.todayOrders.length) {
  domUpdates.displayAllTodayOrders(hotel.todayOrders);
  } else { domUpdates.displayNoOrdersMsg()};
  domUpdates.displayNumberAvailableRooms(hotel.todayBookings);
  domUpdates.displayMostBookedDate(hotel.mostBooked);
  domUpdates.displayLeastBookedDate(hotel.leastBooked);

  
  $(".guest-search-form").on('submit', function(e) {
    e.preventDefault();
    let inputValue = $(".guest-search-input").val();
    let obj = hotel.findCurrentGuestByName(inputValue);
    if(!obj) {
      domUpdates.displayErrorMsg();
    } else {
    currentGuest = new Guest(obj, bookingsData, roomServicesData);
    console.log(currentGuest)
    $(".rooms-main-content").hide();
    $(".orders-main-content").hide();
    $(".current-guest-bookings").html('');
    $(".current-guest-orders").html('');
    domUpdates.displayGuestName(currentGuest);
    if (currentGuest.bookings.length) {
    domUpdates.displayGuestBookingsHeader(currentGuest);
    domUpdates.displayGuestBookings(currentGuest);
    } else { 
      domUpdates.displayGuestBookingsError(); 
    }
    if(currentGuest.orders.length) {
    $(".date-orders").empty()
    domUpdates.displayGuestOrdersHeader(currentGuest);
    domUpdates.displayGuestOrders(currentGuest);
    domUpdates.displayGuestOrdersTotal(currentGuest);
    } else { domUpdates.displayGuestOrdersError();}
    }
    $(".guest-search-input").val('');
  })

  $(".guest-search-form").on('submit', function(e) {
    e.preventDefault();
    let hasBooking = currentGuest.checkBookingByDate(today.toString());
     if(hasBooking === false) { 
       domUpdates.addBookingForm();
    };
  })

  $(".guest-create-form").on('submit', function(e) {
    e.preventDefault()
    let inputValue = $(".guest-create-input").val();
    let newObj = {id: 0, name: inputValue}
    currentGuest = new Guest(newObj, bookingsData, roomServicesData);
    console.log(currentGuest)
    $(".current-guest-bookings").html('');
    $(".current-guest-orders").html('');
    $(".rooms-main-content").hide();
    $(".orders-main-content").hide();
    domUpdates.displayGuestName(currentGuest);
    $(".guest-create-input").val('');
    domUpdates.displayGuestBookingsError();
    domUpdates.addBookingForm();
    domUpdates.displayGuestOrdersError();
  })

  $(".order-search-form").on('submit', function(e) {
    e.preventDefault()
    let inputValue = $(".order-search-input").val();
    let orders = hotel.ordersByDate(inputValue);
    console.log(orders)
    domUpdates.displayOrdersByDateHeader(inputValue);
    domUpdates.displayOrdersByDate(orders);
    $(".order-search-input").val('');
  })

  $(".rooms").on('click', function(e) {
    if(e.target.className === 'make-booking') {
    e.preventDefault()
    domUpdates.displayBookingMenu() 
  }
  })

  $(".rooms").on('click', function(e) {
  if(e.target.className === 'r-suite') {
  e.preventDefault()
  let info = hotel.filterAvailableRoomByType(today,"residential suite")
  $(".room-list").empty()
  domUpdates.displayRooms(info)
  }
})

$(".rooms").on('click', function(e) {
  if(e.target.className === 'j-suite') {
  e.preventDefault()
  let info = hotel.filterAvailableRoomByType(today,"junior suite")
  $(".room-list").empty()
  domUpdates.displayRooms(info)
  }
})

$(".rooms").on('click', function(e) {
  if(e.target.className === 'suite') {
  e.preventDefault()
  let info = hotel.filterAvailableRoomByType(today,"suite")
  $(".room-list").empty()
  domUpdates.displayRooms(info)
  }
})

$(".rooms").on('click', function(e) {
  if(e.target.className === 'single') {
  e.preventDefault()
  let info = hotel.filterAvailableRoomByType(today,"single room")
  $(".room-list").empty()
  domUpdates.displayRooms(info)
  }
})

$(".rooms").on('click', function(e) {
  if(e.target.className ==='booking-button') {
  e.preventDefault()
  let room = parseInt(e.target.closest('button').id)
  currentGuest.makeBooking(currentGuest.id, today, room)
  console.log(room)
  $(".current-guest-bookings").empty()
  domUpdates.displayGuestBookingsHeader(currentGuest)
  domUpdates.displayGuestBookings(currentGuest)
  $('.room-filter').empty()
  }
})

};

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

  $('.reset-button').click(function() {
    location.reload (true);
  });

})