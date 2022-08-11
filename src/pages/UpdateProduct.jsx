import { useState } from 'react';
import { InputContainer } from '../components/Container';
import ProductForm from '../components/forms/ProductForm';
import Label from '../components/Label';
import TextBox from '../components/TextBox';

export default function AddNewProduct() {
  const [search, setSearch] = useState('');
  if (search !== '?') {
    return (
      <InputContainer>
        <Label>Search (?):</Label>
        <TextBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          placeholder="Search a product to update..."
        />
      </InputContainer>
    );
  }
  return (
    <div style={{ position: 'relative' }}>
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Products {'>'} Add new product
      </h4>
      <ProductForm />
    </div>
  );
}