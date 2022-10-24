import Box from '../components/Box';
import AddNewOrderForm from '../components/forms/OrderForm';

export default function AddNewOrder() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Orders {'>'} Add new order
      </h4>
      <AddNewOrderForm />
    </Box>
  );
}
