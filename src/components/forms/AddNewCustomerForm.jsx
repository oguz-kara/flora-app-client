import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import TextArea from '../TextArea';

export default function AddNewCustomerForm({ onSubmit, title = '', ...props }) {
  return (
    <div style={{ width: '100%' }} {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <Label>Name (*):</Label>
          <TextBox fullWidth placeholder="Add customer name..." />
        </InputContainer>
        <InputContainer>
          <Label>Phone number (*):</Label>
          <TextBox fullWidth placeholder="Add customer phone number..." />
        </InputContainer>
        <InputContainer>
          <Label>Total credit (*):</Label>
          <TextBox
            type="number"
            fullWidth
            placeholder="Add customer total credit / total depth to the store..."
          />
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
