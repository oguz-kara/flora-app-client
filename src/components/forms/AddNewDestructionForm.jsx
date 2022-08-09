import Modal from '../Modal';
import Label from '../Label';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import TableWithInputs from '../TableWithInputs';
import AddNewSupplierForm from './AddNewSupplierForm';
import TextArea from '../TextArea';

export default function AddNewSupplierPurchaseForm() {
  const [activeAddSupplierForm, setActiveAddSupplierForm] = useState(false);

  const handleNewSupplierFormSubmit = () => {
    setActiveAddSupplierForm(false);
  };

  const handleAddNewSupplierClick = () => {
    setActiveAddSupplierForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-new-destruction-form">
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Destruction list (*):</Label>
            <TableWithInputs
              headers={[
                { name: 'barcode', input: true },
                { name: 'name', input: true },
                { name: 'unit', input: true },
                { name: 'qty', input: true },
              ]}
              initialValues={{
                id: Date.now(),
                barcode: '',
                name: '',
                unit: '',
                qty: '',
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
