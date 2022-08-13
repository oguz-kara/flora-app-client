import { useState } from 'react';
import Modal from '../Modal';
import ReturnListFinalForm from './ReturnListFinalForm';
import { FormContainer, InputContainer } from '../Container';
import TableWithInputs from '../TableWithInputs';
import Label from '../Label';
import Button from '../Button';

export default function ReturnListForm({ children, ...props }) {
  const [activeReturnListFinalForm, setActiveReturnListFinalForm] = useState(false);

  const handleReturnListFinalClick = (e) => {
    e.preventDefault();
    setActiveReturnListFinalForm(true);
  };

  const handleReturnListFinalFormSubmit = (e) => {
    e.preventDefault();
    setActiveReturnListFinalForm(false);
  };
  return (
    <FormContainer {...props}>
      <Modal
        active={activeReturnListFinalForm}
        setActive={setActiveReturnListFinalForm}
      >
        <ReturnListFinalForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleReturnListFinalFormSubmit(e)}
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
          onClick={handleReturnListFinalClick}
          className="bg-primary-color"
          type="submit"
        >
          SUBMIT
        </Button>
      </InputContainer>
    </FormContainer>
  );
}
