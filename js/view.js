var container = document.querySelector('.header-information');
var error     = document.querySelector('.error');
var name      = document.querySelector('.header-information.city-name');
var weather   = document.querySelector('.weather');
var temp      = document.querySelector('.temp');
var press     = document.querySelector('.pressure');
var humudity  = document.querySelector('.humidity');
var wind      = document.querySelector('.wind');
var cloud     = document.querySelector('.cloud');
var coords    = document.querySelector('.coord');
var image     = document.querySelector('.image');

function changeInfo(out) {
    name.innerHTML     = out.name;
    weather.innerHTML  = out.weather[0].main;
    temp.innerHTML     = Math.round(out.main.temp - 273.15);
    press.innerHTML    = out.main.pressure;
    humudity.innerHTML = out.main.humidity;
    wind.innerHTML     = out.wind.speed;
    cloud.innerHTML    = out.clouds.all;
    desc.innerHTML     = '(' + out.weather[0].description + ')';
    coords.innerHTML   = '(' + out.coord.lon + '; ' + out.coord.lat + ')';
    image.src          = 'http://openweathermap.org/img/w/' + out.weather[0].icon + '.png';
}
