import Flex from '../Flex';
import Button from '../Button';
import ValidationErrorText from '../ValidationErrorText';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import { useFormik } from 'formik';
import React from 'react';
import verifyPasswordSchema from '../../schemas/verify-password-schema';

export default function VerifyPasswordForm({
  onSubmit,
  pending = false,
  title = '',
  onCancelClick,
  ...props
}) {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: verifyPasswordSchema,
    onSubmit: (values, { resetForm }) => {
      if (onSubmit) onSubmit(values);
      if (formik.isValid) resetForm();
    },
  });

  return (
    <div className="add-verifyPassword-form" {...props}>
      <h3 className="section-title">{title}</h3>
      <FormContainer onSubmit={formik.handleSubmit}>
        <InputContainer>
          <Label>Password (*):</Label>
          <TextBox
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            fullWidth
            placeholder="Authorized password..."
          />
          <ValidationErrorText formik={formik} name="password" />
        </InputContainer>
        <InputContainer>
          <Flex className="justify-end">
            <Button
              className="bg-primary-color rounded p-1 mr-2"
              variant="small"
              type="button"
              onClick={() => {
                if (onCancelClick) onCancelClick();
              }}
            >
              Cancel
            </Button>
            <Button
              // disabled={!(formik.values.password.length > 0)}
              className="bg-danger-color rounded"
              type="submit"
              variant="small"
            >
              Delete
            </Button>
          </Flex>
        </InputContainer>
      </FormContainer>
    </div>
  );
}
