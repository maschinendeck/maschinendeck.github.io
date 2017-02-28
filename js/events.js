$(function() {

  // invoke via proxy: https://wiki.maschinendeck.org/wiki/Special:Ask/-5B-5BDate::%2B-5D-5D/-3FIs-20instance-20of%3Dsummary/-3FDate%3Dstart/-3FLocation%3Dlocation/format%3Djson/limit%3D5000/searchlabel%3DJSON-20Export/offset%3D0

  var decodeEventItem = function(data) {
    var event = {};

    if (data.printouts.summary[0]) {
      event.title = data.printouts.summary[0].fulltext;
      event.url = data.printouts.summary[0].fullurl;
    } else {
      event.title = data.fulltext;
      event.url = data.fullurl;
    }

    if (data.printouts.start) {
      event.start = moment.unix(data.printouts.start[0].timestamp - 3600);
    }

    if (data.printouts.location[0]) {
      event.location = data.printouts.location[0].fulltext;
      event.locationUrl = data.printouts.location[0].fullurl;
    }

    return event;
  };

  $.ajax({
    method: "GET",
    url: "https://wiki.maschinendeck.org/kalender-json.php"
  }).then(function(data) {

    var upcomingEventsDiv = $(".upcoming-events");
    var previousEventsDiv = $(".previous-events");
		var approxNow = moment().unix() + 3600 * 5;

    previousEventsDiv.empty();
    upcomingEventsDiv.empty();

    var isPrevious = function(e) { return (e.start / 1000) < approxNow; };
    var isUpcoming = function(e) { return !isPrevious(e) };

    var events = $.map(data.results, decodeEventItem);
    var previousEvents = events.filter(isPrevious).sort(function(a, b) { return b.start - a.start; });
    var upcomingEvents = events.filter(isUpcoming).sort(function(a, b) { return a.start - b.start; }).slice(0, 10);

    $.each(previousEvents, function(idx, ev) {
      var el = $(
        '<div>' + ev.start.format("YYYY-MM-DD") + ' ab ' + ev.start.format("HH:mm") + ' <a href="' + ev.url + '" class="title">' + ev.title + '</a> @ <a href="' + ev.locationUrl + '" class="location">' + ev.location + '</a></div>'
      );
			previousEventsDiv.append(el);
    });

    $.each(upcomingEvents, function(idx, ev) {
      var el = $(
        '<div>' + ev.start.format("YYYY-MM-DD") + ' ab ' + ev.start.format("HH:mm") + ' <a href="' + ev.url + '" class="title">' + ev.title + '</a> @ <a href="' + ev.locationUrl + '" class="location">' + ev.location + '</a></div>'
      );
			upcomingEventsDiv.append(el);
    });

  });

});
