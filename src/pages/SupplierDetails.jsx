import Typography from '../components/Typography';
import Card, { CardBody, CardHeader } from '../components/Card';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
// import '../style/supplier-details.scss';
import Container from '../components/Container';
import Box from '../components/Box';
import Flex from '../components/Flex';

export default function SupplierDetails(props) {
  return (
    <Container>
      <Typography variant="subtitle1" className="mb-30">
        Suppliers {'>'} Supplier details
      </Typography>
      <Box className="section background p-30 mb-40">
        <Flex>
          <Box className="flex-1">
            <Typography className="mb-20" variant="h5">
              Supplier information
            </Typography>
            <Table>
              <TBody>
                <Tr className="supplier-details__content__header">
                  <Td className="supplier-details__content__header bold">
                    name
                  </Td>
                  <Td>
                    <Typography variant="h6">Ulas</Typography>
                  </Td>
                </Tr>
                <Tr>
                  <Td className="supplier-details__content__header bold">
                    company name
                  </Td>
                  <Td>Omer Hirdavat</Td>
                </Tr>
                <Tr>
                  <Td className="supplier-details__content__header bold">
                    credit
                  </Td>
                  <Td>₺1456</Td>
                </Tr>
                <Tr>
                  <Td className="supplier-details__content__header bold">
                    phone number
                  </Td>
                  <Td>123 232 21 23</Td>
                </Tr>
                <Tr>
                  <Td className="supplier-details__content__header bold">
                    created at
                  </Td>
                  <Td>17 July 2020</Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Flex>
      </Box>
      <Box className="section background p-30 mb-40 ">
        <Flex wrap>
          <Box className="flex-1 mr-20 pr-20">
            <Typography className="mb-20" variant="h5">
              Purchase
            </Typography>
            <Table className="relative pt-20 pb-20 br-5">
              <Typography
                className="absolute top-5 right-5 success-color bold underline"
                variant="small"
              >
                9 April 2022, 14:33 pm
              </Typography>
              <THead>
                <Tr>
                  <Th className="primary-color">#name</Th>
                  <Th className="primary-color">#unit</Th>
                  <Th className="primary-color">#qty</Th>
                  <Th className="primary-color">#price</Th>
                  <Th className="primary-color">#sale price</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>Ahsap firca sapi</Td>
                  <Td>pcs</Td>
                  <Td>10</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                </Tr>
                <Tr>
                  <Td>Kopuk 450gr</Td>
                  <Td>pcs</Td>
                  <Td>10</Td>
                  <Td>₺40</Td>
                  <Td>₺50</Td>
                </Tr>
              </TBody>
            </Table>
            <Table className="relative pt-20 pb-20">
              <Typography
                className="absolute top-5 right-5 success-color bold underline"
                variant="small"
              >
                24 March 2022, 13:35 pm
              </Typography>
              <THead>
                <Tr>
                  <Th className="primary-color">#name</Th>
                  <Th className="primary-color">#unit</Th>
                  <Th className="primary-color">#qty</Th>
                  <Th className="primary-color">#price</Th>
                  <Th className="primary-color">#sale price</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>Ahsap firca sapi</Td>
                  <Td>pcs</Td>
                  <Td>10</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                </Tr>
                <Tr>
                  <Td>Kopuk 450gr</Td>
                  <Td>pcs</Td>
                  <Td>10</Td>
                  <Td>₺40</Td>
                  <Td>₺50</Td>
                </Tr>
              </TBody>
            </Table>
            <Table className="relative pt-20 pb-20">
              <Typography
                className="absolute top-5 right-5 success-color bold underline"
                variant="small"
              >
                17 January 2022, 12:24 pm
              </Typography>
              <THead>
                <Tr>
                  <Th className="primary-color">#name</Th>
                  <Th className="primary-color">#unit</Th>
                  <Th className="primary-color">#qty</Th>
                  <Th className="primary-color">#price</Th>
                  <Th className="primary-color">#sale price</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>Ahsap firca sapi</Td>
                  <Td>pcs</Td>
                  <Td>10</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                </Tr>
                <Tr>
                  <Td>Kopuk 450gr</Td>
                  <Td>pcs</Td>
                  <Td>10</Td>
                  <Td>₺40</Td>
                  <Td>₺50</Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
          <Box className="flex-1">
            <Typography className="mb-20" variant="h5">
              Payment
            </Typography>
            <Table className="relative pt-20 pb-20">
              <THead>
                <Tr>
                  <Th>
                    <Typography className="bold primary-color" variant="small">
                      #date
                    </Typography>
                  </Th>
                  <Th>
                    <Typography className="bold primary-color" variant="small">
                      #payment amount
                    </Typography>
                  </Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>17 Jan 2022, 12:49 pm</Td>
                  <Td>₺200</Td>
                </Tr>
                <Tr>
                  <Td>10 Jan 2022, 14:41 pm</Td>
                  <Td>₺150</Td>
                </Tr>
                <Tr>
                  <Td>3 Jan 2022, 15:19 pm</Td>
                  <Td>₺300</Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
