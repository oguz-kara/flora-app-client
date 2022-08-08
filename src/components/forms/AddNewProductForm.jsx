import RichEditor from '../RichEditor';
import '../../style/add-product-form.scss';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import FileInputPreview from '../FileInputPreview';
import AddCategoryForm from './AddNewCategoryForm';
import AddSupplierForm from './AddNewSupplierForm';
import AddBrandForm from './AddNewBrandForm';
import Modal from '../Modal';
import { useState } from 'react';

export default function AddProductForm() {
  const [activeAddCategoryForm, setActiveAddCategoryForm] = useState(false);
  const [activeAddBrandForm, setActiveAddBrandForm] = useState(false);
  const [activeAddSupplierForm, setActiveAddSupplierForm] = useState(false);

  const handleAddNewCategoryClick = (e) => {
    e.preventDefault();
    setActiveAddCategoryForm(true);
  };

  const handleCategoryFormSubmit = (e) => {
    e.preventDefault();
    setActiveAddCategoryForm(false);
  };

  const handleAddNewBrandClick = (e) => {
    e.preventDefault();
    setActiveAddBrandForm(true);
  };

  const handleBrandFormSubmit = (e) => {
    e.preventDefault();
    setActiveAddBrandForm(false);
  };

  const handleAddNewSupplierClick = (e) => {
    e.preventDefault();
    setActiveAddSupplierForm(true);
  };

  const handleSupplierFormSubmit = (e) => {
    e.preventDefault();
    setActiveAddSupplierForm(false);
  };

  return (
    <div className="add-product-form">
      <Modal
        active={activeAddCategoryForm}
        setActive={setActiveAddCategoryForm}
      >
        <AddCategoryForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleCategoryFormSubmit(e)}
          title="-> New category form"
        />
      </Modal>
      <Modal active={activeAddBrandForm} setActive={setActiveAddBrandForm}>
        <AddBrandForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleBrandFormSubmit(e)}
          title="-> New brand form"
        />
      </Modal>
      <Modal
        active={activeAddSupplierForm}
        setActive={setActiveAddSupplierForm}
      >
        <AddSupplierForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleSupplierFormSubmit(e)}
          title="-> New supplier form"
        />
      </Modal>
      <FormContainer>
        <InputContainer>
          <Label>Barcode (?):</Label>
          <TextBox fullWidth placeholder="Barcode, qrcode etc..." />
        </InputContainer>
        <InputContainer>
          <Label>Product name (*):</Label>
          <TextBox fullWidth placeholder="Descriptive product name..." />
        </InputContainer>
        <InputContainer>
          <Label>Category name (*):</Label>
          <div className="flex-box">
            <Select
              placeholder="Select a product category. If category not exists you can create it by pressing '+' button."
              options={[
                { value: 'mangal', label: 'Mangal' },
                { value: 'cicek', label: 'Cicek' },
              ]}
            ></Select>
            <button
              data-tip="Add new category"
              className="add-new-button"
              onClick={handleAddNewCategoryClick}
            >
              +
            </button>
            <ReactTooltip effect="solid" />
          </div>
        </InputContainer>
        <InputContainer>
          <Label>Supplier name (*):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a product supplier. If supplier not exists you can create it by pressing '+' button."
              options={[
                { value: 1, label: 'Aydin Corp' },
                { value: 2, label: 'Ilker Arma' },
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
          <Label>Brand name (*):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a product brand. If brand not exists you can create it by pressing '+' button."
              options={[
                { value: 1, label: 'WD40' },
                { value: 2, label: '1051' },
              ]}
            ></Select>
            <button
              data-tip="Add new brand"
              className="add-new-button"
              onClick={handleAddNewBrandClick}
            >
              +
            </button>
            <ReactTooltip effect="solid" />
          </div>
        </InputContainer>
        <InputContainer>
          <Label>Supplier price (*):</Label>
          <TextBox
            type="number"
            fullWidth
            placeholder="Enter supplier price..."
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
          />
        </InputContainer>
        <InputContainer>
          <Label>Main unit name (*):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a main unit. If main unit not exists you can create it by pressing '+' button."
              options={[
                { value: 1, label: 'Quantity' },
                { value: 2, label: 'Meters' },
                { value: 3, label: 'Package' },
              ]}
            ></Select>
            <button data-tip="Add new unit" className="add-new-button">
              +
            </button>
            <ReactTooltip effect="solid" />
          </div>
        </InputContainer>
        <InputContainer>
          <Label>Main unit price (*):</Label>
          <TextBox
            type="number"
            fullWidth
            placeholder="Enter price for main unit..."
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
          />
        </InputContainer>
        <InputContainer>
          <Label>Add sub units (?):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a sub units. If sub units not exists you can create it by pressing '+' button."
              isMulti
              options={[
                { value: 1, label: 'Total(25m)' },
                { value: 2, label: 'Package(100Qty)' },
              ]}
            ></Select>
          </div>
        </InputContainer>
        <InputContainer>
          <Label>Sub unit price (*):</Label>
          <TextBox
            type="number"
            fullWidth
            placeholder="Enter price for sub unit..."
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
          />
        </InputContainer>
        <InputContainer>
          <Label>Quantity (*):</Label>
          <TextBox
            name="amount"
            type="number"
            fullWidth
            placeholder="Enter quantity based on main unit, example: main unit = meters, quantity = 25, stock = 25 meters total quantity..."
          />
        </InputContainer>
        <InputContainer>
          <Label>Stock keeping unit (*):</Label>
          <TextBox name="amount" fullWidth placeholder="Enter sku..." />
        </InputContainer>
        <InputContainer>
          <Label>Tax percentage (*):</Label>
          <TextBox
            name="amount"
            type="number"
            fullWidth
            placeholder="Enter tax percentage..."
          />
        </InputContainer>
        <InputContainer>
          <FileInputPreview />
        </InputContainer>
        <InputContainer>
          <RichEditor />
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
