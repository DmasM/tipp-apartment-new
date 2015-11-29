
///<reference path="../../bower_components/jquery/dist/jquery.min.js"/>
///<reference path="owl.carousel/owl-carousel/owl.carousel.js"/>

/**************GOOGLE MAPS**************/
/*jshint strict: true */
function initMap(){
	'use strict';
	var map;
	var position = { lat: 39.971461, lng: -84.1854339};
	map = new google.maps.Map(document.getElementById('gmap'), {
		center: position,
		zoom: 14
	});
	var marker = new google.maps.Marker({
		position: position,
		map: map
	});
}
