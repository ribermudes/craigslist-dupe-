import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  cost: DS.attr(),
  bedrooms: DS.attr(),
  squareft: DS.attr(),
  location: DS.attr(),
  image: DS.attr()
});
