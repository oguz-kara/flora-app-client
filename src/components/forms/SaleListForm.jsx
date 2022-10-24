import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import Typography from '../Typography';
import Select from '../Select';
import { useEffect, useRef, useState } from 'react';
import Modal from '../Modal';
import SalesListFinalForm from './SaleListFinalForm';
import { FormContainer, InputContainer } from '../Container';
import Label from '../Label';
import Table, { TBody, Td, Th, THead, Tr } from '../Table';
import TextBox from '../TextBox';
import AsyncSelect from '../AsyncSelect';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SaleListForm({ children, ...props }) {
  const [activeSalesListForm, setActiveSalesListForm] = useState(false);
  const productUnit = useSelector((state) => state.productUnit);
  const [productList, setProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});

  const asyncRef = useRef(null);

  const convertToListProduct = (product = {}, unitList = []) => {
    const result = {};
    if (unitList && unitList.length > 0 && Object.keys(product).length > 0) {
      result.id = product.id;
      result.barcode = product.barcode;
      result.name = {
        label: product.name,
        value: product.id,
      };
      result.unitList = [
        ...[product.productUnitData.main, ...product.productUnitData.sub].map(
          (unit) => {
            const fUnit = unitList.find((item) => item.id === unit.unitId);
            if (fUnit) {
              return {
                value: fUnit.id,
                label: fUnit.name,
                price: unit.price,
                amount: fUnit.value,
              };
            }
            return '';
          }
        ),
      ];
      result.unit = result.unitList[0];
      result.quantity = 1;
      result.price = product.productUnitData.main.price;
      result.profit =
        result.quantity * result.unit.price -
        product.supplierPrice * result.unit.amount;
      result.total = result.quantity * result.unit.price;
      return result;
    }
    return [];
  };

  const isSaveAble = (product) => {
    return product.name && product.unit;
  };

  const saveProduct = (product) => {
    setProductList((prev) => [...prev, product]);
  };

  const onSaveProduct = () => {
    if (isSaveAble(currentProduct)) saveProduct(currentProduct);
  };

  const productOptions = async (inputValue) => {
    return axios
      .get(`http://localhost:8000/api/products/search?name=${inputValue}`, {
        withCredentials: true,
      })
      .then((res) => res.data.data)
      .catch((e) => console.log(e));
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
                <TextBox
                  className="w-32 max-w-sm"
                  value={currentProduct.barcode}
                />
              </Td>
              <Td>
                <AsyncSelect
                  ref={asyncRef}
                  value={{ nothing: 'nothung' }}
                  className="w-32 max-w-sm h-full"
                  cacheOptions
                  defaultOptions
                  loadOptions={productOptions}
                  onChange={(value) => {
                    setCurrentProduct(
                      convertToListProduct(value, productUnit.productUnitList)
                    );
                  }}
                />
              </Td>
              <Td>
                <Select
                  placeholder=""
                  className="w-32 max-w-sm h-full"
                  disabled={
                    currentProduct && currentProduct.unit ? false : true
                  }
                  value={
                    currentProduct && currentProduct.unit
                      ? currentProduct.unit
                      : ''
                  }
                  options={
                    currentProduct &&
                    currentProduct.unitList &&
                    currentProduct.unitList.length > 0
                      ? currentProduct.unitList
                      : []
                  }
                  onChange={(value) => {
                    setCurrentProduct((prev) => ({ ...prev, unit: value }));
                  }}
                />
              </Td>
              <Td>
                <TextBox
                  disabled={
                    Object.keys(currentProduct).length >= 3 ? false : true
                  }
                  className="w-32 max-w-sm"
                  value={
                    Object.keys(currentProduct).length > 0
                      ? currentProduct.quantity
                      : ''
                  }
                  onChange={(e) =>
                    setCurrentProduct((prev) => {
                      try {
                        return {
                          ...prev,
                          quantity:
                            e.target.value === ''
                              ? 0.01
                              : parseFloat(e.target.value),
                        };
                      } catch (e) {
                        return prev;
                      }
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      saveProduct(currentProduct);
                      setCurrentProduct({});
                      asyncRef.current.focus();
                    }
                  }}
                />
              </Td>
              <Td>
                ₺
                <Typography className="inline bold" variant="body1">
                  {currentProduct && currentProduct.price
                    ? currentProduct.price
                    : ''}
                </Typography>
              </Td>
              <Td>
                ₺
                <Typography className="inline bold" variant="body1">
                  {currentProduct && currentProduct.profit
                    ? currentProduct.profit
                    : ''}
                </Typography>
              </Td>
              <Td>
                ₺
                <Typography className="inline bold" variant="body1">
                  {currentProduct && currentProduct.total
                    ? currentProduct.total
                    : ''}
                </Typography>
              </Td>
            </Tr>
            {productList.map((product, index) => (
              <Tr key={index}>
                <Td>{product.barcode}</Td>
                <Td>{product.name.label}</Td>
                <Td>{product.unit.label}</Td>
                <Td>{product.quantity}</Td>
                <Td>{product.price}</Td>
                <Td>{product.profit}</Td>
                <Td>{product.total}</Td>
                <Td>
                  <button
                    onClick={() => {
                      setProductList((prev) =>
                        prev.filter((item) => item.id !== product.id)
                      );
                    }}
                    type="button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </Td>
                <Td>
                  <button
                    onClick={() => {
                      setCurrentProduct(product);
                      setProductList((prev) =>
                        prev.filter((item) => item.id !== product.id)
                      );
                    }}
                    type="button"
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </InputContainer>
    </FormContainer>
  );
}
