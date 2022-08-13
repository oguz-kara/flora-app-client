import Box from '../components/Box';
import CustomerPurchaseForm from '../components/forms/CustomerPurchaseForm';

export default function AddNewCustomerPurchase() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Customers {'>'} Update customer purchase
      </h4>
      <CustomerPurchaseForm />
    </Box>
  );
}