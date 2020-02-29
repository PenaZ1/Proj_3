const fs = require('fs');
const Location = require('./Location');

const populateSchema = () => {
  const hospitals = JSON.parse(fs.readFileSync('./Hospitals_in_Mississippi.geojson')).features;
  Object.values(hospitals).forEach((hospital) => {
    Location.create({
      name: hospital.properties.Name,
      lat: hospital.geometry.coordinates[1],
      lng: hospital.geometry.coordinates[0],
    });
  });
};

module.exports = populateSchema;
