import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  location: DS.attr(),
  content: DS.attr(),
  image: DS.attr()
});
