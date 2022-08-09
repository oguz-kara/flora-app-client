import Table, { THead, Tr, Th, TBody, Td } from '../components/Table';
import { Link } from 'react-router-dom';

export default function ProductSaleList() {
  return (
    <div className="expense-list">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Sales {'>'} Product sales
      </h4>
      <Table>
        <THead>
          <Tr>
            <Th>#type</Th>
            <Th>#name</Th>
            <Th>#description</Th>
            <Th>#price</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Personal</Td>
            <Td>Food money</Td>
            <Td>I buy a sandvich</Td>
            <Td>₺69</Td>
          </Tr>
        </TBody>
      </Table>
    </div>
  );
}
