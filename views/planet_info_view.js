const PubSub = require('../src/helpers/pub_sub.js')

const PlanetInfoView = function (container) {
this.container = container
}

PlanetInfoView.prototype.bindEvents = function() {
 PubSub.subscribe('SolarSystem:result-calculated', (event) => {
   const returnedPlanet = event.detail;
   console.log('payload received in PlanetInfoView:', returnedPlanet);
   this.displayResult(returnedPlanet);
 })
};

PlanetInfoView.prototype.displayResult = function (result) { // NEW
 const resultElement = document.querySelector('.planet-details');
// this.container.innerHTML = '';


 // resultElement.textContent = `Name: ${result.name}, orbit ${result.orbit}`

resultElement.textContent = ''
for (const key in result) {
  let value = result[key];
  console.log(`${key}:${value}`);

resultElement.appendChild(`${key}:${value}`)

};

}


module.exports = PlanetInfoView;
