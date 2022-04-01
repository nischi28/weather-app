// console.log("starting");

// const request = require("request");

// setTimeout(() => {
//   console.log("2 second Timer");
// }, 2000);
// setTimeout(() => {
//   console.log(" 0 second timer");
// }, 0);
// console.log("stopping");

// const request = require("request");

// const url = `http://api.weatherstack.com/current?access_key=c9f8280386c44862f6d82416087c13c8&query=37.8267,-122.4233`;

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response);
//   //   const data = JSON.parse(response.body);
//   //   console.log(data.current);
//   console.log(response.body.location);
// });

//Geocoding
// const request = require("request");
// const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/515%2015th%20St%20NW%2C%20Washington%2C%20DC%2020004.json?types=address&access_token=pk.eyJ1IjoibmlzY2hpdGEiLCJhIjoiY2wxZGZweW5wMGgyYzNjbngzbnZhbW53diJ9.IrfB_il-yflYxL-EQlC26A`;
// request({ url: geocodeURL, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[1];
//   const longitude = response.body.features[0].center[0];
//   console.log(latitude, longitude);
// // });

// //error handling
// const request = require("request");

// const url = `http://api.weatherstack.com/current?access_key=c9f8280386c44862f6d82416087c13c8&query=37.8267,-122.4233`;

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect");
//   } else {
//     console.log(
//       response.body.daily.data[0].summary +
//         "it is currently" +
//         response.body.currently.precipProbability +
//         "% chance of rain"
//     );
//   }

//   console.log(response.body.location);
// });

// const request = require('request')
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];
if (!address) {
  console.log("please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      // console.log(location)
      console.log(forecastData);
    });
  });
}
