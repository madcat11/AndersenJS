var button = document.querySelector('button.button');
var cityInput = document.querySelector('#entering');

button.addEventListener('click', () => {
    getCity();
});

function getCity( ) {
    var cityName = document.getElementById("entering").value;
        console.log(cityName);
        return weatherToday(cityName);
}

function weatherToday(cityName) {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=ef5ffdb295f9241df26ba3b904510af5';
    console.log(url);
     

        fetch(url)
            .then(res => res.json())
            .then(out => changeInfo(out))
}
