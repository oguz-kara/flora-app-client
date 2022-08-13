import { useState } from 'react';
import Modal from '../Modal';
import SaleListFinalForm from './SaleListFinalForm';
import { FormContainer, InputContainer } from '../Container';
import TableWithInputs from '../TableWithInputs';
import Label from '../Label';

export default function SaleListForm({ children, ...props }) {
  const [activeSaleListFinalForm, setActiveSaleListFinalForm] = useState(false);

  const handleSaleListFinalClick = (e) => {
    e.preventDefault();
    setActiveSaleListFinalForm(true);
  };

  const handleSaleListFinalFormSubmit = (e) => {
    e.preventDefault();
    setActiveSaleListFinalForm(false);
  };
  return (
    <FormContainer {...props}>
      <Modal
        active={activeSaleListFinalForm}
        setActive={setActiveSaleListFinalForm}
      >
        <SaleListFinalForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleSaleListFinalFormSubmit(e)}
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
        <button
          onClick={handleSaleListFinalClick}
          className="submit-form-button"
          type="submit"
        >
          SUBMIT
        </button>
      </InputContainer>
    </FormContainer>
  );
}
