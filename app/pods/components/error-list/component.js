import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteError(error) {
            //console.log(error);
            error.deleteRecord();
            error.save();
        },
        newComment(formData) {
            console.log(formData);
            var comment = this.store.createRecord(
                'comment', 
                Object.assign(
                    {
                        name: formData.name,
                        uzenet: formData.uzenet,
                    }, 
                    formData
                )
            );
            comment.save();
            this.transitionToRoute('errors.list');
        }
}});
