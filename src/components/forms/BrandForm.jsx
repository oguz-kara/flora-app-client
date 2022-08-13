import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import TextArea from '../TextArea';
import Button from '../Button';

export default function BrandForm({ onSubmit, title = '', ...props }) {
  return (
    <div className="add-brand-form" {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <Label>Name (*):</Label>
          <TextBox fullWidth placeholder="Add brand name..." />
        </InputContainer>
        <InputContainer>
          <Button className="bg-primary-color" type="submit">SUBMIT</Button>
        </InputContainer>
      </FormContainer>
    </div>
  );
}
