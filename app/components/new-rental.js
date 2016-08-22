import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    saveRental() {
      var params= {
        title: this.get('title'),
        cost: this.get('cost'),
        bedrooms: this.get('bedrooms'),
        squareft: this.get('squareft'),
        location: this.get('location'),
        image: this.get('image'),
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental', params);
    }
  }
});
