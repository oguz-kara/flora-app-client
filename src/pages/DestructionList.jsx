import DestructionForm from '../components/forms/DestructionForm';
import { useState } from 'react';
import Modal from '../components/Modal';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import Box from '../components/Box';
import DropDownActions from '../components/DropDownActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function DestructionList({ props }) {
  const [activeUpdateDestructionForm, setActiveUpdateDestructionForm] =
    useState(false);

  const handleUpdateDestructionClick = (e) => {
    e.preventDefault();
    setActiveUpdateDestructionForm(true);
  };

  const handleUpdateDestructionFormSubmit = (e) => {
    e.preventDefault();
    setActiveUpdateDestructionForm(false);
  };
  return (
    <Box className="min-h-screen">
      <Modal
        active={activeUpdateDestructionForm}
        setActive={setActiveUpdateDestructionForm}
      >
        <DestructionForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleUpdateDestructionFormSubmit(e)}
          title="-> Update supplier form"
          className="card"
        />
      </Modal>
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Destructions {'>'} Destruction list
      </h4>
      <ul style={{ listStyleType: 'none' }}>
        <div className="font-bold border-b border-solid border-primary-color">17 July 2021, 21:00 pm</div>
        <li style={{ position: 'relative' }}>
          <Table style={{ padding: '30px' }}>
            <THead>
              <Tr>
                <Th>#name</Th>
                <Th>#qty</Th>
                <Th>#supplier price</Th>
                <Th>#sale price</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>sardunya</Td>
                <Td>2</Td>
                <Td>10</Td>
                <Td>15</Td>
                <Td>
                  <Box>
                    <DropDownActions
                      header={
                        <FontAwesomeIcon icon={faChevronDown} size="sm" />
                      }
                      data={[
                        {
                          name: 'update',
                          action: handleUpdateDestructionClick,
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
              <Tr>
                <Td>sardunya</Td>
                <Td>2</Td>
                <Td>10</Td>
                <Td>15</Td>
                <Td>
                  <Box>
                    <DropDownActions
                      header={
                        <FontAwesomeIcon icon={faChevronDown} size="sm" />
                      }
                      data={[
                        {
                          name: 'update',
                          action: handleUpdateDestructionClick,
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
              <Tr>
                <Td>sardunya</Td>
                <Td>2</Td>
                <Td>10</Td>
                <Td>15</Td>
                <Td>
                  <Box>
                    <DropDownActions
                      header={
                        <FontAwesomeIcon icon={faChevronDown} size="sm" />
                      }
                      data={[
                        {
                          name: 'update',
                          action: handleUpdateDestructionClick,
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
        </li>
      </ul>
    </Box>
  );
}
