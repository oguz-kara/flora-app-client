import Box from '../components/Box';
import AddNewDestructionForm from '../components/forms/DestructionForm';

export default function AddNewCustomer() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Destructions {'>'} Add new destruction
      </h4>
      <AddNewDestructionForm />
    </Box>
  );
}
