import $ from 'jquery';
import Hotel from './Hotel';

const domUpdates = {

  displayDate(date) {
  // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // var longDate = date.toLocaleDateString('en-EN', options);
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

    displayGuestName(guest) {
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
      $(".new-booking").append("<div class='room-filter'><h3>Please select a room type</h3><button class='r-suite'>Residential Suite</button><button class='j-suite'>Junior Suite</button><button class='suite'>Suite</button><button class='single'>Single</button><div class='room-list-container'><div class='room-list'></ul></div></div>")
    },

    displayRooms(info) {
      info.forEach(room => {
      $(".room-list").append(`<p>Type: ${room.roomType.toUpperCase()} Room Number: ${room.number} Beds: ${room.numBeds} Bed size: ${room.bedSize.toUpperCase()} Bidet: ${room.bidet} <button type='button' class='booking-button' id='${room.number}'>Book</button></p>`) 
    })
  }

   };
  

  //MAIN
  //Display today's date - DONE
  //Display today's bookings - DONE
  //Display today's percentage occupied - DONE
  //Display today's room service orders - DONE
 //Display today's room's avaiable (#?)

  //CUSTOMER

  //Display customer name once selected - DONE
  //Search input for customer by name - DONE
  //button to search and make enter work - DONE
  //input to create a new customer - DONE
  //Update all tabs to include info for that user - DONE

  //ROOMS
  //GENERAL
  //Display Most popular booking date - DONE
  //Display date with most rooms available - DONE

  //ROOMS BY CUSTOMER
//Display summary of all past and current bookings -DONE
//Book a room button - DONE
//Drop down menu with all available room types - DONE
//if not available display room types that are available
//Once booked - Order room service button

// ORDERS
//GENERAL
//Search input for all orders by DATE - DONE

//BY CUSTOMER
//breakdown of dates and orders for customer - DONE
//total spent by date - ??
//total spent for all days- DONE
//error if no orders found - DONE




export default domUpdates;