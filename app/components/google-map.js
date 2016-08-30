import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center((45.526196), (-122.587018)),
        zoom: 15
      };
      var newMap = this.get('map').findMap(container, options);
      var markerOptions = {
        position: {lat: 45.526196, lng: -122.587018},
        map: newMap,
        title: "Candlelight",
        icon: '/assets/img/map-icon2.png',
      };
      var content = {
        content: "<h4>Come visit us!</h4> <a href = 'https://www.google.com/maps/place/Candlelight+Restaurant+and+Lounge/@45.5254841,-122.5915148,15.2z/data=!4m12!1m6!3m5!1s0x5495a11ae6d7da0b:0xb0fbf4813aebc685!2sCandlelight+Restaurant+and+Lounge!8m2!3d45.526233!4d-122.587057!3m4!1s0x5495a11ae6d7da0b:0xb0fbf4813aebc685!8m2!3d45.526233!4d-122.587057' target='_blank'>7334 NE Glisan St, Portland, OR 97213</a>"
      };
      var infowindow = this.get('map').createInfoWindow(content);
      var marker = this.get('map').createMarker(markerOptions);
      marker.addListener('click', function(){
        infowindow.open(newMap, marker);
      });
    }
  }
});
