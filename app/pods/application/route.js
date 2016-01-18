import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showModal: function(name, controller, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        controller: controller,
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
  }
});
