// The following code is just to get the app started - landing page
$('.start').click(function() {
  $('.homeless').hide();
  $('.age').show();
});

// The following code relates to the information about those under 18
$('.under18').click(function() {
  $('.age').hide();
  $('.youngPerson').show();
});

$('.weekday').click(function() {
  $('.youngPerson').hide();
  $('.officeHours').show();
});

$('.nonWeekday').click(function() {
  $('.youngPerson').hide();
  $('.outsideHours').show();
});

//  The following code relates to those aged 18 to 21
$('.eighteen21').click(function() {
  $('.age').hide();
  $('.newHorizon').show();
});

$('.newHorizonHours').click(function() {
  $('.newHorizon').hide();
  $('.newHorizonOpen').show();
});

// The following code relates to the information about those over 65
$('.over65').click(function() {
  $('.age').hide();
  $('.olderPerson').show();
});

$('.weekdayOlder').click(function() {
  $('.olderPerson').hide();
  $('.officeHoursOlder').show();
});

$('.nonWeekdayOlder').click(function() {
  $('.olderPerson').hide();
  $('.outsideHoursOlder').show();
});
