import Typography from '../components/Typography';
import AddNewCustomerForm from '../components/forms/CustomerForm';
import Box from '../components/Box';

export default function AddNewCustomer() {
  return (
    <Box className="min-h-screen">
      <Typography variant="h4" className="mb-5">
        Customers {'>'} Add new customer
      </Typography>
      <AddNewCustomerForm />
    </Box>
  );
}
