import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBljUWF_JCV0ZVKINXl_ddxVjKE5RbRpRY&placeid=ChIJC9rX5hqhlVQRhcbrOoH0-7A';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
