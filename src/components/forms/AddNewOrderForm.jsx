import Label from '../Label';
import { FormContainer, InputContainer } from '../Container';
import '../../style/add-new-order-form.scss';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import DatePicker from '../DatePicker';
import { useState } from 'react';
import TableWithInputs from '../TableWithInputs';

export default function AddNewOrderForm() {
  const [dateTobeDelivered, setDateTobeDelivered] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
              // onClick={handleAddNewCategoryClick}
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
            headers={['name', 'qty', 'description']}
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
  );
}
