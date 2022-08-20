import ValidationErrorText  from '../../components/ValidationErrorText';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import Button from '../Button';
import { useFormik } from 'formik';
import brandSchema from '../../schemas/brand-schema';

export default function BrandForm({ onSubmit, title = '', ...props }) {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: brandSchema,
    onSubmit: (values, { resetForm }) => {
      if (onSubmit) onSubmit(values);
      if (formik.isValid) resetForm();
    },
  });
  return (
    <div className="add-brand-form" {...props}>
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
            placeholder="Add brand name..."
          />
          <ValidationErrorText formik={formik} name="name" />
        </InputContainer>
        <InputContainer>
          <Button
            onClick={() => {
              console.log(formik.isValid);
              console.log(formik.errors);
            }}
            className="bg-primary-color"
            type="submit"
          >
            SUBMIT
          </Button>
        </InputContainer>
      </FormContainer>
    </div>
  );
}
