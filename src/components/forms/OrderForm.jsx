import Modal from '../Modal';
import Label from '../Label';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import DatePicker from '../DatePicker';
import { useState } from 'react';
import TableWithInputs from '../TableWithInputs';
import AddNewCustomerForm from './CustomerForm';

export default function OrderForm() {
  const [dateTobeDelivered, setDateTobeDelivered] = useState(new Date());
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
            <div className="flex-box">
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
            </div>
          </InputContainer>
          <InputContainer>
            <Label>Date to be delivered (*):</Label>
            <DatePicker
              selected={dateTobeDelivered}
              onChange={(date) => setDateTobeDelivered(date)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Order list (*):</Label>
            <TableWithInputs
              headers={[
                { name: 'name', input: true },
                { name: 'qty', input: true },
                { name: 'description', input: false },
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
