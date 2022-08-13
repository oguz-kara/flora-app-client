import CustomerPaymentForm from '../components/forms/CustomerPaymentForm';
import Modal from '../components/Modal';
import CustomerForm from '../components/forms/CustomerForm';
import Typography from '../components/Typography';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import Container from '../components/Container';
import Box from '../components/Box';
import Flex from '../components/Flex';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DropDownActions from '../components/DropDownActions';

export default function CustomerDetails(props) {
  const [activeUpdateCustomerForm, setActiveUpdateCustomerForm] =
    useState(false);
  const [activeUpdateCustomerPaymentForm, setActiveUpdateCustomerPaymentForm] =
    useState(false);

  const handleUpdateCustomerClick = (e) => {
    e.preventDefault();
    setActiveUpdateCustomerForm(true);
  };

  const handleCustomerFormSubmit = (e) => {
    e.preventDefault();
    setActiveUpdateCustomerForm(false);
  };

  const handleUpdateCustomerPaymentClick = (e) => {
    e.preventDefault();
    setActiveUpdateCustomerPaymentForm(true);
  };

  const handleCustomerPaymentFormSubmit = (e) => {
    e.preventDefault();
    setActiveUpdateCustomerPaymentForm(false);
  };

  return (
    <Box className="min-h-screen">
      <Modal
        active={activeUpdateCustomerForm}
        setActive={setActiveUpdateCustomerForm}
      >
        <CustomerForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleCustomerFormSubmit(e)}
          title="-> Update customer form"
          className="card"
        />
      </Modal>
      <Modal
        active={activeUpdateCustomerPaymentForm}
        setActive={setActiveUpdateCustomerPaymentForm}
      >
        <CustomerPaymentForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleCustomerPaymentFormSubmit(e)}
          title="-> Update customer payment form"
          className="card"
        />
      </Modal>
      <Typography variant="subtitle1" className="mb-30">
        Customers {'>'} Customer details
      </Typography>
      <Box className="section background p-30 mb-40">
        <Flex>
          <Box className="flex-1">
            <Box className="flex space-between">
              <Typography className="mb-20" variant="h5">
                Customer information
              </Typography>
              <Box
                className="cursor-pointer"
                onClick={(e) => handleUpdateCustomerClick(e)}
              >
                <Typography
                  className="primary-light-color underline "
                  variant="subtitle2"
                >
                  Update
                </Typography>
              </Box>
            </Box>
            <Table>
              <TBody>
                <Tr>
                  <Td>name</Td>
                  <Td>
                    <Typography variant="h6">Ulas</Typography>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    credit
                  </Td>
                  <Td>₺1456</Td>
                </Tr>
                <Tr>
                  <Td className="bold">
                    phone number
                  </Td>
                  <Td>123 232 21 23</Td>
                </Tr>
                <Tr>
                  <Td className="bold">
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
                className="absolute top-5 left-5 success-color bold underline"
                variant="small"
              >
                9 April 2022, 14:33 pm
              </Typography>
              <DropDownActions
                className="absolute top-5 right-5 primary-color bold"
                header={<FontAwesomeIcon icon={faChevronDown} size="sm" />}
                data={[
                  { name: 'update', action: () => {} },
                  { name: 'delete', action: () => {} },
                ]}
              />
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
                className="absolute top-5 left-5 success-color bold underline"
                variant="small"
              >
                24 March 2022, 13:35 pm
              </Typography>
              <DropDownActions
                className="absolute top-5 right-5 primary-color bold"
                header={<FontAwesomeIcon icon={faChevronDown} size="sm" />}
                data={[
                  { name: 'update', action: () => {} },
                  { name: 'delete', action: () => {} },
                ]}
              />
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
                className="absolute top-5 left-5 success-color bold underline"
                variant="small"
              >
                17 January 2022, 12:24 pm
              </Typography>
              <DropDownActions
                className="absolute top-5 right-5 primary-color bold"
                header={<FontAwesomeIcon icon={faChevronDown} size="sm" />}
                data={[
                  { name: 'update', action: () => {} },
                  { name: 'delete', action: () => {} },
                ]}
              />
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
                  <Td>
                    <Box>
                      <DropDownActions
                        header={
                          <FontAwesomeIcon icon={faChevronDown} size="sm" />
                        }
                        data={[
                          {
                            name: 'update',
                            action: handleUpdateCustomerPaymentClick,
                          },
                          { name: 'delete', action: () => {} },
                        ]}
                      />
                    </Box>
                  </Td>
                </Tr>
                <Tr>
                  <Td>10 Jan 2022, 14:41 pm</Td>
                  <Td>₺150</Td>
                  <Td>
                    <Flex className="align-center">
                      <DropDownActions
                        header={
                          <FontAwesomeIcon icon={faChevronDown} size="sm" />
                        }
                        data={[
                          {
                            name: 'update',
                            action: handleUpdateCustomerPaymentClick,
                          },
                          { name: 'delete', action: () => {} },
                        ]}
                      />
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>3 Jan 2022, 15:19 pm</Td>
                  <Td>₺300</Td>
                  <Td>
                    <Flex className="align-center">
                      <DropDownActions
                        header={
                          <FontAwesomeIcon icon={faChevronDown} size="sm" />
                        }
                        data={[
                          {
                            name: 'update',
                            action: handleUpdateCustomerPaymentClick,
                          },
                          { name: 'delete', action: () => {} },
                        ]}
                      />
                    </Flex>
                  </Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
