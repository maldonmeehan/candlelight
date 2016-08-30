import Ember from 'ember';

export function spicy(params) {
  var spicyness = params[0].get('spicy');

  if(spicyness === true) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(spicy);
