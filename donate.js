paypal.Buttons({
    createOrder: function(data, actions) {
// This function sets up the details of the transaction, amount and line item details
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '15.00'
          }
        }]
      });
    },
    // onApprove: function(data, actions) {
    //   return actions.order.capture().then(function(details) {
    //     console.log('Transaction completed by ' + details.payer.name.given_name);
    //     // ADD YOUR OWN SUCCESS MESSAGE AND REDIRECT HERE
    //   });
    // }
  }).render('#paypal-button-container');