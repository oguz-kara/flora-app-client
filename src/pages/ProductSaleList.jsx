import DatePicker from '../components/DatePicker';
import Flex from '../components/Flex';
import Typography from '../components/Typography';
import '../style/product-sale-list.scss';
import Table, { THead, Tr, Th, TBody, Td } from '../components/Table';
import { Link } from 'react-router-dom';
import Box from '../components/Box';
import Label from '../components/Label';
import Button from '../components/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ProductSaleList() {
  const [date, setDate] = useState(new Date());
  const productUnit = useSelector((state) => state.productUnit);

  return (
    <Box className="min-h-screen">
      <Typography variant="h4" style={{ marginBottom: 30, color: 'white' }}>
        Sales {'>'} Product sales
      </Typography>
      <Box className="border-b-2 border-solid border-primary-color-muted mb-10">
        <Typography variant="h6">Filters</Typography>
        <Flex className="items-center justify-between">
          <Flex className="items-center">
            <Label>by date</Label>
            <DatePicker
              className="inline-block"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </Flex>
          <Box>
            <Button className="bg-primary-color">apply</Button>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Typography variant="h6">Product sale list</Typography>
        <Table>
          <THead>
            <Tr>
              <Th>#name</Th>
              <Th>#unit</Th>
              <Th>#qty</Th>
              <Th>#supplier price</Th>
              <Th>#sale price</Th>
              <Th>#profit</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Link to="/product">Komur</Link>
              </Td>
              <Td>kg</Td>
              <Td>2</Td>
              <Td>₺15</Td>
              <Td>₺20</Td>
              <Td>₺10</Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="/product">Mangal</Link>
              </Td>
              <Td>piece</Td>
              <Td>1</Td>
              <Td>₺100</Td>
              <Td>₺150</Td>
              <Td>₺50</Td>
            </Tr>
            <Tr>
              <Td>
                <Link to="/product">Izgara</Link>
              </Td>
              <Td>piece</Td>
              <Td>2</Td>
              <Td>₺20</Td>
              <Td>₺34</Td>
              <Td>₺28</Td>
            </Tr>
          </TBody>
        </Table>
      </Box>
    </Box>
  );
}
