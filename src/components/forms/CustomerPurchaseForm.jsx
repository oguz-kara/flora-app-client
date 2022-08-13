import Modal from '../Modal';
import Label from '../Label';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import TableWithInputs from '../TableWithInputs';
import AddNewCustomerForm from './CustomerForm';
import TextArea from '../TextArea';
import Flex from '../Flex';

export default function CustomerPurchaseForm() {
  const [activeAddCustomerForm, setActiveAddCustomerForm] = useState(false);

  const handleNewCustomerFormSubmit = () => {
    setActiveAddCustomerForm(false);
  };

  const handleAddNewCustomerClick = () => {
    setActiveAddCustomerForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal
        active={activeAddCustomerForm}
        setActive={setActiveAddCustomerForm}
      >
        <AddNewCustomerForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleNewCustomerFormSubmit(e)}
          title="-> New customer form"
          className="card"
        />
      </Modal>
      <div className="add-new-order-form">
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Customer name (*):</Label>
            <Flex>
              <Select
                placeholder="Select a customer name..."
                options={[
                  { value: '1', label: 'Unal Kuafor' },
                  { value: '2', label: 'Meral able' },
                ]}
              ></Select>
              <button
                data-tip="Add new customer"
                className="add-new-button"
                onClick={handleAddNewCustomerClick}
              >
                +
              </button>
              <ReactTooltip effect="solid" />
            </Flex>
          </InputContainer>
          <InputContainer>
            <Label>Description (*):</Label>
            <TextArea
              fullWidth
              placeholder="Add description why is it happening ? "
            />
          </InputContainer>
          <InputContainer>
            <Label>Product list (*):</Label>
            <TableWithInputs
              headers={[
                { name: 'barcode', input: true },
                { name: 'name', input: true },
                { name: 'unit', input: true },
                { name: 'qty', input: true },
                { name: 'supplier price', input: false },
                { name: 'sale price', input: false },
              ]}
              initialValues={{
                id: Date.now(),
                name: '',
                qty: '',
                description: '',
              }}
            />
          </InputContainer>
          <InputContainer>
            <button className="submit-form-button" type="submit">
              SUBMIT
            </button>
          </InputContainer>
        </FormContainer>
      </div>
    </>
  );
}
