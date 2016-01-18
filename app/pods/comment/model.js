import DS from 'ember-data';

const comment = DS.Model.extend({
  nev: DS.attr('string'),
  uzenet: DS.attr('string'),
  error: DS.belongsTo('error', {async: true}, { inverse: 'comments' })
});

export default comment;