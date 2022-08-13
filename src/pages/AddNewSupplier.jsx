import Box from '../components/Box';
import AddNewSupplierForm from '../components/forms/SupplierForm';

export default function AddNewCustomer() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Suppliers {'>'} Add new supplier
      </h4>
      <AddNewSupplierForm />
    </Box>
  );
}
