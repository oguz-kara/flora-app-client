import Typography from '../components/Typography';
import AddNewCustomerForm from '../components/forms/CustomerForm';
import Box from '../components/Box';

export default function AddNewCustomer() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Customers {'>'} Add new customer
      </h4>
      <AddNewCustomerForm />
    </Box>
  );
}
