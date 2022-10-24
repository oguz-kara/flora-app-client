import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Box from '../components/Box';
import Button from '../components/Button';

import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import Typography from '../components/Typography';
import '../style/order-list.scss';

const dummyData = [
  {
    id: 1,
    show: false,
    createdAt: '10 July 2021, 21:00 pm',
    dateToBeDelivered: '17 Jul, 2021',
    phoneNumber: '55555555',
    credit: 10000,
    orderList: [
      {
        id: 1,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 2,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 3,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 4,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 5,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
    ],
  },
  {
    id: 55,
    show: false,
    createdAt: '10 July 2021, 21:00 pm',
    dateToBeDelivered: '17 Jul, 2021',
    phoneNumber: '55555555',
    credit: 10000,
    orderList: [
      {
        id: 1,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 2,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 3,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 4,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 5,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
    ],
  },
  {
    id: 88,
    show: false,
    createdAt: '10 July 2021, 21:00 pm',
    dateToBeDelivered: '17 Jul, 2021',
    phoneNumber: '55555555',
    credit: 10000,
    orderList: [
      {
        id: 1,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 2,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 3,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 4,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 5,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
    ],
  },
  {
    id: 99,
    show: false,
    createdAt: '10 July 2021, 21:00 pm',
    dateToBeDelivered: '17 Jul, 2021',
    phoneNumber: '55555555',
    credit: 10000,
    orderList: [
      {
        id: 1,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 2,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 3,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 4,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 5,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
    ],
  },
  {
    id: 100,
    show: false,
    createdAt: '10 July 2021, 21:00 pm',
    dateToBeDelivered: '17 Jul, 2021',
    phoneNumber: '55555555',
    credit: 10000,
    orderList: [
      {
        id: 1,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 2,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 3,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 4,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
      {
        id: 5,
        name: 'sardunya',
        qty: 100,
        description: 'cok guzel bir cuicek',
      },
    ],
  },
];

export default function OrderList({ props }) {
  const [data, setData] = useState(dummyData);
  return (
    <Box className="min-h-screen ">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Orders {'>'} Order list
      </h4>
      <ul className="order-list__list">
        {data.map((item) => (
          <>
            <div className="order-list__date">{item.createdAt}</div>
            <li className="order-list__list-item">
              <Table className="order-list__list-item__left mb-10">
                <div className="small-title">Customer Info</div>
                <TBody>
                  <Tr className="order-list__info">
                    <Td className="order-list__info__title">
                      Date to be delivered
                    </Td>
                    <Td className="order-list__info__value success-color">
                      {item.dateToBeDelivered}
                    </Td>
                  </Tr>
                  <Tr className="order-list__info">
                    <Td className="order-list__info__title">Phone number</Td>
                    <Td className="order-list__info__value">
                      {item.phoneNumber}
                    </Td>
                  </Tr>
                  <Tr className="order-list__info">
                    <Td className="order-list__info__title">Credit</Td>
                    <Td className="order-list__info__value">₺{item.credit}</Td>
                  </Tr>
                </TBody>
              </Table>
              <Button
                onClick={() => {
                  setData((prev) =>
                    prev.map((dataItem) => {
                      if (dataItem.id === item.id)
                        return { ...dataItem, show: !dataItem.show };
                      return dataItem;
                    })
                  );
                }}
                className="bg-primary-color w-full"
              >
                <div>
                  <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </div>
                <Typography variant="button" className="mx-2">
                  {item.show ? 'HIDE PRODUCTS' : 'SHOW PRODUCTS'}
                </Typography>
              </Button>
              <div
                className={
                  item.show
                    ? 'order-list__list-item__orders active'
                    : 'order-list__list-item__orders'
                }
              >
                <div className="small-title" style={{ marginLeft: 15 }}>
                  Order List
                </div>
                <Table>
                  <THead>
                    <Tr>
                      <Th>#name</Th>
                      <Th>#qty</Th>
                      <Th>#description</Th>
                    </Tr>
                  </THead>
                  <TBody className="overflow-x-auto">
                    {item.orderList.map((order) => (
                      <Tr>
                        <Td>{order.name}</Td>
                        <Td>{order.qty}</Td>
                        <Td>{order.description}</Td>
                      </Tr>
                    ))}
                  </TBody>
                </Table>
              </div>
            </li>
          </>
        ))}
      </ul>
    </Box>
  );
}
