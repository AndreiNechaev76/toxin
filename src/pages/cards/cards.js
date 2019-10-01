import './dependencies.js';
$( document ).ready(function(jQery) {

  const reservationIn = $( '.card_reservation' ).find('.date-picker').eq(0).find('.input').data('datepicker');
  reservationIn.selectDate(new Date(2019, 7, 19));
  const reservationOut = $( '.card_reservation' ).find('.date-picker').eq(1).find('.input').data('datepicker');
  reservationOut.selectDate(new Date(2019, 7, 23));

  const reservationGuests = $( '.card_reservation' ).find('.dropdown_type_guests').data('dropdown');
  reservationGuests.set([2, 1]);

  const calendar = $( '.calendar' ).data('datepicker');
  calendar.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
});