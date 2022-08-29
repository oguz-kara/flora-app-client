import {
  AreaChart,
  Area,
  BarChart,
  XAxis,
  Bar,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import Typography from '../components/Typography';
import Card, { CardBody, CardHeader } from '../components/Card';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import '../style/product-details.scss';
import Box from '../components/Box';
import { useState } from 'react';
import MessageBlock from '../components/MessageBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetails({ product }) {
  const data2 = [
    { name: '09:11 >', total: 150, pv: 1500, amt: 2400 },
    { name: '10:22 >', total: 100, pv: 1000, amt: 4000 },
    { name: '10:43 >', total: 290, pv: 2900, amt: 7000 },
    { name: '10:57 >', total: 150, pv: 1500, amt: 8070 },
    { name: '11:11 >', total: 160, pv: 1600, amt: 8070 },
    { name: '12:43 >', total: 110, pv: 1100, amt: 8070 },
    { name: '14:43 >', total: 50, pv: 500, amt: 8070 },
    { name: '16:11 >', total: 95, pv: 950, amt: 8070 },
    { name: '16:59 >', total: 135, pv: 1350, amt: 8070 },
    { name: '18:22 >', total: 500, pv: 5000, amt: 8070 },
    { name: '19:41 >', total: 320, pv: 3211, amt: 8070 },
  ];

  const data = [
    { name: '2 Nisan 2021 >', pv: 300, amt: 2400 },
    { name: '8 Nisan 2021 >', pv: 350, amt: 4000 },
    { name: '16 Nisan 2021 >', pv: 560, amt: 7000 },
    { name: '23 Nisan 2021 >', pv: 946, amt: 8070 },
  ];
  const [profitData, setProfitData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);

  return (
    <Box className="min-h-screen">
      <Typography
        variant="subtitle1"
        style={{ marginBottom: 30, color: 'white' }}
      >
        Products {'>'} Product details
      </Typography>
      <div className="product-details">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            alt="mangal"
            className="product-details__image"
          />
          <div className="product-details__content">
            <Table>
              <TBody>
                <Tr className="product-details__content__header">
                  <Td className="product-details__content__header">name</Td>
                  <Td>
                    <h2>1/2 Plastik kayar maşon</h2>
                  </Td>
                </Tr>
                <Tr className="product-details__content__header">
                  <Td className="product-details__content__header">barcode</Td>
                  <Td>00000000000000000000</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">
                    category name
                  </Td>
                  <Td>Mangal</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">
                    supplier name
                  </Td>
                  <Td>Arma</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">
                    brand name
                  </Td>
                  <Td>Armatur</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">qty</Td>
                  <Td>10pcs</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">
                    supplier price
                  </Td>
                  <Td>15</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">
                    sale price
                  </Td>
                  <Td>30</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">sku</Td>
                  <Td>H15DA1</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">
                    tax percentage
                  </Td>
                  <Td>18%</Td>
                </Tr>
                <Tr>
                  <Td className="product-details__content__header">
                    created at
                  </Td>
                  <Td>17 July 2020</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </div>
        <div className="product-details__sub-unit-list mt-45">
          <Table>
            <THead>
              <Tr>
                <Th># sub unit name</Th>
                <Th># main unit amount</Th>
                <Th># price</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>package(100pcs)</Td>
                <Td>100pcs</Td>
                <Td>250</Td>
              </Tr>
            </TBody>
          </Table>
        </div>
      </div>
      <h1 style={{ margin: '20px 0' }} className="product-details__description">
        Product description here...
      </h1>
      <div className="product-details__analysis">
        <Typography variant="h5" className="mb-15">
          Monthly analysis
        </Typography>
        <div className="flex mb-15">
          <Card className="flex-1 primary-bg mr-20">
            <CardHeader>
              <Typography variant="subtitle2">TOTAL INCOME</Typography>
            </CardHeader>
            {incomeData &&
            Array.isArray(incomeData) &&
            incomeData.length > 0 ? (
              <CardBody>
                <div className="flex align-center">
                  <Typography className="secondary-color mr-5" variant="h4">
                    147.00
                  </Typography>
                  <Typography variant="subtitle1">₺</Typography>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={data}>
                    <XAxis
                      dataKey="name"
                      color="black"
                      stroke="white"
                      style={{ fontSize: 12 }}
                    />
                    <Bar dataKey="pv" fill="#f48fb1" />
                  </BarChart>
                </ResponsiveContainer>
              </CardBody>
            ) : (
              <MessageBlock
                title={{ text: 'No data found!' }}
                icon={
                  <FontAwesomeIcon
                    className="fa-muted"
                    icon={faMagnifyingGlassMinus}
                    size="2x"
                  />
                }
              />
            )}
          </Card>
          <Card className="flex-1 secondary-dark-bg mr-20">
            <CardHeader>
              <Typography variant="subtitle2">TOTAL PROFIT</Typography>
            </CardHeader>
            {profitData &&
            Array.isArray(profitData) &&
            profitData.length > 0 ? (
              <CardBody>
                <div className="flex align-center">
                  <Typography
                    className="primary-color success mr-5"
                    variant="h4"
                  >
                    64.00
                  </Typography>
                  <Typography variant="subtitle1">₺</Typography>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={profitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      stroke="white"
                      style={{ fontSize: 12 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" fill="#3f51b5" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardBody>
            ) : (
              <MessageBlock
                title={{ text: 'No data found!' }}
                icon={
                  <FontAwesomeIcon
                    className="fa-muted"
                    icon={faMagnifyingGlassMinus}
                    size="2x"
                  />
                }
              />
            )}
          </Card>
        </div>
        <Typography variant="h5" className="mb-15">
          All time analysis
        </Typography>
        <div className="flex mb-15 background">
          <Card className="flex-1">
            <CardHeader className="primary-color">Analysis on total</CardHeader>
            <CardBody>
              <Table>
                <TBody>
                  <Tr>
                    <Td>Total sales of all time</Td>
                    <Td className="bold">15</Td>
                  </Tr>
                  <Tr>
                    <Td>Total profit of all time</Td>
                    <Td className="bold success-color">₺150</Td>
                  </Tr>
                </TBody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </div>
    </Box>
  );
}
