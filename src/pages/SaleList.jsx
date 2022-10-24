import Flex from '../components/Flex';
import Label from '../components/Label';
import DatePicker from '../components/DatePicker';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import '../style/sale-list.scss';
import Box from '../components/Box';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const salesListData = [
  {
    id: 1,
    show: false,
    totalProfit: 224,
    total: 224,
    received: 200,
    products: [
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
    ],
  },
  {
    id: 2,
    show: false,
    totalProfit: 224,
    total: 224,
    received: 200,
    products: [
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
    ],
  },
  {
    id: 3,
    show: false,
    totalProfit: 224,
    total: 224,
    received: 200,
    products: [
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
    ],
  },
  {
    id: 4,
    show: false,
    totalProfit: 224,
    total: 224,
    received: 200,
    products: [
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
    ],
  },
  {
    id: 5,
    show: false,
    totalProfit: 224,
    total: 224,
    received: 200,
    products: [
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
    ],
  },
  {
    id: 6,
    show: false,
    totalProfit: 224,
    total: 224,
    received: 200,
    products: [
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
      {
        name: 'Flower',
        unit: 'Pcs',
        qty: 5,
        supplierPrice: 20,
        salePrice: 30,
        profit: 10,
      },
    ],
  },
];

export default function SaleList({ props }) {
  const [date, setDate] = useState(new Date());
  const [salesList, setSalesList] = useState(salesListData);
  return (
    <Box className="min-h-screen">
      <Typography variant="h4" style={{ marginBottom: 30, color: 'white' }}>
        Sales {'>'} Sales list
      </Typography>
      <Box className="border-b-2 border-solid border-primary-color-muted mb-10">
        <Typography variant="h6">Filters</Typography>
        <Flex className="items-center justify-between flex-wrap gap-2">
          <Flex className="items-center gap-2">
            <Label>by date</Label>
            <DatePicker
              className="inline-block"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </Flex>
          <Box className="mb-2">
            <Button className="bg-primary-color button-disabled" disabled>
              apply
            </Button>
          </Box>
        </Flex>
      </Box>

      <Typography variant="small">17 April 2022, 21:00 pm</Typography>
      <ul className="sale-list__list">
        {salesList.map((item) => (
          <li key={item.id} className="sale-list__list-item">
            <Table className="sale-list__list-item__top">
              <TBody>
                <Tr className="sale-list__info">
                  <Td>Total profit</Td>
                  <Td className="sale-list__info__value success-color">
                    ₺{item.totalProfit}
                  </Td>
                </Tr>
                <Tr className="sale-list__info">
                  <Td className="sale-list__info__title">Total</Td>
                  <Td className="sale-list__info__value">₺{item.total}</Td>
                </Tr>
                <Tr className="sale-list__info">
                  <Td className="sale-list__info__title">Received</Td>
                  <Td className="sale-list__info__value">₺{item.received}</Td>
                </Tr>
              </TBody>
            </Table>
            <Button
              onClick={() =>
                setSalesList((prev) =>
                  prev.map((sale) => {
                    if (sale.id === item.id) {
                      return {
                        ...sale,
                        show: !sale.show,
                      };
                    }
                    return sale;
                  })
                )
              }
              className="flex bg-primary-color w-full"
              variant="filled"
            >
              <div
                className={
                  item.show
                    ? 'sale-list_icon-container active'
                    : 'sale-list_icon-container'
                }
              >
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
              </div>
              <Typography variant="button" className="mx-2">
                {item.show ? 'HIDE PRODUCTS' : 'SHOW PRODUCTS'}
              </Typography>
            </Button>
            <div
              className={
                item.show
                  ? 'sale-list__list-item__products active'
                  : 'sale-list__list-item__products'
              }
            >
              <Table>
                <THead>
                  <Tr>
                    <Th>#Name</Th>
                    <Th>#Unit</Th>
                    <Th>#Qty</Th>
                    <Th>#Supplier price</Th>
                    <Th>#Sale price</Th>
                    <Th>#Profit</Th>
                  </Tr>
                </THead>
                <TBody>
                  {item.products.map((product, index) => (
                    <Tr key={index}>
                      <Td>{product.name}</Td>
                      <Td>{product.unit}</Td>
                      <Td>{product.qty}</Td>
                      <Td>₺{product.supplierPrice}</Td>
                      <Td>₺{product.salePrice}</Td>
                      <Td>₺{product.profit}</Td>
                    </Tr>
                  ))}
                  <Tr>
                    <Td>Komur</Td>
                    <Td>kg</Td>
                    <Td>2</Td>
                    <Td>₺15</Td>
                    <Td>₺20</Td>
                    <Td>₺10</Td>
                  </Tr>
                  <Tr>
                    <Td>Komur</Td>
                    <Td>kg</Td>
                    <Td>2</Td>
                    <Td>₺15</Td>
                    <Td>₺20</Td>
                    <Td>₺10</Td>
                  </Tr>
                  <Tr>
                    <Td>Komur</Td>
                    <Td>kg</Td>
                    <Td>2</Td>
                    <Td>₺15</Td>
                    <Td>₺20</Td>
                    <Td>₺10</Td>
                  </Tr>
                </TBody>
              </Table>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
}
