const AirmapSDK = require('airmap-map-sdk');

const config = {
  airmap: {
    api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFsX2lkIjoiY3JlZGVudGlhbHxkTGFNcWV3SHdYNDA5T3NrWmtRcE9ISkV5Zzc3IiwiYXBwbGljYXRpb25faWQiOiJhcHBsaWNhdGlvbnw4TTlwRzlpT3BFVzQ1aE13NExHQlNibDVlbnYiLCJvcmdhbml6YXRpb25faWQiOiJkZXZlbG9wZXJ8bjhlYlFZNmZHOExZV3hpdlJObG94U3EzOHpFIiwiaWF0IjoxNTgxNDY4ODg1fQ._3U0szicfjRQbfQkFYeXoXJpjoBggJUrrMth83VKEM4',
    client_id: '202321a1-b0bb-4086-ba03-893e74ba2bc0',
    callback_url: null,
  },
  mapbox: {
    access_token: null,
  },
};
let map = new AirmapSDK(config, {
  container: 'airspaceMap',
  center: [33.9416, -118.4085],
  layers: ['airports_recreational', 'national_parks', 'tfrs', 'wildfires'],
  /* refer to the docs for a comprehensive list of options */
});
