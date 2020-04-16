"use strict";

function displayWeather() {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        "APPID": weatherKey,
        "q": "Dallas, US",
        "units": "imperial"
    }).done(function (data) {
        console.log(data);
    }).fail(function (errors) {
        console.error(errors);


// Testing object
// let date = {};
// // // // (data.list[0].dt_txt)
// let temperature = {};
// // // // (data.list[0].main.temp)
// let humidity = {};
// // // // (data.list[0].main.humidity)
// let wind = {};
// // // // (data.list[0].wind.speed)
// let pressure = {};
// // (data.list[0].main.pressure)

//     data.forEach(function(ele) {
//         date = ele.data.list[0].dt_txt;
//         temperature = ele.data.list[0].main.temp;
//         humidity = ele.data.list[0].main.humidity;
//         wind = data.list[0].wind.speed;
//         pressure = ele.data.list[0].main.pressure;
//         weatherHTML = "<tr>"
//             + "<td>" + date + "</td>"
//             + "<td>" + temperature + "</td>"
//             + "<td>" + humidity + "</td>"
//             + "<td>" + wind + "</td>"
//             + "<td>" + pressure + "</td>"
//             + "</tr>"
//             + $("#weather-1").append(weatherHTML);
//
//     });console.log(ele);
// });
        function renderHTML(weather) {
            var HTML = "";
            weather.forEach(function (ele) {
                HTML = "<tr>" +
                    "<td>" + ele.list[0].dt_txt + "</td>" +
                    "<td>" + ele.list[0].main.temp + "</td>" +
                    "<td>" + ele.list[0].main.humidity + "</td>" +
                    "<td>" + ele.list[0].wind.speed + "</td>" +
                    "<td>" + ele.list[0].main.pressure + "</td>" +
                    "</tr>";
                $("#weather-1").append(HTML);
            });
        };
    }