import Table, { TBody, Td, Tr } from '../components/Table';
import Typography from '../components/Typography';
import Box from '../components/Box';
import DropDownActions from '../components/DropDownActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Card, { CardBody, CardHeader } from '../components/Card';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
} from 'recharts';
import { InputContainer } from '../components/Container';
import Todos from '../components/Todos';
import Flex from '../components/Flex';

export default function Dashboard() {
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
      <Box className="py-1 border-b-2 border-solid border-primary-color-muted mb-10">
        <Box className="inline-block">
          <DropDownActions
            header={
              <Box className="flex items-center cursor-pointer">
                <Typography className="mr-1" variant="h6">
                  Daily
                </Typography>
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </Box>
            }
            data={[
              {
                name: 'Daily',
                action: () => {},
              },
              {
                name: 'Weekly',
                action: () => {},
              },
              {
                name: 'Monthly',
                action: () => {},
              },
              {
                name: 'Yearly',
                action: () => {},
              },
              {
                name: 'All time',
                action: () => {},
              },
            ]}
          />
        </Box>
      </Box>
      <Box className="flex-wrap-on-mobile flex mb-15 justify-center">
        <Card className="flex-1 bg-primary-color m-2">
          <CardHeader>
            <Typography className="mb-10" variant="subtitle2">
              TOTAL INCOME
            </Typography>
          </CardHeader>
          <CardBody>
            <Box className="flex items-center">
              <Typography className="secondary-color mr-1" variant="h3">
                341.00
              </Typography>
              <Typography variant="subtitle1">₺</Typography>
            </Box>
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
        <Card className="flex-1 bg-secondary-dark-color m-2">
          <CardHeader>
            <Typography className="mb-10" variant="subtitle2">
              TOTAL PROFIT
            </Typography>
          </CardHeader>
          <CardBody>
            <Box className="flex items-center">
              <Typography className="primary-color success mr-1" variant="h3">
                64.00
              </Typography>
              <Typography variant="subtitle1">₺</Typography>
            </Box>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={data2}>
                <XAxis dataKey="name" stroke="white" style={{ fontSize: 12 }} />
                <Area dataKey="pv" fill="#3f51b5" />
              </AreaChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </Box>
      <Box className="flex-wrap-on-mobile flex mb-15 justify-center">
        <Card className="flex-1 bg-danger-color m-2">
          <CardHeader>
            <Typography className="mb-10" variant="subtitle2">
              EXPENSES
            </Typography>
          </CardHeader>
          <CardBody>
            <Box className="flex items-center">
              <Typography className="secondary-color mr-1" variant="h3">
                147.00
              </Typography>
              <Typography variant="subtitle1">₺</Typography>
            </Box>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  color="black"
                  stroke="white"
                  style={{ fontSize: 12 }}
                />
                <Bar dataKey="pv" fill="#3f51b5" />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
        <Card className="flex-1 m-2 border-2 border-solid rounded-sm border-primary-color">
          <Typography className="mb-10 text-primary-color" variant="subtitle2">
            TODOS
          </Typography>
          <InputContainer>
            <Todos
              data={[
                { id: 1, name: 'cicekleri sula', completed: true },
                { id: 2, name: 'temizlik yap', completed: false },
                {
                  id: 3,
                  name: 'odev yap',
                  completed: false,
                },
              ]}
            />
          </InputContainer>
        </Card>
      </Box>
      <Flex className="flex-wrap-on-mobile mb-15 justify-center">
        <Card className="flex-1 border-2 border-solid rounded-sm border-primary-color m-2">
          <Typography className="mb-10 text-primary-color" variant="subtitle2">
            RECENT SALES
          </Typography>
          <Box>
            <Table>
              <TBody>
                <Tr>
                  <Td>Mangal komur (kg)</Td>
                  <Td className="font-bold">2x</Td>
                </Tr>
                <Tr>
                  <Td>Mangal (pcs)</Td>
                  <Td className="font-bold">1x</Td>
                </Tr>
                <Tr>
                  <Td>Beşiz çiçeği (pcs)</Td>
                  <Td className="font-bold">2x</Td>
                </Tr>
                <Tr>
                  <Td>Çin karanfili poşetli (pcs)</Td>
                  <Td className="font-bold">7x</Td>
                </Tr>
                <Tr>
                  <Td>Begonya saksi no:3 (pcs)</Td>
                  <Td className="font-bold">3x</Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Card>
        <Card className="flex-1 border-2 border-solid rounded-sm border-primary-color m-2">
          <Typography className="mb-10 text-primary-color" variant="subtitle2">
            TOP SELLED PRODUCTS
          </Typography>
          <Box>
            <Table>
              <TBody>
                <Tr>
                  <Td>Mangal komur (kg)</Td>
                  <Td className="font-bold">41x</Td>
                </Tr>
                <Tr>
                  <Td>Mangal (pcs)</Td>
                  <Td className="font-bold">33x</Td>
                </Tr>
                <Tr>
                  <Td>Beşiz çiçeği (pcs)</Td>
                  <Td className="font-bold">11x</Td>
                </Tr>
                <Tr>
                  <Td>Çin karanfili poşetli (pcs)</Td>
                  <Td className="font-bold">5x</Td>
                </Tr>
                <Tr>
                  <Td>Begonya saksi no:3 (pcs)</Td>
                  <Td className="font-bold">2x</Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Card>
        <Card className="flex-1 border-2 border-solid rounded-sm border-primary-color m-2">
          <Typography className="mb-10 text-primary-color" variant="subtitle2">
            TOP PROFIT PRODUCT
          </Typography>
          <Box>
            <Table>
              <TBody>
                <Tr>
                  <Td>Mangal komur (kg)</Td>
                  <Td className="text-success-color font-bold">+150₺</Td>
                </Tr>
                <Tr>
                  <Td>Mangal (pcs)</Td>
                  <Td className="text-success-color font-bold">+125₺</Td>
                </Tr>
                <Tr>
                  <Td>Beşiz çiçeği (pcs)</Td>
                  <Td className="text-success-color font-bold">+99₺</Td>
                </Tr>
                <Tr>
                  <Td>Çin karanfili poşetli (pcs)</Td>
                  <Td className="text-success-color font-bold">+74₺</Td>
                </Tr>
                <Tr>
                  <Td>Begonya saksi no:3 (pcs)</Td>
                  <Td className="text-success-color font-bold">+50₺</Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Card>
      </Flex>
      <Flex>
        <Card className="flex-1 border-2 border-solid rounded-sm border-primary-color m-2">
          <Flex className="bg-primary-color h-32 items-center justify-around">
            <Typography variant="h6">Total value</Typography>
            <Flex className="items-center">
              <Typography className="mr-1" variant="h4">
                33.442
              </Typography>
              <Typography variant="h6">₺</Typography>
            </Flex>
          </Flex>
          <Flex className="bg-success-color h-32 items-center justify-around">
            <Flex className="items-center">
              <Typography className="mr-1" variant="h4">
                10.151
              </Typography>
              <Typography variant="h6">₺</Typography>
            </Flex>
            <Typography variant="h6">Total profit</Typography>
          </Flex>
          <Flex className="bg-secondary-color h-32 items-center justify-around">
            <Typography variant="h6">Total income</Typography>
            <Flex className="items-center">
              <Typography className="mr-1" variant="h4">
                43.512
              </Typography>
              <Typography variant="h6">₺</Typography>
            </Flex>
          </Flex>
        </Card>
        <Card className="flex-1"></Card>
        <Card className="flex-1"></Card>
      </Flex>
    </Box>
  );
}
