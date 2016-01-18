import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newComment(formData) {
            console.log(formData);
            var error = this.get('model');
            var comment = this.store.createRecord(
                'comment', 
                Object.assign(
                    {
                        nev: formData.nev,
                        uzenet: formData.uzenet,
                        error: error,
                    }, 
                    formData
                )
            );
            comment.save();
            this.transitionToRoute('errors.list');
        }
    }
});
