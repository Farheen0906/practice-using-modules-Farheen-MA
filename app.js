/*
Implement the App:
○ Create a file named app.js.
○ Use yargs to parse a --city argument provided by the user.
○ Simulate fetching weather data by returning a hardcoded response for
different cities.
○ Use chalk to style the output, emphasizing the city name and weather
details.
*/


const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const chalk = require("chalk");

// Create yargs instance
const argv = yargs(hideBin(process.argv))
  .option("city", {
    alias: "c",
    describe: "City name to get weather information",
    type: "string",
    demandOption: true
  })
  .help()
  .argv;

// Simulate fetching weather data by returning a hardcoded response for different cities.
function fetchWeather(city) {
  const weatherData = {
    london: { temp: "59°F", condition: "Cloudy" },
    paris: { temp: "64°F", condition: "Sunny" },
    tokyo: { temp: "75°F", condition: "Rainy" },
    "new york": { temp: "71°F", condition: "Windy" }
  };

const normalizedCity = city.toLowerCase().trim();
return weatherData[normalizedCity] || null;
}

// Fetch weather for provided city
const city = argv.city;
const weather = fetchWeather(city);

//Use chalk to style the output, emphasizing the city name and weather details.
if (!weather) {
  console.log(chalk.red.bold("Weather data not available for this city!"));
} else {
  console.log(chalk.blue.bold(` Weather Report for ${city}`));
  console.log(chalk.green(`Temperature: ${weather.temp}`));
  console.log(chalk.yellow(`Condition: ${weather.condition}`));
}


/*

○ The purpose of package.json in managing dependencies.
Package.json file is like the blueprint of our project it contains all the dependencies
and versions required for the project to work.
Whenever we install a module using "npm install" it automatically get updated in the
dependencies inside json file.
Our code could be shared among other developers for collaboration and with a single package.json file they
can download all the dependencies needed to run the application

○ How npm install reinstalls dependencies and its importance in
collaborative projects.
We can share our code and pacakge.json file with other developers to have all the code and its related
dependencies downloaded on their local machines(same exact copy of dependencies) that makes collaboration easy 
and prevents issues like machine compatability.

Question ---- Explain the role of the node_modules directory and why it should not
be included in version control?

Answer---- node modules directory contains all the modules and files related to the dependencies 
we downloaded(very large in size).They are available on the internet and can be directly
downloaded by other developers ,they only need the pacakage.json file(to know what the
dependencies and versions are) and use npm install to download all these modules on their 
local machine needed to run our application. 
That is the reason it is added in .gitignore file.
*/
