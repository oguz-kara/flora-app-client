import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';

export default function AddNewSupplierPaymentForm({
  onSubmit,
  title = '',
  ...props
}) {
  return (
    <div className="add-new-supplier-payment-form" {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <Label>Company name (*):</Label>
          <Select
            placeholder="Select a supplier name..."
            options={[
              { value: '1', label: 'Arma' },
              { value: '2', label: 'Omer Hirdavat' },
            ]}
          ></Select>
        </InputContainer>
        <InputContainer>
          <Label>Payment amount (*):</Label>
          <TextBox fullWidth placeholder="Enter payment amount..." />
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
