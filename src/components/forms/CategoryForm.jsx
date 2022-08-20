import Button from '../Button';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import TextArea from '../TextArea';
import { useFormik } from 'formik';
import categorySchema from '../../schemas/category-schema';
import ValidationErrorText from '../ValidationErrorText';

export default function CategoryForm({
  onSubmit,
  pending = false,
  title = '',
  ...props
}) {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: categorySchema,
    onSubmit: (values, { resetForm }) => {
      if (onSubmit) onSubmit(values);
      if (formik.isValid) resetForm();
    },
  });

  return (
    <div className="add-category-form" {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={formik.handleSubmit}>
        <InputContainer>
          <Label>Name (*):</Label>
          <TextBox
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            fullWidth
            placeholder="Add category name..."
          />
          <ValidationErrorText formik={formik} name="name" />
        </InputContainer>
        <InputContainer>
          <Label>Description (*):</Label>
          <TextArea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            fullWidth
            placeholder="Add category description..."
          />
          <ValidationErrorText formik={formik} name="description" />
        </InputContainer>
        <InputContainer>
          <Button className="bg-primary-color" type="submit" pending={pending}>
            SUBMIT
          </Button>
        </InputContainer>
      </FormContainer>
    </div>
  );
}
