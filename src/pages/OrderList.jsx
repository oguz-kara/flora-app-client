import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import '../style/order-list.scss';

export default function OrderList({ props }) {
  return (
    <div className="order-list">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Sales {'>'} Sales list
      </h4>
      <ul className="order-list__list">
        <li className="order-list__list-item">
          <Table className="order-list__list-item__left">
            <div className="small-title">Customer Info</div>
            <div className="order-list__date">10 July 2021, 21:00 pm</div>
            <TBody>
              <Tr className="order-list__info">
                <Td className="order-list__info__title">
                  Date to be delivered
                </Td>
                <Td className="order-list__info__value success-color">
                  17 July 2022
                </Td>
              </Tr>
              <Tr className="order-list__info">
                <Td className="order-list__info__title">Phone number</Td>
                <Td className="order-list__info__value">123 12323 12 12</Td>
              </Tr>
              <Tr className="order-list__info">
                <Td className="order-list__info__title">Credit</Td>
                <Td className="order-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="order-list__list-item__right">
            <div className="small-title" style={{ marginLeft: 15 }}>
              Order List
            </div>
            <Table>
              <THead>
                <Tr>
                  <Th>#name</Th>
                  <Th>#qty</Th>
                  <Th>#description</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>sardunya</Td>
                  <Td>10</Td>
                  <Td>cok guzel bir cicek</Td>
                </Tr>
                <Tr>
                  <Td>sardunya</Td>
                  <Td>10</Td>
                  <Td>cok guzel bir cicek</Td>
                </Tr>
                <Tr>
                  <Td>sardunya</Td>
                  <Td>10</Td>
                  <Td>cok guzel bir cicek</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </li>
      </ul>
    </div>
  );
}
