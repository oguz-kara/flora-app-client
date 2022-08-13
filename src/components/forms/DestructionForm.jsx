import Label from '../Label';
import { FormContainer, InputContainer } from '../Container';
import { useState } from 'react';
import TableWithInputs from '../TableWithInputs';
import Box from '../Box';
import Button from '../Button';

export default function DestructionForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Box className="background-dark p-30">
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Destruction list (*):</Label>
            <TableWithInputs
              headers={[
                { name: 'barcode', input: true },
                { name: 'name', input: true },
                { name: 'unit', input: true },
                { name: 'qty', input: true },
              ]}
              initialValues={{
                id: Date.now(),
                barcode: '',
                name: '',
                unit: '',
                qty: '',
              }}
            />
          </InputContainer>
          <InputContainer>
          <Button className="bg-primary-color" type="submit">
            SUBMIT
          </Button>
          </InputContainer>
        </FormContainer>
      </Box>
    </>
  );
}
