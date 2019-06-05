import $ from 'jquery';
import Hotel from './Hotel';

const domUpdates = {

  displayDate(date) {
    $(".main-date").text(date)
  },

  displayAllTodayBookings(bookings) {
    if(bookings.length > 0) {
    bookings.forEach(booking => {
    $(".main-bookings").append(`<li>Room Number: ${booking}</li>`)
    })
      } else {
    $(".main-bookings").append(`<li>THERE ARE NO BOOKING FOR TODAY</li>`) 
      }
    },
   
  displayPercentOccupied(bookings) {
    $(".main-percent").text((bookings.length/200)*100)
    },

  displayAmountTotalSales(sales) {
      $(".main-sales").text(sales)
    },

  displayTotalSalesRoomServiceToday(orderTotal) {
      $(".main-order-sales").text(orderTotal)
    },

  displayAllTodayOrders(orders){
      orders.forEach(order => {
      $(".main-orders").append(`<li>Room Service: ${order.food} $${order.totalCost}</li>`)
      })
    },

    displayNumberAvailableRooms(bookings) {
      $(".main-available-rooms").text(200-bookings.length)
    },

    displayMostBookedDate(num) {
      $('.most-booked').text(num)
    },

    displayLeastBookedDate(num) {
      $('.least-booked').text(num)
    },

    displayCurrentGuestOnAllPages(guest) {
      $(".customer-orders-container").prepend("<h3 class='current-guess'>Current Guest: <span class='guest-name'></span></h3>")
      $(".customer-bookings-container").prepend("<h3 class='current-guess'>Current Guest: <span class='guest-name'></span></h3>")
      $(".guest-name").text(guest.name.toUpperCase())
    },

    displayGuestBookingsHeader(guest) {
      $(".current-guest-bookings").append(`<li class="list-header"> Bookings for ${guest.name}:</li>`)
    },

    displayGuestBookings(guest) {
      guest.bookings.forEach(booking => {
      $(".current-guest-bookings").append(`<li>${booking.date} in Room ${booking.roomNumber}</li>`)
      })
    },
    
    displayGuestBookingsError() { 
      $(".current-guest-bookings").append(`<li class="booking-error">This customer has no current bookings</li>`)
    },

    displayErrorMsg() {
      $(".guest-name").text('No guest by that name')
    },

    displayGuestOrdersHeader(guest) {
      $(".current-guest-orders").append(`<li class="list-header"> Room Service Orders For ${guest.name}:</li>`)
    },

    displayGuestOrders(guest) {
      guest.orders.forEach(order => {
      $(".current-guest-orders").append(`<li>${order.date} ${order.food} ${order.totalCost}</li>`)
      })
    },

    displayGuestOrdersError() {
      $(".current-guest-orders").append(`<li class="order-error">This customer has no current orders</li>`)
    },

    displayGuestOrdersTotal(guest) {
      $(".current-guest-orders").append(`<li class="order-total">Total for Guest: $ ${guest.ordersTotalCost}</li>`)
    },

    displayOrdersByDateHeader(info) {
      $(".date-orders").append(`<li class="list-header">Room Service Orders for ${info}:</li>`)
    },

    displayOrdersByDate(info) {
      info.forEach(order => {
        $(".date-orders").append(`<li>Room Service: ${order.food} $${order.totalCost}</li>`)
        })
    },

    displayNoBookingsMsg() {
      $(".main-bookings").append("<li>NO BOOKINGS TODAY</li>")
    },

    displayNoOrdersMsg() {
      $(".main-orders").append("<li>NO ORDERS TODAY</li>")
    },

    addBookingForm() {
      $(".new-booking").append("<button class='make-booking' type='button'>MAKE NEW BOOKING</button>")
    },

    displayBookingMenu(){
      $(".new-booking").append("<div class='room-filter'><button class='r-suite'>Res. Suite</button><button class='j-suite'>Junior Suite</button><button class='suite'>Suite</button><button class='single'>Single</button><div class='room-list-container'><div class='room-list'></ul></div></div>")
    },

    displayRooms(info) {
      info.forEach(room => {
      $(".room-list").append(`<div class ="room-div">Type: ${room.roomType.toUpperCase()} Room Number: ${room.number} Beds: ${room.numBeds} Bed size: ${room.bedSize.toUpperCase()} Bidet: ${room.bidet} <button type='button' class='booking-button' id='${room.number}'>Book</button></div>`) 
    })
  },

  displayRoomsMain(info) {
    info.forEach(room => {
    $(".search-rooms-by-date").append(`<div class ="room-div">Type: ${room.roomType.toUpperCase()} Room Number: ${room.number} Beds: ${room.numBeds} Bed size: ${room.bedSize.toUpperCase()} Bidet: ${room.bidet}</div>`) 
  })
},

  displayRoomServiceOrderMenu() {
    $(".rooms").append("<div class='dropdown'><button class='dropbtn'>ROOM SERVICE</button><div class='dropdown-content'><h4 class='bloody-mary'>Bloody Mary $4.99</h4><h4 class='sandwich'>Sandwich $10.99</h4></div></div>")
  }

};


export default domUpdates;