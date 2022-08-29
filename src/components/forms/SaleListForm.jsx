import Select from '../Select';
import { useState } from 'react';
import Modal from '../Modal';
import SalesListFinalForm from './SaleListFinalForm';
import { FormContainer, InputContainer } from '../Container';
import Label from '../Label';
import Button from '../Button';
import Table, { TBody, Td, Th, THead, Tr } from '../Table';
import TextBox from '../TextBox';
import AsyncSelect from '../AsyncSelect';

export default function SaleListForm({ children, ...props }) {
  const [activeSalesListForm, setActiveSalesListForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const converToListProduct = (product) => {
    return {
      barcode: product.barcode,
      name: product.name,
      unit: [
        {
          value: product.unit.main.unitId,
        },
      ],
    };
  };

  const handleSalesListClick = (e) => {
    e.preventDefault();
    setActiveSalesListForm(true);
  };

  const handleSalesListFormSubmit = (e) => {
    e.preventDefault();
    setActiveSalesListForm(false);
  };
  return (
    <FormContainer
      {...props}
      onKeyDown={(e) => {
        if (e.code === 13) {
          e.preventDefault();
          return false;
        }
      }}
    >
      <Modal active={activeSalesListForm} setActive={setActiveSalesListForm}>
        <SalesListFinalForm
          style={{ padding: 20 }}
          onSubmit={(e) => handleSalesListFormSubmit(e)}
          title="-> Update supplier form"
          className="card"
        />
      </Modal>
      <InputContainer>
        <Label>Enter products (*):</Label>
        <Table>
          <THead>
            <Tr>
              <Th>barcode</Th>
              <Th>name</Th>
              <Th>unit</Th>
              <Th>quantity</Th>
              <Th>price</Th>
              <Th>profit</Th>
              <Th>total</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <TextBox className="w-32 max-w-sm" />
              </Td>
              <Td>
                <AsyncSelect className="w-32 max-w-sm h-full" />
              </Td>
              <Td>
                <Select placeholder="" className="w-32 max-w-sm h-full" />
              </Td>
              <Td>
                <TextBox className="w-32 max-w-sm" />
              </Td>
            </Tr>
          </TBody>
        </Table>
      </InputContainer>
      <InputContainer>
        <Button
          onClick={handleSalesListClick}
          className="bg-primary-color"
          type="button"
        >
          SUBMIT
        </Button>
      </InputContainer>
    </FormContainer>
  );
}
