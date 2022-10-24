import Modal from '../Modal';
import Label from '../Label';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import AddNewSupplierForm from './SupplierForm';
import TextArea from '../TextArea';
import Button from '../Button';

export default function SupplierPurchaseForm() {
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
            <div className="flex">
              <Select
                placeholder="Select a supplier name..."
                options={[
                  { value: '1', label: 'Unal Kuafor' },
                  { value: '2', label: 'Meral able' },
                ]}
              ></Select>
              <Button
                className="bg-secondary-color rounded-r"
                data-tip="add new supplier"
                onClick={handleAddNewSupplierClick}
              >
                +
              </Button>
              <ReactTooltip effect="solid" />
            </div>
          </InputContainer>
          <InputContainer>
            <Label>Purchase description (*):</Label>
            <TextArea fullWidth placeholder="Add description for purchase..." />
          </InputContainer>
          <InputContainer>
            <Label>Product list (*):</Label>
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
