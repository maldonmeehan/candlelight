import DS from 'ember-data';

export default DS.Model.extend({
  menuTime: DS.attr(),
  name: DS.attr(),
  category: DS.attr(),
  description: DS.attr(),
  spicy: DS.attr(),
  price: DS.attr()
});
