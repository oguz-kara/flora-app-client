import { useState } from 'react';
import Modal from '../Modal';
import SalesListFinalForm from './SaleListFinalForm';
import { FormContainer, InputContainer } from '../Container';
import TableWithInputs from '../TableWithInputs';
import Label from '../Label';
import Button from '../Button';

export default function SaleListForm({ children, ...props }) {
  const [activeSalesListForm, setActiveSalesListForm] = useState(false);

  const handleSalesListClick = (e) => {
    e.preventDefault();
    setActiveSalesListForm(true);
  };

  const handleSalesListFormSubmit = (e) => {
    e.preventDefault();
    setActiveSalesListForm(false);
  };
  return (
    <FormContainer {...props}>
      <Modal
        active={activeSalesListForm}
        setActive={setActiveSalesListForm}
      >
        <SalesListFinalForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleSalesListFormSubmit(e)}
          title="-> Update supplier form"
          className="card"
        />
      </Modal>
      <InputContainer>
        <Label>Enter products (*):</Label>
        <TableWithInputs
          headers={[
            { name: 'barcode', input: true },
            { name: 'name', input: true },
            { name: 'unit', input: true },
            { name: 'qty', input: true },
            { name: 'supplier price', input: false },
            { name: 'price', input: false },
            { name: 'profit', input: false },
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
        <Button
          onClick={handleSalesListClick}
          className="bg-primary-color"
          type="submit"
        >
          SUBMIT
        </Button>
      </InputContainer>
    </FormContainer>
  );
}
