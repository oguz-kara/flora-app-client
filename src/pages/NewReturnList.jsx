import Box from '../components/Box';
import ReturnListForm from '../components/forms/ReturnListForm';

export default function NewSaleList() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Returns {'>'} New return list
      </h4>
      <ReturnListForm />
    </Box>
  );
}
