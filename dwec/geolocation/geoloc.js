var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "usuario rechaza el permiso geolocalizar" 
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "la informacion de la posicion es inlegible"
            break;
        case error.TIMEOUT:
            x.innerHTML = "el permiso para geolocalizacion expiro"
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "error desconocido"
            break;
    }
}
getLocation();