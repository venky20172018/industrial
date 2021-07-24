function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    scrollwheel: 0,
    navigationControl: 0,
    mapTypeControl: false,
    streetViewControl:false,
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
	styles: [{"featureType":"landscape","stylers":[{"color": "#f2f1f0"},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{ "color": "#f2f1f0" }, {"visibility": "on"} ]},{"featureType":"road.arterial","stylers":[{ "color": "#03ff21" }, {"visibility": "on"} ]},{"featureType":"road.local","stylers":[{ "color": "#f9bf3b" },{"visibility":"off"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{ "color": "#f9bf3b" }]},{"featureType":"water","elementType":"geometry","stylers":[{ "color": "#fbbb3e" }, {"visibility": "on"} ]}]

  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
