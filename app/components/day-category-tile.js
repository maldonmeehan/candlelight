import Ember from 'ember';

export default Ember.Component.extend({
  pancakes: Ember.computed.filterBy('items', 'category', 'pancakes and such'),

  breakfastSpecials: Ember.computed.filterBy('items', 'category', 'breakfast specials'),

  classics: Ember.computed.filterBy('items', 'category', 'classic combos'),

  biscuits: Ember.computed.filterBy('items', 'category', 'biscuits and side orders'),

  breakfasts: Ember.computed.filterBy('items', 'category', 'breakfast'),

  omelettes: Ember.computed.filterBy('items', 'category', 'omelettes'),

  hotSandwiches: Ember.computed.filterBy('items', 'category', 'hot sandwiches'),

  coldSandwiches: Ember.computed.filterBy('items', 'category', 'cold sandwiches'),

  burgers: Ember.computed.filterBy('items', 'category', 'burgers'),

  sideOrders: Ember.computed.filterBy('items', 'category', 'side orders'),

  hotDinners: Ember.computed.filterBy('items', 'category', 'hot dinners'),

  soups: Ember.computed.filterBy('items', 'category', 'soups'),

  salads: Ember.computed.filterBy('items', 'category', 'salads'),

  dayBeverages: Ember.computed.filterBy('items', 'category', 'day beverages'),

  newAttractions: Ember.computed.filterBy('items', 'category', 'newly added attractions'),
  });
