import $ from 'jquery';

const domUpdates = {

  displayDate(date) {
    $(".main-date").text(date)
  }

  // displayNames(user1, user2) {
  //   $('.name-player-one').html(user1);
  //   $('.name-player-two').html(user2);
  // },

  //MAIN
  //Display today's date
  //Display today's bookings
  //Display today's percentage occupied
  //Display today's room's avaiable (#?)
  //Display today's room service orders


  //CUSTOMER

  //Display customer name once selected
  //Search input for customer by name
  //button to search and make enter work
  //Update all tabs to include info for that user

  //ROOMS
  //GENERAL
  //Display Most popular booking date
  //Display date with most rooms available

  //BY CUSTOMER
//Display summary of all past and current bookings
//Book a room button
//Drop down menu with all available room types
//if not available display room types that are available
//Once booked - Order room service button

// ORDERS
//GENERAL
//All Orders for Room Service today
//Search input for all orders by DATE

//BY CUSTOMER
//breakdown of dates and orders for customer
//total spent by date
//total spent for all days
//error if no orders found

}


export default domUpdates;