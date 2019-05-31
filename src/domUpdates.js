import $ from 'jquery';
import Hotel from './Hotel';

const domUpdates = {

  displayDate(date) {
  // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // var longDate = date.toLocaleDateString('en-EN', options);
    $(".main-date").text(date)
  },

  displayAllTodayBookings(bookings) {
    bookings.forEach(booking => {
    $(".main-bookings").append(`<li>Room Number: ${booking}</li>`)
    })
  },
   
  displayPercentOccupied(bookings) {
    $(".main-percent").text((bookings.length/200)*100)
    },

    displayTotalSalesRoomServiceToday(orderTotal) {
      $(".main-sales").text(orderTotal)
    },

    displayAllTodayOrders(orders){
        orders.forEach(order => {
        $(".main-orders").append(`<li>Room Service: ${order.food} $${order.totalCost}</li>`)
        })
    },

    displayNumberAvailableRooms(bookings) {
      $(".main-available-rooms").text(200-bookings.length)
    },

    displayGuestName(guest) {
      $(".guest-name").text(guest.name)
    },

    displayGuestBookings(guest) {
      guest.bookings.forEach(booking => {
      $(".current-guest-bookings").append(`<li>${booking.date} in Room ${booking.roomNumber}</li>`)
      })
    },

    displayErrorMsg() {
      alert('No guest by that name')
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
  //button to search and make enter work
  //input to create a new customer 
  //Update all tabs to include info for that user

  //ROOMS
  //GENERAL
  //Display Most popular booking date
  //Display date with most rooms available

  //ROOMS BY CUSTOMER
//Display summary of all past and current bookings
//Book a room button
//Drop down menu with all available room types
//if not available display room types that are available
//Once booked - Order room service button

// ORDERS
//GENERAL
//Search input for all orders by DATE

//BY CUSTOMER
//breakdown of dates and orders for customer
//total spent by date
//total spent for all days
//error if no orders found




export default domUpdates;