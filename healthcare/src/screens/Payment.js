// import React from 'react';
// import {View, Button, Alert} from 'react-native';
// import Paypal from 'react-native-paypal';

// const Payment = () => {
//   const handlePayment = async () => {
//     try {
//       // Create a PayPal configuration object
//       const paymentConfig = {
//         clientId:
//           'AQLBlC5kbsSUszMZ04B9KvCZ2HScUHDAGCJ6qQjd3kQjzLywwT2BM8v5BZrYw5dMO8ufFeEksXaYdekh',
//         environment: Paypal.SANDBOX, // Use Paypal.LIVE for production
//         intent: Paypal.INTENT.SALE,
//         price: '10.00', // The payment amount
//         currency: 'USD', // The payment currency
//         description: 'Purchase from My App',
//       };

//       // Start the PayPal payment process
//       const {paymentConfirmation} = await Paypal.paymentRequest(paymentConfig);

//       // Check the paymentConfirmation.status for a successful payment
//       if (paymentConfirmation.status === Paypal.PAYMENT_STATUS.SUCCESS) {
//         // Payment successful, handle accordingly
//         Alert.alert('Payment Status', 'Payment successful!', [{text: 'OK'}]);
//       } else {
//         // Payment failed, handle accordingly
//         Alert.alert('Payment Status', 'Payment failed!', [{text: 'OK'}]);
//       }
//     } catch (error) {
//       Alert.alert(
//         'Payment Error',
//         'There was an error processing your payment.',
//         [{text: 'OK'}],
//       );
//     }
//   };

//   return (
//     <View>
//       <Button title="Pay with PayPal" onPress={handlePayment} />
//     </View>
//   );
// };

// export default Payment;
