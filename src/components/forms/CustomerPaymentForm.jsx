import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import Button from '../Button';

export default function CustomerPaymentForm({
  onSubmit,
  title = '',
  ...props
}) {
  return (
    <div className="add-new-customer-payment-form" {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <Label>Customer name (*):</Label>
          <Select
            placeholder="Select a customer name..."
            options={[
              { value: '1', label: 'Meral aba' },
              { value: '2', label: 'Ilker abi' },
            ]}
          ></Select>
        </InputContainer>
        <InputContainer>
          <Label>Payment amount (*):</Label>
          <TextBox fullWidth placeholder="Enter payment amount..." />
        </InputContainer>
        <InputContainer>
          <Button className="bg-primary-color" type="submit">
            SUBMIT
          </Button>
        </InputContainer>
      </FormContainer>
    </div>
  );
}
