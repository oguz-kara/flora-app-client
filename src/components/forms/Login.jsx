import '../../style/login.scss';
import React from 'react';
import Button from '../Button';
import { FormContainer } from '../Container';
import TextBox from '../TextBox';
import Box from '../Box';
import Label from '../Label';
import Typography from '../Typography';

const Login = ({ active, onSubmit }) => {
  return (
    <div className={active ? 'login active' : 'login'}>
      <FormContainer
        className="flex flex-col items-center justify-center h-full gap-5"
        onSubmit={async (e) => {
          e.preventDefault();
          onSubmit({
            email: 'dev.hasan.kara@gmail.com',
            password: '123',
          });
        }}
      >
        <Typography variant="h3">Login</Typography>
        <Box className="w-full md:w-1/2 lg:w-1/3">
          <Label>Email</Label>
          <TextBox
            className="w-full"
            type="text"
            defaultValue="dev.hasan.kara@gmail.com"
          />
        </Box>
        <Box className="w-full md:w-1/2 lg:w-1/3">
          <Label>Password</Label>
          <TextBox className="w-full" type="password" defaultValue="123" />
        </Box>
        <button
          className="bg-primary-color w-full md:w-1/2 lg:w-1/3 p-2 rounded"
          type="submit"
        >
          Login
        </button>
      </FormContainer>
    </div>
  );
};

export default Login;
