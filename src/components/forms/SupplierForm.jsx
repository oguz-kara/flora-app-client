import ValidationErrorText from '../../components/ValidationErrorText';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import Button from '../Button';
import { useFormik } from 'formik';
import supplierSchema from '../../schemas/supplier-schema';

export default function SupplierForm({ onSubmit, title = '', ...props }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      companyName: '',
      phoneNumber: '',
      credit: '',
    },
    validationSchema: supplierSchema,
    onSubmit: (values, { resetForm }) => {
      if (onSubmit) onSubmit(values);
      if (formik.isValid) resetForm();
    },
  });
  return (
    <div className="add-supplier-form" {...props}>
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
            placeholder="Add supplier name..."
          />
        </InputContainer>
        <InputContainer>
          <Label>Company name (?):</Label>
          <TextBox
            id="companyName"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            fullWidth
            placeholder="Add supplier company name..."
          />
          <ValidationErrorText formik={formik} name="companyName" />
        </InputContainer>
        <InputContainer>
          <Label>Credit (*):</Label>
          <TextBox
            id="credit"
            name="credit"
            value={formik.values.credit}
            onChange={formik.handleChange}
            fullWidth
            placeholder="Add total credit / total debth to supplier..."
          />
          <ValidationErrorText formik={formik} name="credit" />
        </InputContainer>
        <InputContainer>
          <Label>Phone number (?):</Label>
          <TextBox
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            fullWidth
            placeholder="Add phone number of supplier..."
          />
          <ValidationErrorText formik={formik} name="phoneNumber" />
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
