import Ember from 'ember';

export default Ember.Component.extend({
  appetizer: Ember.computed.filterBy('items', 'category', 'appetizer'),

  soup: Ember.computed.filterBy('items', 'category', 'soup'),

  combinationdinner: Ember.computed.filterBy('items', 'category', 'combination dinner'),

  vegetable: Ember.computed.filterBy('items', 'category', 'vegetable'),

  pork: Ember.computed.filterBy('items', 'category', 'pork'),

  beef: Ember.computed.filterBy('items', 'category', 'beef'),

  seafood: Ember.computed.filterBy('items', 'category', 'seafood'),

  poultry: Ember.computed.filterBy('items', 'category', 'poultry'),

  eggfoo: Ember.computed.filterBy('items', 'category', 'egg foo young'),

  friedrice: Ember.computed.filterBy('items', 'category', 'fried rice'),

  noodles: Ember.computed.filterBy('items', 'category', 'noodles'),

  nightburgers: Ember.computed.filterBy('items', 'category', 'night burgers'),

  nightsandwiches: Ember.computed.filterBy('items', 'category', 'night sandwiches'),

  beverages: Ember.computed.filterBy('items', 'category', 'beverages'),



});
