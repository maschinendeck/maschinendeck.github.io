
//Call this function to update the space
function updateSpaceState(spaceStateElement) {

	$.ajax({
	      dataType: "jsonp",
	      jsonp: "callback",
	      url: "http://state.maschinendeck.org/spaceapi.php",
	      success: function(response){
	        var statusText = "Status: " + (response.state.open ? "Offen" : "Geschlossen");
	        var statusField = $("#space_open_status");
	        spaceStateElement.text(statusText);
	        if (response.state.open) {
	          spaceStateElement.css({color: "green"});
	        } else {
	        	spaceStateElement.css({});
	        }

	      }
	 });

}
