import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';

export default function SupplierForm({ onSubmit, title = '', ...props }) {
  return (
    <div className="add-supplier-form" {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <Label>Name (*):</Label>
          <TextBox fullWidth placeholder="Add supplier name..." />
        </InputContainer>
        <InputContainer>
          <Label>Company name (?):</Label>
          <TextBox fullWidth placeholder="Add supplier company name..." />
        </InputContainer>
        <InputContainer>
          <Label>Credit (*):</Label>
          <TextBox
            fullWidth
            placeholder="Add total credit / total debth to supplier..."
          />
        </InputContainer>
        <InputContainer>
          <Label>Phone number (?):</Label>
          <TextBox fullWidth placeholder="Add phone number of supplier..." />
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
