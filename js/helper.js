/*
 * Helpers
 */

var HTMLheaderName = '<h1 class="text-center">%data%</h1>';
var HTMLbioPic = '<img src="%data%" class="biopic text-center">';
var HTMLlocation = '<p class="text-white"><span class="glyphicon glyphicon-map-marker"></span> %data%</p>';
var HTMLemail = '<li class="flex-item"><a href="%link%" class="black-text">%name%</a></li>';
var HTMLtwitter = '<li class="flex-item"><a href="%link%" class="black-text">%name%</a></li>';
var HTMLgithub = '<li class="flex-item"></span> <a href="%link%" class="black-text">%name%</a></li>';
var HTMLSkillText = '<p>%data%</p>';
var HTMLskills = '<li class="flex-item-black">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h3>%data%<br>';
var HTMLworkTitle = ' <small>%data%</small></h3>';
var HTMLworkLink = '<span class="glyphicon glyphicon-link"></span> <a href="%link%">%name%</a>';
var HTMLworkDates = '<p><span class="glyphicon glyphicon-calendar"></span> %data%</p>';
var HTMLworkLocation = '<p><span class="glyphicon glyphicon-map-marker"></span> %data%</p>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<h3>%data%</h3>';
var HTMLprojectDates = '<p><span class="glyphicon glyphicon-calendar"></span> %data%</p>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectPub = '<p><span class="glyphicon glyphicon-paperclip"></span> %data%</p>';
var HTMLprojectKeywords = '<p><span class="glyphicon glyphicon-pushpin"></span> %data%</p>';
var HTMLprojectLink = '<p><span class="glyphicon glyphicon-link"></span> <a href="%link%">%name%</a></p>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolDegree = '<h3>%data%</h3>';
var HTMLschoolName = '<p><span class="glyphicon glyphicon-home"></span> %data%</p>';
var HTMLschoolDates = '<p><span class="glyphicon glyphicon-calendar"></span> %data%</p>';
var HTMLschoolLocation = '<p><span class="glyphicon glyphicon-map-marker"></span> %data%</p>';
var HTMLschoolDesc = '<p><br>%data%</p>';

var HTMLfooter = '<p class="text-white"><br><small>%data%</small></p>';

/*
 This is the fun part. Here's where we generate the custom Google Map for the website.
 See the documentation below for more details.
 https://developers.google.com/maps/documentation/javascript/reference
 */
var map;

/*
 Start here! initializeMap() is called when page is loaded.
 */
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
     For the map to be displayed, the googleMap var must be
     appended to #mapDiv in resumeBuilder.js.
     */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    /*
     locationFinder() returns an array of every location string from the JSONs
     written for bio, education, and work.
     */
    function locationFinder() {
        var locations = [];
        locations.push(bio.location);
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }
        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }
        return locations;
    }

    /*
     createMapMarker(placeData) reads Google Places search results to create map pins.
     placeData is the object returned from search results containing information
     about a single location.
     */
    function createMapMarker(placeData) {

        var lat = placeData.geometry.location.lat();
        var lon = placeData.geometry.location.lng();
        var name = placeData.formatted_address;
        var bounds = window.mapBounds;

        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });

        bounds.extend(new google.maps.LatLng(lat, lon));
        map.fitBounds(bounds);
        map.setCenter(bounds.getCenter());
    }

    /*
     callback(results, status) makes sure the search returned results for a location.
     If so, it creates a new map marker for that location.
     */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
     pinPoster(locations) takes in the array of locations created by locationFinder()
     and fires off Google place searches for each location
     */
    function pinPoster(locations) {
        var service = new google.maps.places.PlacesService(map);
        for (var place in locations) {
            var request = {
                query: locations[place]
            };
            service.textSearch(request, callback);
        }
    }

    window.mapBounds = new google.maps.LatLngBounds();
    locations = locationFinder();
    pinPoster(locations);

}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function (e) {
});

