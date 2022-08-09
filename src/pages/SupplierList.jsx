import { FormContainer, InputContainer } from '../components/Container';
import Label from '../components/Label';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import TextBox from '../components/TextBox';
import { Link } from 'react-router-dom';

export default function SupplierList() {
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
              <Th>#name</Th>
              <Th>#company name</Th>
              <Th>#credit</Th>
              <Th>#phone number</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>Ilker</Td>
              <Td>
                <Link to="/supplier/1">Arma</Link>
              </Td>
              <Td>₺1499</Td>
              <Td>123 232 21 22</Td>
            </Tr>
            <Tr>
              <Td>Ilker</Td>
              <Td>
                <Link to="/supplier/1">Arma</Link>
              </Td>
              <Td>₺1499</Td>
              <Td>123 232 21 22</Td>
            </Tr>
            <Tr>
              <Td>Ilker</Td>
              <Td>
                <Link to="/supplier/1">Arma</Link>
              </Td>
              <Td>₺1499</Td>
              <Td>123 232 21 22</Td>
            </Tr>
            <Tr>
              <Td>Ilker</Td>
              <Td>
                <Link to="/supplier/1">Arma</Link>
              </Td>
              <Td>₺1499</Td>
              <Td>123 232 21 22</Td>
            </Tr>
          </TBody>
        </Table>
      </FormContainer>
    </div>
  );
}
