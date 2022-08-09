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
      <Modal
        active={activeAddSupplierForm}
        setActive={setActiveAddSupplierForm}
      >
        <AddNewSupplierForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleNewSupplierFormSubmit(e)}
          title="-> New Supplier form"
          className="card"
        />
      </Modal>
      <div className="add-new-order-form">
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Supplier name (*):</Label>
            <div className="flex-box">
              <Select
                placeholder="Select a supplier name..."
                options={[
                  { value: '1', label: 'Unal Kuafor' },
                  { value: '2', label: 'Meral able' },
                ]}
              ></Select>
              <button
                data-tip="Add new supplier"
                className="add-new-button"
                onClick={handleAddNewSupplierClick}
              >
                +
              </button>
              <ReactTooltip effect="solid" />
            </div>
          </InputContainer>
          <InputContainer>
            <Label>Purchase description (*):</Label>
            <TextArea fullWidth placeholder="Add description for purchase..." />
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
