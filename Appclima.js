import React from 'react';
// import weatherInformation from './weatherInformation'


function App() {
  return (
    <>
      <weatherInformation />
      <div class="city"></div>
      <div class="wind"></div>
      <div class="humidity"></div>
      <div class="temp"></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script type="text/javascript">

        <var APIKey="Xcdh1iJpNCuoO3BkwTNNeMGBzadydL4z" />;

        // Here we are building the URL we need to query the database
        <var queryURL="https://api.climacell.co/v3/weather/nowcast?lat=34.9611583&lon=-89.8456639&timestep=5&unit_system=us&fields=precipitation,temp:F,cloud_cover,wind_speed:mph,visibility:mi,precipitation_type&start_time=now" />;

        // var queryURL = "https://api.climacell.co/v3/locations?";


        $.ajax({
          url: queryURL,
    method: "GET",
            headers: {
          "Content-Type": "application/JSON",
    apikey: APIKey
}
})
// We store all of the retrieved data inside of an object called "response"
            .then(function (response) {

          // Log the queryURL
          console.log(queryURL);

    // Log the resulting object
    console.log(response);

    // Transfer content to HTML
                $(".city").html("<h1>" + response.name + " Weather Details</h1>");
$(".temp").text("Temperature (F): " + response.temp);
$(".wind").text("Wind Speed: " + response.wind_speed);
$(".humidity").text("Precipitation: " + response.precipitation);
$(".temp").text("Cloud Cover %: " + response.cloud_cover);
$(".temp").text("Visibility (mi): " + response.visibility);

// Log the data in the console as well
console.log("Wind Speed: " + response.wind.speed);
console.log("Humidity: " + response.main.humidity);
console.log("Temperature (F): " + response.temp);
});
    </script>


    </>
  )


}

export default App;
