import DS from 'ember-data';

const error = DS.Model.extend({
  targynev: DS.attr('string'),
  kurzuskod: DS.attr('string'),
  idopont: DS.attr('string'),
  comments: DS.hasMany('comment', { async: true }, { inverse: 'error' }) 
});
/*
ErrorModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            targynev: '2021.12.12',
            idopont: 'pc1',
            kurzuskod: 'rossz',
        },    
        {
            id: 2,
            targynev: '2012.12.12',
            idopont: 'pc2',
            kurzuskod: 'rossz',
        },    
        {
            id: 3,
            targynev: '2015.12.12',
            idopont: 'pc9',
            kurzuskod: 'rossz',
        },    
    ]
});
*/
export default error;