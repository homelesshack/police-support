// The following code is just to get the app started - landing page
$('.statutory').click(function() {
  $('.landing').hide();
  $('.withStatutory').show();
});

$('.nonStatutory').click(function() {
  $('.landing').hide();
  $('.withoutStatutory').show();
});


// The following code relates to the information about those under 18
$('.under18').click(function() {
  $('.withStatutory').hide();
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

// The following code relates to the information about those over 65
$('.over65').click(function() {
  $('.withStatutory').hide();
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

// The following code relates to care leavers
$('.careLeaver').click(function() {
  $('.withStatutory').hide();
  $('.careLeaverAll').show();
});

$('.weekdayCareLeaver').click(function() {
  $('.careLeaverAll').hide();
  $('.careLeaverHours').show();
});

$('.nonWeekdayCareLeaver').click(function() {
  $('.careLeaverAll').hide();
  $('.careLeaverOutsideHours').show();
});

// The following code relates to care leavers
$('.hasDependant').click(function() {
  $('.withStatutory').hide();
  $('.dependantAll').show();
});

$('.weekdayDependant').click(function() {
  $('.dependantAll').hide();
  $('.dependantHours').show();
});

$('.nonWeekdayDependant').click(function() {
  $('.dependantAll').hide();
  $('.dependantOutsideHours').show();
});

// The following code relates to those without statutory rights to help
$('.notStatutory').click(function() {
  $('.landing').hide();
  $('.outsideSocialServices').show();
});

$('.hasConnection').click(function() {
  $('.outsideSocialServices').hide();
  $('.withConnection').show();
});

$('.hasNoConnection').click(function() {
  $('.outsideSocialServices').hide();
  $('.withoutConnection').show();
});

// The following code relates to those with a connection and a priority need
$('.hasPriorityNeed').click(function() {
  $('.withConnection').hide();
  $('.priorityNeed').show();
});

$('.weekdayPriorityNeed').click(function() {
  $('.priorityNeed').hide();
  $('.priorityNeedHours').show();
});

$('.nonWeekdayPriorityNeed').click(function() {
  $('.priorityNeed').hide();
  $('.priorityNeedOutsideHours').show();
});
