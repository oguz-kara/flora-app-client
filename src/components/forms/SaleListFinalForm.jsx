import Flex from '../Flex';
import { InputContainer, SubContainer } from '../Container';
import Typography from '../Typography';
import Table, { TBody, Tr, Td } from '../Table';
import Box from '../Box';
import Label from '../Label';
import TextBox from '../TextBox';

export default function SaleListFinalForm() {
  return (
    <Box className="background-dark p-20 br-5 maw-500">
      <Typography variant="h6">List</Typography>
      <Table className="mt-20 mb-20">
        <TBody>
          <Tr>
            <Td>Mangal komuru</Td>
            <Td>2kg</Td>
            <Td className="success-color">+16₺</Td>
          </Tr>
          <Tr>
            <Td>Mangal</Td>
            <Td>2pcs</Td>
            <Td className="success-color">+20₺</Td>
          </Tr>
        </TBody>
      </Table>
      <InputContainer>
        <Label>Received money (*):</Label>
        <TextBox
          fullWidth
          placeholder="Received money that customer gives you."
        />
      </InputContainer>
      <SubContainer>
        <Table>
          <Tr>
            <Td>
              <Typography variant="small primary-color">total</Typography>
            </Td>
            <Td>
              <Typography variant="small">₺100</Typography>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Typography variant="small primary-color">profit</Typography>
            </Td>
            <Td>
              <Typography variant="small">₺36</Typography>
            </Td>
          </Tr>
        </Table>
      </SubContainer>
      <InputContainer>
        <Flex spaceBetween>
          <button className="background-danger p-5 br-5 mr-10">
            <Typography variant="button">cancel</Typography>
          </button>
          <button className="background-success-dark p-5 br-5">
            <Typography variant="button">complete</Typography>
          </button>
        </Flex>
      </InputContainer>
    </Box>
  );
}
