import Box from '../components/Box';
import AddProductForm from '../components/forms/ProductForm';

export default function AddNewProduct() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white', fontWeight: 'bold' }}>
        Products {'>'} Add new product
      </h4>
      <AddProductForm />
    </Box>
  );
}
