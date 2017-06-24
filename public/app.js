$('.start').click(function() {
  $('.homeless').hide();
  $('.age').show();
});

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
