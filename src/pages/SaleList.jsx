import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import '../style/sale-list.scss';

export default function SaleList({ props }) {
  return (
    <div className="sale-list">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Sales {'>'} Sales list
      </h4>
      <ul className="sale-list__list">
        <li className="sale-list__list-item">
          <Table className="sale-list__list-item__left">
            <TBody>
              <div className="sale-list__date">10 July 2021, 21:00 pm</div>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total profit</Td>
                <Td className="sale-list__info__value success-color">₺74</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total</Td>
                <Td className="sale-list__info__value">₺224</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Received</Td>
                <Td className="sale-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="sale-list__list-item__right">
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
                  <Td>Komur</Td>
                  <Td>kg</Td>
                  <Td>2</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                  <Td>₺10</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </li>
        <li className="sale-list__list-item">
          <Table className="sale-list__list-item__left">
            <TBody>
              <div className="sale-list__date">10 July 2021, 21:00 pm</div>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total profit</Td>
                <Td className="sale-list__info__value success-color">₺74</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total</Td>
                <Td className="sale-list__info__value">₺224</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Received</Td>
                <Td className="sale-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="sale-list__list-item__right">
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
                  <Td>Komur</Td>
                  <Td>kg</Td>
                  <Td>2</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                  <Td>₺10</Td>
                </Tr>
                <Tr>
                  <Td>Mangal</Td>
                  <Td>piece</Td>
                  <Td>1</Td>
                  <Td>₺100</Td>
                  <Td>₺150</Td>
                  <Td>₺50</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </li>
        <li className="sale-list__list-item">
          <Table className="sale-list__list-item__left">
            <TBody>
              <div className="sale-list__date">10 July 2021, 21:00 pm</div>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total profit</Td>
                <Td className="sale-list__info__value success-color">₺74</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total</Td>
                <Td className="sale-list__info__value">₺224</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Received</Td>
                <Td className="sale-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="sale-list__list-item__right">
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
                  <Td>Komur</Td>
                  <Td>kg</Td>
                  <Td>2</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                  <Td>₺10</Td>
                </Tr>
                <Tr>
                  <Td>Mangal</Td>
                  <Td>piece</Td>
                  <Td>1</Td>
                  <Td>₺100</Td>
                  <Td>₺150</Td>
                  <Td>₺50</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </li>
        <li className="sale-list__list-item">
          <Table className="sale-list__list-item__left">
            <TBody>
              <div className="sale-list__date">10 July 2021, 21:00 pm</div>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total profit</Td>
                <Td className="sale-list__info__value success-color">₺74</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Total</Td>
                <Td className="sale-list__info__value">₺224</Td>
              </Tr>
              <Tr className="sale-list__info">
                <Td className="sale-list__info__title">Received</Td>
                <Td className="sale-list__info__value">₺200</Td>
              </Tr>
            </TBody>
          </Table>
          <div className="sale-list__list-item__right">
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
                  <Td>Komur</Td>
                  <Td>kg</Td>
                  <Td>2</Td>
                  <Td>₺15</Td>
                  <Td>₺20</Td>
                  <Td>₺10</Td>
                </Tr>
                <Tr>
                  <Td>Mangal</Td>
                  <Td>piece</Td>
                  <Td>1</Td>
                  <Td>₺100</Td>
                  <Td>₺150</Td>
                  <Td>₺50</Td>
                </Tr>
                <Tr>
                  <Td>Izgara</Td>
                  <Td>piece</Td>
                  <Td>2</Td>
                  <Td>₺20</Td>
                  <Td>₺34</Td>
                  <Td>₺28</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </li>
      </ul>
    </div>
  );
}
