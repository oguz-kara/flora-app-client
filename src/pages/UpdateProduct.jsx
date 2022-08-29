import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Box from '../components/Box';
import { InputContainer } from '../components/Container';
import ProductForm from '../components/forms/ProductForm';
import Label from '../components/Label';
import TextBox from '../components/TextBox';
import convertToProductForm from '../utils/convertToProductForm';
import useAxios from '../hooks/useAxios';

export default function UpdateProduct() {
  const { state } = useLocation();
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState('');

  const getProductUnitsState = useAxios({
    endpoint: '/product-unit',
    method: 'get',
  });

  useEffect(() => {
    const unitData = getProductUnitsState.response;
    if (state && Object.keys(state).length > 0 && unitData) {
      setProduct(convertToProductForm(state, unitData));
    }
  }, [state, getProductUnitsState.response]);

  if (state && Object.keys(state).length <= 0) {
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
    <Box className="min-h-screen relative">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Products {'>'} Add new product
      </h4>
      <ProductForm data={product} method="put" />
    </Box>
  );
}
