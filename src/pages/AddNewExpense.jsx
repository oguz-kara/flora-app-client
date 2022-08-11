import AddNewExpenseForm from '../components/forms/ExpenseForm';

export default function AddNewProduct() {
  return (
    <div style={{ position: 'relative' }}>
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Expenses {'>'} Add new expense
      </h4>
      <AddNewExpenseForm />
    </div>
  );
}
