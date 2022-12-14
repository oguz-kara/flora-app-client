import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import TextArea from '../TextArea';
import Button from '../Button';

export default function ExpenseForm({ onSubmit, title = '', ...props }) {
  return (
    <div className="add-brand-form" {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <Label>Expense type (*):</Label>
          <Select
            fullWidth
            placeholder="Enter expense type like personal or store related expenses..."
          />
        </InputContainer>
        <InputContainer>
          <Label>Name (*):</Label>
          <TextBox
            fullWidth
            placeholder="Add expense name like accounting or taxes..."
          />
        </InputContainer>
        <InputContainer>
          <Label>Description (*):</Label>
          <TextArea
            fullWidth
            placeholder="Add expense description like interest or send money to children..."
          />
        </InputContainer>
        <InputContainer>
          <Label>Expense amount (*):</Label>
          <TextBox fullWidth placeholder="Expense amount for example $100" />
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
