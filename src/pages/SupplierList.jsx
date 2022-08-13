import Typography from '../components/Typography';
import Flex from '../components/Flex';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

import { FormContainer, InputContainer } from '../components/Container';
import Label from '../components/Label';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import TextBox from '../components/TextBox';
import { Link } from 'react-router-dom';
import Box from '../components/Box';

export default function SupplierList() {
  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Products {'>'} Product list
      </h4>
      <Box className="border-b-2 border-solid border-primary-color-muted mb-10">
        <Typography variant="h6">Filters</Typography>
        <Flex className="items-center justify-between">
          <Checkbox>has credit ? </Checkbox>
          <Box>
            <Button className="bg-primary-color">apply</Button>
          </Box>
        </Flex>
      </Box>
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
    </Box>
  );
}
