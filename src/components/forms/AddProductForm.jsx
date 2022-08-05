import RichEditor from '../RichEditor';
import '../../style/add-product-form.scss';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputGroup } from '../Container';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import FileInputPreview from '../FileInputPreview';
import AddCategoryFormModal from './AddCategoryFormModal';

export default function AddProductForm() {
  return (
    <div className="add-product-form">
      <AddCategoryFormModal />
      <FormContainer>
        <InputGroup>
          <Label>Barcode (?):</Label>
          <TextBox fullWidth placeholder="Barcode, qrcode etc..." />
        </InputGroup>
        <InputGroup>
          <Label>Product name (*):</Label>
          <TextBox fullWidth placeholder="Descriptive product name..." />
        </InputGroup>
        <InputGroup>
          <Label>Category name (*):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a product category. If category not exists you can create it by pressing '+' button."
              options={[
                { value: 'mangal', label: 'Mangal' },
                { value: 'cicek', label: 'Cicek' }
              ]}
            ></Select>
            <button data-tip="Add new category" className="add-new-button">
              +
            </button>
            <ReactTooltip effect="solid" />
          </div>
        </InputGroup>
        <InputGroup>
          <Label>Supplier name (*):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a product supplier. If supplier not exists you can create it by pressing '+' button."
              options={[
                { value: 1, label: 'Aydin Corp' },
                { value: 2, label: 'Ilker Arma' }
              ]}
            ></Select>
            <button data-tip="Add new supplier" className="add-new-button">
              +
            </button>
            <ReactTooltip effect="solid" />
          </div>
        </InputGroup>
        <InputGroup>
          <Label>Brand name (*):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a product brand. If brand not exists you can create it by pressing '+' button."
              options={[
                { value: 1, label: 'WD40' },
                { value: 2, label: '1051' }
              ]}
            ></Select>
            <button data-tip="Add new brand" className="add-new-button">
              +
            </button>
            <ReactTooltip effect="solid" />
          </div>
        </InputGroup>
        <InputGroup>
          <Label>Supplier price (*):</Label>
          <TextBox
            type="number"
            fullWidth
            placeholder="Enter supplier price..."
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
          />
        </InputGroup>
        <InputGroup>
          <Label>Main unit name (*):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a main unit. If main unit not exists you can create it by pressing '+' button."
              options={[
                { value: 1, label: 'Quantity' },
                { value: 2, label: 'Meters' },
                { value: 3, label: 'Package' }
              ]}
            ></Select>
            <button data-tip="Add new unit" className="add-new-button">
              +
            </button>
            <ReactTooltip effect="solid" />
          </div>
        </InputGroup>
        <InputGroup>
          <Label>Main unit price (*):</Label>
          <TextBox
            type="number"
            fullWidth
            placeholder="Enter price for main unit..."
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
          />
        </InputGroup>
        <InputGroup>
          <Label>Add sub units (?):</Label>
          <div className="actions-container">
            <Select
              placeholder="Select a sub units. If sub units not exists you can create it by pressing '+' button."
              isMulti
              options={[
                { value: 1, label: 'Total(25m)' },
                { value: 2, label: 'Package(100Qty)' }
              ]}
            ></Select>
          </div>
        </InputGroup>
        <InputGroup>
          <Label>Sub unit price (*):</Label>
          <TextBox
            type="number"
            fullWidth
            placeholder="Enter price for sub unit..."
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
          />
        </InputGroup>
        <InputGroup>
          <Label>Quantity (*):</Label>
          <TextBox
            name="amount"
            type="number"
            fullWidth
            placeholder="Enter quantity based on main unit, example: main unit = meters, quantity = 25, stock = 25 meters total quantity..."
          />
        </InputGroup>
        <InputGroup>
          <Label>Stock keeping unit (*):</Label>
          <TextBox name="amount" fullWidth placeholder="Enter sku..." />
        </InputGroup>
        <InputGroup>
          <Label>Tax percentage (*):</Label>
          <TextBox
            name="amount"
            type="number"
            fullWidth
            placeholder="Enter tax percentage..."
          />
        </InputGroup>
        <InputGroup>
          <FileInputPreview />
        </InputGroup>
        <InputGroup>
          <RichEditor />
        </InputGroup>
        <InputGroup>
          <button className="submit-form-button" type="submit">
            SUBMIT
          </button>
        </InputGroup>
      </FormContainer>
    </div>
  );
}
