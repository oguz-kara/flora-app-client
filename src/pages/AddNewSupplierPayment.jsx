import Box from '../components/Box';
import AddNewSupplierPaymentForm from '../components/forms/SupplierPaymentForm';

export default function AddNewCustomerPayment() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Suppliers {'>'} Add new supplier payment
      </h4>
      <AddNewSupplierPaymentForm />
    </Box>
  );
}
