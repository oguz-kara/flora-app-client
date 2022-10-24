import Box from '../components/Box';
import CustomerReturn from '../components/forms/CustomerPurchaseForm';

export default function AddNewCustomerPurchase() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Customers {'>'} Customer return
      </h4>
      <CustomerReturn />
    </Box>
  );
}
