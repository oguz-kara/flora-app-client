import DatePicker from '../components/DatePicker';
import Flex from '../components/Flex';
import Table, { THead, Tr, Th, TBody, Td } from '../components/Table';
import ExpenseForm from '../components/forms/ExpenseForm';
import Box from '../components/Box';
import DropDownActions from '../components/DropDownActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from '../components/Modal';
import Typography from '../components/Typography';
import Label from '../components/Label';
import Button from '../components/Button';

export default function ProductSaleList() {
  const [activeUpdateExpenseForm, setActiveUpdateExpenseForm] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleUpdateExpenseClick = (e) => {
    e.preventDefault();
    setActiveUpdateExpenseForm(true);
  };

  const handleUpdateExpenseFormSubmit = (e) => {
    e.preventDefault();
    setActiveUpdateExpenseForm(false);
  };

  return (
    <Box className="min-h-screen">
      <Modal
        active={activeUpdateExpenseForm}
        setActive={setActiveUpdateExpenseForm}
      >
        <ExpenseForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleUpdateExpenseFormSubmit(e)}
          title="-> Update supplier form"
          className="card"
        />
      </Modal>
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Sales {'>'} Product sales
      </h4>
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
      <Table>
        <THead>
          <Tr>
            <Th>#type</Th>
            <Th>#name</Th>
            <Th>#description</Th>
            <Th>#price</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Personal</Td>
            <Td>Food money</Td>
            <Td>I buy a sandvich</Td>
            <Td>₺69</Td>
            <Td>
              <Box>
                <DropDownActions
                  header={<FontAwesomeIcon icon={faChevronDown} size="sm" />}
                  data={[
                    {
                      name: 'update',
                      action: handleUpdateExpenseClick,
                    },
                    {
                      name: 'delete',
                      action: () => {},
                    },
                  ]}
                />
              </Box>
            </Td>
          </Tr>
        </TBody>
      </Table>
    </Box>
  );
}
