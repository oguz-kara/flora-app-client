import AddProductForm from '../components/forms/AddNewProductForm';

export default function AddNewProduct() {
  return (
    <div style={{ position: 'relative' }}>
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Products {'>'} Add new product
      </h4>
      <AddProductForm />
    </div>
  );
}
