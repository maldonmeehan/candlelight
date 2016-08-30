import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(location) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center((45.526196), (-122.587018)),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});
