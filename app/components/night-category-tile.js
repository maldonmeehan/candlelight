import Ember from 'ember';

export default Ember.Component.extend({
  appetizer: Ember.computed.filterBy('items', 'category', 'appetizer'),

  soup: Ember.computed.filterBy('items', 'category', 'soup'),

  vegetable: Ember.computed.filterBy('items', 'category', 'vegetable'),

  pork: Ember.computed.filterBy('items', 'category', 'pork'),

  beef: Ember.computed.filterBy('items', 'category', 'beef'),

  seafood: Ember.computed.filterBy('items', 'category', 'seafood'),

  poultry: Ember.computed.filterBy('items', 'category', 'poultry'),

  eggfoo: Ember.computed.filterBy('items', 'category', 'egg foo young'),

  friedrice: Ember.computed.filterBy('items', 'category', 'fried rice'),

  noodles: Ember.computed.filterBy('items', 'category', 'noodles'),

  americanfood: Ember.computed.filterBy('items', 'category', 'american food'),

  beverages: Ember.computed.filterBy('items', 'category', 'beverages'),



});
