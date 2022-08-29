import Button from '../Button';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import TextArea from '../TextArea';
import { useFormik } from 'formik';
import unitSchema from '../../schemas/unit-schema';
import ValidationErrorText from '../ValidationErrorText';

export default function UnitForm({
  onSubmit,
  pending = false,
  title = '',
  ...props
}) {
  const formik = useFormik({
    initialValues: {
      name: '',
      value: '',
    },
    validationSchema: unitSchema,
    onSubmit: (values, { resetForm }) => {
      if (onSubmit) onSubmit(values);
      if (formik.isValid) resetForm();
    },
  });

  return (
    <div className="add-unit-form" {...props}>
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
            placeholder="Add unit name..."
          />
          <ValidationErrorText formik={formik} name="name" />
        </InputContainer>
        <InputContainer>
          <Label>Value (*):</Label>
          <TextBox
            id="value"
            name="value"
            value={formik.values.value}
            onChange={formik.handleChange}
            fullWidth
            placeholder="Add unit value..."
          />
          <ValidationErrorText formik={formik} name="value" />
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
