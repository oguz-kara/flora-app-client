import { FormContainer, InputContainer } from '../components/Container';
import Label from '../components/Label';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import TextBox from '../components/TextBox';
import { Link } from 'react-router-dom';

export default function CustomerList() {
  return (
    <div>
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Customers {'>'} Customer list
      </h4>
      <FormContainer>
        <InputContainer>
          <Label>Search (?):</Label>
          <TextBox fullWidth placeholder="Search for customers..." />
        </InputContainer>
        <Table>
          <THead>
            <Tr>
              <Th>#name</Th>
              <Th>#phone number</Th>
              <Th>#credit</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Link to="/customer/1">Meral aba</Link>
              </Td>
              <Td>532 2324 232 2</Td>
              <Td>₺100</Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="/customer/1">Meral aba</Link>
              </Td>
              <Td>532 2324 232 2</Td>
              <Td>₺100</Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="/customer/1">Meral aba</Link>
              </Td>
              <Td>532 2324 232 2</Td>
              <Td>₺100</Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="/customer/1">Meral aba</Link>
              </Td>
              <Td>532 2324 232 2</Td>
              <Td>₺100</Td>
            </Tr>
          </TBody>
        </Table>
      </FormContainer>
    </div>
  );
}
