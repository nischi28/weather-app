const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/ " +
    address +
    ".json?access_token=pk.eyJ1IjoibmlzY2hpdGEiLCJhIjoiY2wxZGZweW5wMGgyYzNjbngzbnZhbW53diJ9.IrfB_il-yflYxL-EQlC26A";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("unable to find location, Try Another Search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
