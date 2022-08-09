import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';

export default function DestructionList({ props }) {
  return (
    <div className="destruction-list">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Destructions {'>'} Destruction list
      </h4>
      <ul style={{ listStyleType: 'none' }}>
        <li style={{ position: 'relative' }}>
          <div className="tag">17 July 2021, 21:00 pm</div>
          <Table style={{ padding: '30px' }}>
            <THead>
              <Tr>
                <Th>#name</Th>
                <Th>#qty</Th>
                <Th>#supplier price</Th>
                <Th>#sale price</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>sardunya</Td>
                <Td>2</Td>
                <Td>10</Td>
                <Td>15</Td>
              </Tr>
              <Tr>
                <Td>sardunya</Td>
                <Td>2</Td>
                <Td>10</Td>
                <Td>15</Td>
              </Tr>
              <Tr>
                <Td>sardunya</Td>
                <Td>2</Td>
                <Td>10</Td>
                <Td>15</Td>
              </Tr>
            </TBody>
          </Table>
        </li>
      </ul>
    </div>
  );
}
