import Table, { THead, Tr, Th, TBody, Td } from '../components/Table';
import ExpenseForm from '../components/forms/ExpenseForm';
import Box from '../components/Box';
import DropDownActions from '../components/DropDownActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function ProductSaleList() {
  const [activeUpdateExpenseForm, setActiveUpdateExpenseForm] = useState(false);

  const handleUpdateExpenseClick = (e) => {
    e.preventDefault();
    setActiveUpdateExpenseForm(true);
  };

  const handleUpdateExpenseFormSubmit = (e) => {
    e.preventDefault();
    setActiveUpdateExpenseForm(false);
  };

  return (
    <div className="expense-list">
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
    </div>
  );
}
