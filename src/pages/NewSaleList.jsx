import Box from '../components/Box';
import SaleListForm from '../components/forms/SaleListForm';

export default function NewSaleList() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Sales {'>'} New sale
      </h4>
      <SaleListForm />
    </Box>
  );
}
