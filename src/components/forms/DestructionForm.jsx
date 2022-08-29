import Label from '../Label';
import { FormContainer, InputContainer } from '../Container';
import { useState } from 'react';
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
