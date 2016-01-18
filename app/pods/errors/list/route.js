import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('error');
    },
    actions: {showModal: function(name, controller, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        controller: controller,
        model: model
      });
    },
}});
