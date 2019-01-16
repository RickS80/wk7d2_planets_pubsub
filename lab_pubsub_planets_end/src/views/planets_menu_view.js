const PubSub = require('../helpers/pub_sub.js');

const PlanetsMenuView = function(menu) {
  this.menu = menu;
};

PlanetsMenuView.prototype.bindEvents = function() {
  this.menu.addEventListener('click', (evt) => {
    const selectedPlanetName = evt.target.id;
    PubSub.publish('PlanetsMenuView:selected', selectedPlanetName);
  });
};

module.exports = PlanetsMenuView;
