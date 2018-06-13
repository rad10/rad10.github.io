var mapTag = document.getElementById("map_map");
var map = new google.maps.Map(mapTag, {center:{lat: 51.0622412, lng: 4.7905909}, zoom:6, mapTypeId: "terrain"});
var geocoder = new google.maps.Geocoder();
function id2coord(placeId){
	geocoder.geocode( { 'placeId': placeId}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			//console.log(results[0].geometry.location);
			var latr = results[0].geometry.location.lat();
			var lngr = results[0].geometry.location.lng();
			console.log({lat: latr, lng: lngr});
			return {lat: latr, lng: lngr};
		} else {
			alert("Geocode was not successful for the following reason: " + status);
			return;
		}
	});
}

var markers = {
	cologne: {
		marker: new google.maps.Marker({
			position: {lat: 50.937531, lng: 6.960278600000038}, //via id
			map: map,
			label: "Cologne",
			visible: false
		}),
		address:"Cologne, Germany"
	},
	frankfurt: {
		marker: new google.maps.Marker({
			position: {lat: 50.1109221, lng: 8.682126700000026}, //via id
			map: map,
			label: "Frankfurt",
			visible: false
		}),
		address:"Frankfurt, Germany"
	},
	munich: {
		marker: new google.maps.Marker({
			position: {lat: 48.1351253, lng: 11.581980499999986}, //via id
			map: map,
			label: "Munich",
			visible: false
		}),
		address:"Munich, Germany"
	},
	berlin: {
		marker: new google.maps.Marker({
			position: {lat: 52.52000659999999, lng: 13.404953999999975}, //via id
			map: map,
			label: "Berlin",
			visible: false
		}),
		address:"Berlin, Germany"
	},
	hamburg: {
		marker: new google.maps.Marker({
			position: {lat: 53.5510846, lng: 9.993681899999956}, //via id
			map: map,
			label: "Hamburg",
			visible: false
		}),
		address:"Hamburg, Germany"
	},
	//cologne
	wohngem: {
		marker: new google.maps.Marker({
			position: {lat: 50.935268, lng: 6.934838000000013}, //via id
			map: map,
			label: "Die Wohngemeinschaft Hostel",
			visible: false
		}),
		address:"Richard-Wagner-Straße 39, 50674 Köln, Germany"
	},
	cathedral: {
		marker: new google.maps.Marker({
			position: {lat: 50.9412527, lng: 6.958137299999976}, //via id
			map: map,
			label: "Koln Cathedral",
			visible: false
		}),
		address:"Cologne Cathedral, 50667 Köln, Germany"
	},
	chbf: {
		marker: new google.maps.Marker({
			position: {lat: 50.94320829999999, lng: 6.958657300000027},
			map: map,
			label: "Koln Hbf",
			visible: false
		}),
		address:"Cologne Central Station, Trankgasse, Cologne, Germany"
	},
	//frankfurt
	willyHotel:{
		marker: new google.maps.Marker({
			position:{lat: 50.1097966, lng: 8.674521499999969}, //via id
			map: map,
			label: "Willy Hotel",
			visible: false
		}),
		address:"Neue Mainzer Str. 24, 60311 Frankfurt am Main, Germany"
	},
	mespelbrunn:{
		marker: new google.maps.Marker({
			position: {lat: 49.9053228, lng: 9.307507499999929}, //via id
			map: map,
			label: "Mespelbrunn Castle",
			visible: false
		}),
		address:"Mespelbrunn Castle, Schloßallee, 63875 Mespelbrunn, Germany"
	},
	fhbf:{
		marker: new google.maps.Marker({
			position:{lat: 50.10652899999999, lng: 8.662161800000035}, //via id
			map: map,
			label: "Frankfurt Hbf",
			visible: false
		}),
		address:"60239, Am Hauptbahnhof, 60329 Frankfurt am Main, Germany"
	},
	//munich
	amSendlingerTor:{
		marker: new google.maps.Marker({
			position:{lat: 48.1334068, lng: 11.568651799999998}, //via id
			map: map,
			label: "Am Sendlinger Tor",
			visible: false
		}),
		address:"Oberanger 47, 80331 München, Germany"
	},
	bikeTour:{
		marker: new google.maps.Marker({
			position:{lat: 48.1443383, lng: 11.554823599999963}, //via id
			map: map,
			label: "The Bike Tour",
			visible: false
		}),
		address:"80335 Munich, Germany"
	},
	mhbf:{
		marker: new google.maps.Marker({
			position:{lat: 48.1412956, lng: 11.559116399999994}, //via id
			map: map,
			label: "Munich Hbf",
			visible: false
		}),
		address:"Arnulfstraße 15, 80335 München, Germany"
	},
	//berlin
	citystayMitte:{
		marker: new google.maps.Marker({
			position:{lat: 52.5212336, lng: 13.405546100000038}, //via id
			map: map,
			label: "Citystay Mitte",
			visible: false
		}),
		address:"Rosenstr. 16, 10178 Berlin, Germany"
	},
	berlinWall:{
		marker: new google.maps.Marker({
			position:{lat: 52.53505209999999, lng: 13.39018980000003}, //via id
			map: map,
			label: "Berlin Wall Memorial",
			visible: false
		}),
		address:"Bernauer Str. 111, 13355 Berlin, Germany"
	},
	bhbf:{
		marker: new google.maps.Marker({
			position:{lat: 52.5250839, lng: 13.369402000000036},
			map: map,
			label: "Berlin Hbf",
			visible: false
		}),
		address:"Hauptbahnhof, Europaplatz 1, 10557 Berlin, Germany"
	},
	//hamburg
	apartmentHotel:{
		marker: new google.maps.Marker({
			position:{lat: 53.548204, lng: 10.051069999999982},
			map: map,
			label: "Apartment-Hotel Hamburg Mitte",
			visible: false
		}),
		address:"Borstelmannsweg 133, 20537 Hamburg, Germany"
	},
	imperialTheater:{
		marker: new google.maps.Marker({
			position:{lat: 53.55031100000001, lng: 9.967372999999952},
			map: map,
			label: "Imperial Theater",
			visible: false
		}),
		address:"Reeperbahn 5, 20359 Hamburg, Germany"
	},
	hhbf:{
		marker: new google.maps.Marker({
			position:{lat: 53.5528124, lng: 10.006979199999932},
			map: map,
			label: "Hamburg Hbf",
			visible: false
		}),
		address:"20099 Hamburg, Germany"
	}
};
var maps = {
	germany: {
		init:{
		center:{lat: 50.96847796651509, lng: 10.064028399999984},
		zoom:6,
		mapTypeId: "roadmap"
		},
		markers:["cologne","frankfurt","munich","berlin","hamburg"]
	},
	cologne: {
		init:{
		zoom:13,
		center: {lat: 50.943421590332576, lng: 6.955793868957926},
		mapTypeId: "roadmap"
		},
		markers:["wohngem","cathedral","chbf"]
	},
	frankfurt:{
		init:{
		zoom:9,
		center: {lat: 50.09237923090133, lng: 8.8108013582073},
		mapTypeId: "roadmap"
		},
		markers:["willyHotel","mespelbrunn","fhbf"]
	},
	munich:{
		init:{
		zoom:14,
		center: {lat: 48.14067105619159, lng: 11.565732172394519},
		mapTypeId: "roadmap"
		},
		markers:["amSendlingerTor","bikeTour","mhbf"]
	},
	berlin:{
		init:{
		zoom:13,
		center: {lat: 52.52712681426124, lng: 13.3923105187896},
		mapTypeId: "roadmap"
		},
		markers:["citystayMitte","berlinWall","bhbf"]
	},
	hamburg:{
		init:{
		zoom:12,
		center: {lat: 53.553799978694144, lng: 10.010551891761452},
		mapTypeId: "roadmap"
		},
		markers:["apartmentHotel","imperialTheater","hhbf"]
	}
};


function setMarkers(mapper){
	var marks = maps[mapper]["markers"];
	for (var i = 0; i < marks.length; i++){
		markers[marks[i]].marker.setVisible(true);
		markers[marks[i]].marker.setMap(map);
		//console.log(markers[marks[i]].marker);
	}
}
function wipeMarkers() {
	for (var i in markers) {
		markers[i].marker.setVisible(false);
	}
}
// ENGINE
function setMap(mapper){
	wipeMarkers();
	map = new google.maps.Map(mapTag, maps[mapper].init);
	setMarkers(mapper);
}


function init(){
	setMap('germany');
}
init();
