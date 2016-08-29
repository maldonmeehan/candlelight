import Ember from 'ember';

export function spicy(params) {
  var spicyness = params[0].get('spicy');

  if(spicyness === true) {
    return Ember.String.htmlSafe('<i class="fa fa-frown-o" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(spicy);
