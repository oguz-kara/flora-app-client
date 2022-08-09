import Card, { CardBody, CardHeader } from '../components/Card';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import '../style/product-details.scss';

export default function ProductDetails(props) {
  return (
    <div>
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Products {'>'} Product details
      </h4>
      <div className="product-details">
        <img
          src="https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt="mangal"
          className="product-details__image"
        />
        <div className="product-details__content">
          <Table>
            <TBody>
              <Tr className="product-details__content__header">
                <Td className="product-details__content__header">name</Td>
                <Td>
                  <h2>1/2 Plastik kayar maşon</h2>
                </Td>
              </Tr>
              <Tr className="product-details__content__header">
                <Td className="product-details__content__header">barcode</Td>
                <Td>00000000000000000000</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">
                  category name
                </Td>
                <Td>Mangal</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">
                  supplier name
                </Td>
                <Td>Arma</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">brand name</Td>
                <Td>Armatur</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">qty</Td>
                <Td>10pcs</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">
                  supplier price
                </Td>
                <Td>15</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">sale price</Td>
                <Td>30</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">sku</Td>
                <Td>H15DA1</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">
                  tax percentage
                </Td>
                <Td>18%</Td>
              </Tr>
              <Tr>
                <Td className="product-details__content__header">created at</Td>
                <Td>17 July 2020</Td>
              </Tr>
            </TBody>
          </Table>
        </div>
        <div className="product-details__sub-unit-list">
          <Table>
            <THead>
              <Tr>
                <Th>sub unit name</Th>
                <Th>main unit amount</Th>
                <Th>price</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>package(100pcs)</Td>
                <Td>100pcs</Td>
                <Td>250</Td>
              </Tr>
            </TBody>
          </Table>
        </div>
      </div>
      <h1 style={{ margin: '20px 0' }} className="product-details__description">
        Product description here...
      </h1>
      <div className="product-details__analysis">
        <h2 className="mb15 secondary-color">Monthly analysis</h2>
        <div className="flex-box mb15">
          <Card className="flex1 mr15">
            <CardHeader className="primary-color">Last sales</CardHeader>
            <CardBody>
              <Table>
                <THead>
                  <Tr>
                    <Th>#date</Th>
                    <Th>#qty</Th>
                    <Th>#profit</Th>
                  </Tr>
                </THead>
                <TBody>
                  <Tr>
                    <Td>17 July 2021</Td>
                    <Td>3</Td>
                    <Td className="bold">₺30</Td>
                  </Tr>
                  <Tr>
                    <Td>27 July 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺10</Td>
                  </Tr>
                  <Tr>
                    <Td>5 August 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺8</Td>
                  </Tr>
                  <Tr>
                    <Td>19 August 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺10</Td>
                  </Tr>
                </TBody>
              </Table>
            </CardBody>
          </Card>
          <Card style={{ flex: 1 }}>
            <CardHeader className="primary-color">Analysis on total</CardHeader>
            <CardBody>
              <Table>
                <TBody>
                  <Tr>
                    <Td>Total sales of all time</Td>
                    <Td className="bold">15</Td>
                  </Tr>
                  <Tr>
                    <Td>Total profit of all time</Td>
                    <Td className="bold success-color">₺150</Td>
                  </Tr>
                </TBody>
              </Table>
            </CardBody>
          </Card>
        </div>
        <h2 className="mb15 secondary-color">All time analysis</h2>
        <div className="flex-box">
          <Card className="flex1 mr15">
            <CardHeader className="primary-color">Last sales</CardHeader>
            <CardBody>
              <Table>
                <THead>
                  <Tr>
                    <Th>#date</Th>
                    <Th>#qty</Th>
                    <Th>#profit</Th>
                  </Tr>
                </THead>
                <TBody>
                  <Tr>
                    <Td>17 July 2021</Td>
                    <Td>3</Td>
                    <Td className="bold">₺30</Td>
                  </Tr>
                  <Tr>
                    <Td>27 July 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺10</Td>
                  </Tr>
                  <Tr>
                    <Td>5 August 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺8</Td>
                  </Tr>
                  <Tr>
                    <Td>19 August 2021</Td>
                    <Td>1</Td>
                    <Td className="bold">₺10</Td>
                  </Tr>
                </TBody>
              </Table>
            </CardBody>
          </Card>
          <Card style={{ flex: 1 }}>
            <CardHeader className="primary-color">Analysis on total</CardHeader>
            <CardBody>
              <Table>
                <TBody>
                  <Tr>
                    <Td>Total sales of all time</Td>
                    <Td className="bold">15</Td>
                  </Tr>
                  <Tr>
                    <Td>Total profit of all time</Td>
                    <Td className="bold success-color">₺150</Td>
                  </Tr>
                </TBody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
