import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyError(formData) {
            // console.log(formData);
            let error = this.get('model');
            console.log(error);
            error.setProperties(
                {
                    targynev: formData.targynev,
                    kurzuskod:formData.kurzuskod,
                    idopont: formData.idopont
                }
            );
            error.save();
            this.transitionToRoute('errors.list');
        }
    }
});
