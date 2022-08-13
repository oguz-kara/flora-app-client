import {
  AreaChart,
  Area,
  BarChart,
  XAxis,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import Typography from '../components/Typography';
import Card, { CardBody, CardHeader } from '../components/Card';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import '../style/product-details.scss';
import Container from '../components/Container';
import Box from '../components/Box';

export default function ProductDetails(props) {
  const data = [
    { name: '2 Nisan 2021 >', pv: 1500, amt: 2400 },
    { name: '8 Nisan 2021 >', pv: 1000, amt: 4000 },
    { name: '16 Nisan 2021 >', pv: 2900, amt: 7000 },
    { name: '23 Nisan 2021 >', pv: 3500, amt: 8070 },
  ];

  const data2 = [
    { name: '2 Nisan 2021 >', pv: 300, amt: 2400 },
    { name: '8 Nisan 2021 >', pv: 350, amt: 4000 },
    { name: '16 Nisan 2021 >', pv: 560, amt: 7000 },
    { name: '23 Nisan 2021 >', pv: 946, amt: 8070 },
  ];
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
              <Typography className="mb-20" variant="subtitle2">
                TOTAL INCOME
              </Typography>
            </CardHeader>
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
          </Card>
          <Card className="flex-1 secondary-dark-bg mr-20">
            <CardHeader>
              <Typography className="mb-20" variant="subtitle2">
                TOTAL PROFIT
              </Typography>
            </CardHeader>
            <CardBody>
              <div className="flex align-center">
                <Typography className="primary-color success mr-5" variant="h4">
                  64.00
                </Typography>
                <Typography variant="subtitle1">₺</Typography>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={data2}>
                  <XAxis
                    dataKey="name"
                    stroke="white"
                    style={{ fontSize: 12 }}
                  />
                  <Area dataKey="pv" fill="#3f51b5" />
                </AreaChart>
              </ResponsiveContainer>
            </CardBody>
          </Card>
        </div>
        <Typography variant="h5" className="mb-15">
          All time analysis
        </Typography>
        <div className="flex mb-15 background">
          <Card className="flex-1 mr-20">
            <CardBody>
              <Table>
                <THead>
                  <Tr>
                    <Th>#date</Th>
                    <Th>#qty</Th>
                    <Th>#profit</Th>
                  </Tr>
                </THead>
                <TBody>
                  <Tr>
                    <Td>17 July 2021</Td>
                    <Td>3</Td>
                    <Td className="bold">₺30</Td>
                  </Tr>
                  <Tr>
                    <Td>27 July 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺10</Td>
                  </Tr>
                  <Tr>
                    <Td>5 August 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺8</Td>
                  </Tr>
                  <Tr>
                    <Td>19 August 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺10</Td>
                  </Tr>
                </TBody>
              </Table>
            </CardBody>
          </Card>
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
