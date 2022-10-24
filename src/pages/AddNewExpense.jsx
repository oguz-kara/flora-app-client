import Box from '../components/Box';
import AddNewExpenseForm from '../components/forms/ExpenseForm';

export default function AddNewProduct() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Expenses {'>'} Add new expense
      </h4>
      <AddNewExpenseForm />
    </Box>
  );
}
