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
