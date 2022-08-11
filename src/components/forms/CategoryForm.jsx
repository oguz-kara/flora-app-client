import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import TextArea from '../TextArea';

export default function CategoryForm({ onSubmit, title = '', ...props }) {
  return (
    <div className="add-category-form" {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <Label>Name (*):</Label>
          <TextBox fullWidth placeholder="Add category name..." />
        </InputContainer>
        <InputContainer>
          <Label>Description (*):</Label>
          <TextArea fullWidth placeholder="Add category description..." />
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
