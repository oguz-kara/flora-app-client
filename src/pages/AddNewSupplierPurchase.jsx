import Box from '../components/Box';
import AddNewSupplierPurchaseForm from '../components/forms/SupplierPurchaseForm';

export default function AddNewCustomerPurchase() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Supplier {'>'} Add new supplier purchase
      </h4>
      <AddNewSupplierPurchaseForm />
    </Box>
  );
}
