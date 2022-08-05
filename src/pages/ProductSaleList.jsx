import '../style/product-sale-list.scss';
import Table, { THead, Tr, Th, TBody, Td } from '../components/Table';
import { Link } from 'react-router-dom';

export default function ProductSaleList() {
  return (
    <div className="product-sale-list">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Sales {'>'} Product sales
      </h4>
      <Table>
        <THead>
          <Tr>
            <Th>#name</Th>
            <Th>#unit</Th>
            <Th>#qty</Th>
            <Th>#supplier price</Th>
            <Th>#sale price</Th>
            <Th>#profit</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>
              <Link to="/product">Komur</Link>
            </Td>
            <Td>kg</Td>
            <Td>2</Td>
            <Td>₺15</Td>
            <Td>₺20</Td>
            <Td>₺10</Td>
          </Tr>
          <Tr>
            <Td>
              <Link to="/product">Mangal</Link>
            </Td>
            <Td>piece</Td>
            <Td>1</Td>
            <Td>₺100</Td>
            <Td>₺150</Td>
            <Td>₺50</Td>
          </Tr>
          <Tr>
            <Td>
              <Link to="/product">Izgara</Link>
            </Td>
            <Td>piece</Td>
            <Td>2</Td>
            <Td>₺20</Td>
            <Td>₺34</Td>
            <Td>₺28</Td>
          </Tr>
        </TBody>
      </Table>
    </div>
  );
}
