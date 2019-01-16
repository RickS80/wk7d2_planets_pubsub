const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const HyperlinkView = require('../views/hyperlink_view.js');
const PlanetInfoView = require('../views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  // console.log(planetsDataModel.planets);

  const hyperlinkView = new HyperlinkView();
  hyperlinkView.bindEvents();

  const planetinfoview = new PlanetInfoView();
  planetinfoview.bindEvents();



});
