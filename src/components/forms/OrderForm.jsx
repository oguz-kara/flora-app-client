import Modal from '../Modal';
import Label from '../Label';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import DatePicker from '../DatePicker';
import { useState } from 'react';
import AddNewOrderForm from './CustomerForm';
import Button from '../Button';

export default function OrderForm() {
  const [dateTobeDelivered, setDateTobeDelivered] = useState(new Date());
  const [activeAddCustomerForm, setActiveAddCustomerForm] = useState(false);

  const handleNewOrderFormSubmit = () => {
    setActiveAddCustomerForm(false);
  };

  const handleAddNewOrderClick = () => {
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
        <AddNewOrderForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleNewOrderFormSubmit(e)}
          title="-> New customer form"
          className="card"
        />
      </Modal>
      <div className="add-new-order-form">
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Customer name (*):</Label>
            <div className="flex">
              <Select
                placeholder="Select a customer name..."
                options={[
                  { value: '1', label: 'Unal Kuafor' },
                  { value: '2', label: 'Meral able' },
                ]}
              ></Select>
              <Button
                className="bg-secondary-color rounded-r"
                type="submit"
                onClick={handleAddNewOrderClick}
                pending
              >
                +
              </Button>
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
          </InputContainer>
          <InputContainer>
            <Button className="bg-primary-color" type="submit">
              SUBMIT
            </Button>
          </InputContainer>
        </FormContainer>
      </div>
    </>
  );
}
