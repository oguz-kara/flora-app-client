import Flex from '../components/Flex';
import Label from '../components/Label';
import DatePicker from '../components/DatePicker';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import '../style/sale-list.scss';
import Box from '../components/Box';
import { useState } from 'react';

export default function SaleList({ props }) {
  const [date, setDate] = useState(new Date());
  return (
    <Box className="min-h-screen">
      <Typography variant="h4" style={{ marginBottom: 30, color: 'white' }}>
        Sales {'>'} Sales list
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
      <ul className="sale-list__list">
        <li className="sale-list__list-item">
          <Table className="sale-list__list-item__left">
            <TBody>
              <Typography
                className="absolute top-5 left-5 success-color bold"
                variant="small"
              >
                17 April 2022, 21:00 pm
              </Typography>
              <Tr className="sale-list__info">
                <Td>Total profit</Td>
                <Td className="sale-list__info__value success-color">₺74</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total</Td>
                <Td className="sale-list__info__value">₺224</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Received</Td>
                <Td className="sale-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="sale-list__list-item__right">
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
        <li className="sale-list__list-item">
          <Table className="sale-list__list-item__left">
            <TBody>
              <Typography
                className="absolute top-5 left-5 success-color bold"
                variant="small"
              >
                17 April 2022, 21:00 pm
              </Typography>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total profit</Td>
                <Td className="sale-list__info__value success-color">₺74</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total</Td>
                <Td className="sale-list__info__value">₺224</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Received</Td>
                <Td className="sale-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="sale-list__list-item__right">
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
                  <Td>Komur</Td>
                  <Td>kg</Td>
                  <Td>2</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                  <Td>₺10</Td>
                </Tr>
                <Tr>
                  <Td>Mangal</Td>
                  <Td>piece</Td>
                  <Td>1</Td>
                  <Td>₺100</Td>
                  <Td>₺150</Td>
                  <Td>₺50</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </li>
        <li className="sale-list__list-item">
          <Table className="sale-list__list-item__left">
            <TBody>
              <Typography
                className="absolute top-5 left-5 success-color bold"
                variant="small"
              >
                17 April 2022, 21:00 pm
              </Typography>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total profit</Td>
                <Td className="sale-list__info__value success-color">₺74</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total</Td>
                <Td className="sale-list__info__value">₺224</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Received</Td>
                <Td className="sale-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="sale-list__list-item__right">
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
                  <Td>Komur</Td>
                  <Td>kg</Td>
                  <Td>2</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                  <Td>₺10</Td>
                </Tr>
                <Tr>
                  <Td>Mangal</Td>
                  <Td>piece</Td>
                  <Td>1</Td>
                  <Td>₺100</Td>
                  <Td>₺150</Td>
                  <Td>₺50</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </li>
        <li className="sale-list__list-item">
          <Table className="sale-list__list-item__left">
            <TBody>
              <Typography
                className="absolute top-5 left-5 success-color bold"
                variant="small"
              >
                17 April 2022, 21:00 pm
              </Typography>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total profit</Td>
                <Td className="sale-list__info__value success-color">₺74</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total</Td>
                <Td className="sale-list__info__value">₺224</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Received</Td>
                <Td className="sale-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="sale-list__list-item__right">
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
                  <Td>Komur</Td>
                  <Td>kg</Td>
                  <Td>2</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                  <Td>₺10</Td>
                </Tr>
                <Tr>
                  <Td>Mangal</Td>
                  <Td>piece</Td>
                  <Td>1</Td>
                  <Td>₺100</Td>
                  <Td>₺150</Td>
                  <Td>₺50</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </li>
      </ul>
    </Box>
  );
}
