import '../style/product-list.scss';
import { FormContainer, InputContainer } from '../components/Container';
import Label from '../components/Label';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import TextBox from '../components/TextBox';
import { Link } from 'react-router-dom';

export default function ProductList() {
  return (
    <div>
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Products {'>'} Product list
      </h4>
      <FormContainer>
        <InputContainer>
          <Label>Search (?):</Label>
          <TextBox fullWidth placeholder="Search for products..." />
        </InputContainer>
        <Table>
          <THead>
            <Tr>
              <Th>#Image</Th>
              <Th>#Name</Th>
              <Th>#Unit</Th>
              <Th>#Qty</Th>
              <Th>#Price</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <img
                  src="https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                  alt="product1"
                  className="product-image"
                />
              </Td>
              <Td>
                <Link to="/product/1">Mangal komuru</Link>
              </Td>
              <Td>kg</Td>
              <Td>100</Td>
              <Td>₺20</Td>
            </Tr>
            <Tr>
              <Td>
                <img
                  src="https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                  alt="product1"
                  className="product-image"
                />
              </Td>
              <Td>
                <Link to="/product/2">Barbecue</Link>
              </Td>
              <Td>piece</Td>
              <Td>5</Td>
              <Td>₺299</Td>
            </Tr>
            <Tr>
              <Td>
                <img
                  src="https://images.unsplash.com/photo-1505405241694-58823de133e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="product1"
                  className="product-image"
                />
              </Td>
              <Td>
                <Link to="/product/3">Grill</Link>
              </Td>
              <Td>piece</Td>
              <Td>10</Td>
              <Td>₺49</Td>
            </Tr>
            <Tr>
              <Td>
                <img
                  src="https://images.unsplash.com/photo-1643766882254-2dc4fc8aa9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="product1"
                  className="product-image"
                />
              </Td>
              <Td>
                <Link to="/product/4">Kindling wood</Link>
              </Td>
              <Td>piece</Td>
              <Td>100</Td>
              <Td>₺14</Td>
            </Tr>
          </TBody>
        </Table>
      </FormContainer>
    </div>
  );
}
