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
import { useState } from 'react';

const dummyData = [
  {
    id: 1,
    name: 'Ilker',
    company: 'Arma',
    credit: 100,
    phone: '555555555',
  },
  {
    id: 2,
    name: 'Ilker',
    company: 'Arma',
    credit: 100,
    phone: '555555555',
  },
  {
    id: 3,
    name: 'Ilker',
    company: 'Arma',
    credit: 100,
    phone: '555555555',
  },
  {
    id: 4,
    name: 'Ilker',
    company: 'Arma',
    credit: 100,
    phone: '555555555',
  },
  {
    id: 5,
    name: 'Ilker',
    company: 'Arma',
    credit: 100,
    phone: '555555555',
  },
  {
    id: 6,
    name: 'Ilker',
    company: 'Arma',
    credit: 100,
    phone: '555555555',
  },
  {
    id: 7,
    name: 'Something Else',
    company: 'else company',
    credit: 10000,
    phone: '123123123123',
  },
];

export default function SupplierList() {
  const [data, setData] = useState(dummyData);
  const [searchText, setSearchText] = useState('');

  const filterProducts = (term) => {
    setData((prev) =>
      prev.filter((item) => {
        if (item.name.toLowerCase().includes(term.toLowerCase())) {
          return item;
        }
      })
    );
    if (term.length <= 0) setData(dummyData);
  };

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
          <TextBox
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              filterProducts(e.target.value);
            }}
            fullWidth
            placeholder="Search for products..."
          />
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
            {data.map((item) => (
              <Tr>
                <Td>{item.name}</Td>
                <Td>
                  <Link to="/supplier/1">{item.company}</Link>
                </Td>
                <Td>₺{item.credit}</Td>
                <Td>{item.phone}</Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </FormContainer>
    </Box>
  );
}
