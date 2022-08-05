import '../../style/add-category-form-modal.scss';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputGroup } from '../Container';
import { useState } from 'react';
import TextArea from '../TextArea';

export default function AddCategoryForm(props) {
  const [open, setOpen] = useState(true);

  const getClassList = () => {
    return open ? 'add-category-form-modal' : 'add-category-form-modal none';
  };

  const openModal = () => {
    if (!open) setOpen(true);
  };

  const closeModal = () => {
    if (open) setOpen(false);
  };

  return (
    <div className={getClassList()}>
      <div
        className="add-category-modal-overlay"
        onClick={() => closeModal()}
      ></div>
      <FormContainer>
        <InputGroup>
          <Label>Name (*):</Label>
          <TextBox fullWidth placeholder="Add category name..." />
        </InputGroup>
        <InputGroup>
          <Label>Description (*):</Label>
          <TextArea fullWidth placeholder="Add category description..." />
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
