import Box from '../components/Box';
import AddNewCustomerPurchaseForm from '../components/forms/CustomerPurchaseForm';

export default function AddNewCustomerPurchase() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Customers {'>'} Add new customer purchase
      </h4>
      <AddNewCustomerPurchaseForm />
    </Box>
  );
}
