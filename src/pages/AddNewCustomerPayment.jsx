import Box from '../components/Box';
import AddNewCustomerPaymentForm from '../components/forms/CustomerPaymentForm';

export default function AddNewCustomerPayment() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Customers {'>'} Add new customer payment
      </h4>
      <AddNewCustomerPaymentForm />
    </Box>
  );
}
