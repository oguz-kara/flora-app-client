import useFetchImages from '../../hooks/useFetchImages';
import axios from 'axios';
import ValidationErrorText from '../ValidationErrorText';
import Flex from '../Flex';
import RichEditor from '../RichEditor';
import Label from '../Label';
import TextBox from '../TextBox';
import { FormContainer, InputContainer } from '../Container';
import Select from '../Select';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import FileInputPreview from '../FileInputPreview';
import AddCategoryForm from './CategoryForm';
import AddSupplierForm from './SupplierForm';
import AddUnitForm from './UnitForm';
import AddBrandForm from './BrandForm';
import Modal from '../Modal';
import { useEffect, useRef, useState } from 'react';
import mergeClasses from '../../utils/mergeClasses';
import Button from '../Button';
import Box from '../Box';
import productSchema from '../../schemas/product-schema';
import { useFormik } from 'formik';
import useAxios from '../../hooks/useAxios';
import { convertListToReactSelectOption } from '../../utils/converToReactSelectOption';
import { isArrayAndHasItems } from '../../utils/checkTypes';

export default function ProductForm({
  className,
  style,
  method = 'post',
  data = '',
}) {
  const fileListRef = useRef(null);
  const [activeAddCategoryForm, setActiveAddCategoryForm] = useState(false);
  const [activeAddBrandForm, setActiveAddBrandForm] = useState(false);
  const [activeAddSupplierForm, setActiveAddSupplierForm] = useState(false);
  const [activeAddUnitForm, setActiveAddUnitForm] = useState(false);

  useEffect(() => {
    console.log('re-render');
  });

  const { images, fetch } = useFetchImages();

  const postProductState = useAxios({
    method: method,
    endpoint: '/products',
    options: {
      headers: { multipart: true },
    },
  });
  const postCategoryState = useAxios({
    endpoint: '/categories',
    method: 'post',
  });
  const postBrandState = useAxios({ endpoint: '/brands', method: 'post' });
  const postSupplierState = useAxios({
    endpoint: '/suppliers',
    method: 'post',
  });
  const postProductUnitState = useAxios({
    endpoint: '/product-unit',
    method: 'post',
  });
  const getCategoriesState = useAxios({
    endpoint: '/categories',
    method: 'get',
  });
  const getBrandsState = useAxios({ endpoint: '/brands', method: 'get' });
  const getSuppliersState = useAxios({ endpoint: '/suppliers', method: 'get' });
  const getProductUnitsState = useAxios({
    endpoint: '/product-unit',
    method: 'get',
  });

  const formik = useFormik({
    initialValues: {
      barcode: '0000000000000',
      categoryId: '',
      supplierId: '',
      brandId: '',
      name: '',
      supplierPrice: '',
      amount: '',
      description: '',
      mainUnit: '',
      mainUnitPrice: '',
      subUnitList: '',
      subUnitPriceList: '',
      imageListData: '',
      sku: '',
      taxPercentage: '',
    },
    validationSchema: productSchema,
    onSubmit: async (values, { resetForm }) => {
      axios.defaults.withCredentials = true;
      const formData = new FormData();

      formData.append('id', values.id);
      formData.append('barcode', values.barcode);
      formData.append('categoryId', values.categoryId.value);
      formData.append('supplierId', values.supplierId.value);
      formData.append('brandId', values.brandId.value);
      formData.append('name', values.name);
      formData.append('supplierPrice', values.supplierPrice);
      formData.append('amount', values.amount);
      formData.append('description', values.description);
      formData.append(
        'productUnitData',
        JSON.stringify({
          main: {
            unitId: values.mainUnit.value,
            price: values.mainUnitPrice,
          },
          sub: [
            ...(function () {
              if (!values.subUnitList) return [];
              return values.subUnitList.map((item) => {
                return {
                  unitId: item.value,
                  price: parseFloat(
                    values.subUnitPriceList.find(
                      (price) => price.id === item.value
                    ).price
                  ),
                };
              });
            })(),
          ],
        })
      );
      formData.append('sku', values.sku);
      formData.append('taxPercentage', values.taxPercentage);

      //add images to form data...
      if (values.imageListData.length > 0) {
        for (let i = 0; i < values.imageListData.length; i++) {
          formData.append('imageListData', values.imageListData[i]);
        }
      } else {
        formData.append('imageListData', '');
      }

      postProductState.refetch({ data: formData });

      if (
        postProductState.response &&
        Object.keys(postProductState.response).length > 0
      ) {
        // resetForm();
      }
    },
  });

  useEffect(() => {
    if (
      Object.keys(data).length > 0 &&
      getCategoriesState.response &&
      getBrandsState.response &&
      getSuppliersState.response
    ) {
      const { imageListData, ...rest } = data;
      fetch(imageListData.map((item) => item.src));

      formik.setValues({
        ...rest,
        categoryId: {
          value: data.categoryId,
          label: getCategoriesState.response.find(
            (item) => item.id === data.categoryId
          ).name,
        },
        brandId: {
          value: data.brandId,
          label: getBrandsState.response.find(
            (item) => item.id === data.brandId
          ).name,
        },
        supplierId: {
          value: data.supplierId,
          label: getSuppliersState.response.find(
            (item) => item.id === data.supplierId
          ).name,
        },
        mainUnit: {
          value: data.mainUnit,
          label: getProductUnitsState.response.find(
            (item) => item.id === data.mainUnit
          ).name,
        },
      });
    }
  }, [
    data,
    getCategoriesState.response,
    getBrandsState.response,
    getSuppliersState.response,
    getProductUnitsState.response,
  ]);

  const handleSubmit = (values, refetch, close) => {
    refetch({ data: values });
    close(false);
  };

  const handleAddNewClick = (e, fnc) => {
    e.preventDefault();
    fnc(true);
  };

  return (
    <Box
      style={style}
      className={mergeClasses(['add-product-form', className])}
    >
      <Modal
        active={activeAddCategoryForm}
        setActive={setActiveAddCategoryForm}
      >
        <AddCategoryForm
          style={{ padding: 20 }}
          onSubmit={(values) =>
            handleSubmit(
              values,
              postCategoryState.refetch,
              setActiveAddCategoryForm
            )
          }
          title="-> New category form"
          className="card"
          pending={postCategoryState.loading}
        />
      </Modal>
      <Modal active={activeAddBrandForm} setActive={setActiveAddBrandForm}>
        <AddBrandForm
          style={{ padding: 20 }}
          onSubmit={(values) =>
            handleSubmit(values, postBrandState.refetch, setActiveAddBrandForm)
          }
          title="-> New brand form"
          className="card"
        />
      </Modal>
      <Modal
        active={activeAddSupplierForm}
        setActive={setActiveAddSupplierForm}
      >
        <AddSupplierForm
          style={{ padding: 20 }}
          onSubmit={(values) =>
            handleSubmit(
              values,
              postSupplierState.refetch,
              setActiveAddSupplierForm
            )
          }
          title="-> New supplier form"
          className="card"
        />
      </Modal>
      <Modal active={activeAddUnitForm} setActive={setActiveAddUnitForm}>
        <AddUnitForm
          style={{ padding: 20 }}
          onSubmit={(values) =>
            handleSubmit(
              values,
              postProductUnitState.refetch,
              setActiveAddUnitForm
            )
          }
          title="-> New unit form"
          className="card"
        />
      </Modal>
      <FormContainer onSubmit={formik.handleSubmit} method={method}>
        <InputContainer>
          <Label>Barcode (?):</Label>
          <TextBox
            id="barcode"
            name="barcode"
            fullWidth
            placeholder="Barcode, qrcode etc..."
            value={formik.values.barcode}
            onChange={formik.handleChange}
          />
          <ValidationErrorText formik={formik} name="barcode" />
        </InputContainer>
        <InputContainer>
          <Label>Product name (*):</Label>
          <TextBox
            id="name"
            name="name"
            fullWidth
            placeholder="Descriptive product name..."
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <ValidationErrorText formik={formik} name="name" />
        </InputContainer>
        <InputContainer>
          <Label>Category name (*):</Label>
          <Flex>
            <Select
              id="categoryId"
              name="categoryId"
              value={formik.values.categoryId ? formik.values.categoryId : ''}
              onChange={(value) => {
                formik.setFieldValue('categoryId', value);
              }}
              placeholder="Select a product category. If category not exists you can create it by pressing '+' button."
              options={getSelectOptionsFrom(getCategoriesState.response)}
            ></Select>
            <Button
              className="bg-secondary-color rounded-r"
              data-tip="add new supplier"
              onClick={(e) => handleAddNewClick(e, setActiveAddCategoryForm)}
            >
              +
            </Button>
            <ReactTooltip effect="solid" />
          </Flex>
          <ValidationErrorText formik={formik} name="categoryId" />
        </InputContainer>
        <InputContainer>
          <Label>Supplier name (*):</Label>
          <Flex className="flex">
            <Select
              id="supplierId"
              name="supplierId"
              value={formik.values.supplierId}
              onChange={(value) => formik.setFieldValue('supplierId', value)}
              placeholder="Select a product supplier. If supplier not exists you can create it by pressing '+' button."
              options={getSelectOptionsFrom(getSuppliersState.response)}
            ></Select>
            <Button
              className="bg-secondary-color rounded-r"
              data-tip="add new supplier"
              onClick={(e) => handleAddNewClick(e, setActiveAddSupplierForm)}
            >
              +
            </Button>
            <ReactTooltip effect="solid" />
          </Flex>
          <ValidationErrorText formik={formik} name="supplierId" />
        </InputContainer>
        <InputContainer>
          <Label>Brand name (*):</Label>
          <Flex className="flex">
            <Select
              id="brandId"
              name="brandId"
              value={formik.values.brandId}
              onChange={(value) => formik.setFieldValue('brandId', value)}
              placeholder="Select a product brand. If brand not exists you can create it by pressing '+' button."
              options={getSelectOptionsFrom(getBrandsState.response)}
            ></Select>
            <Button
              className="bg-secondary-color rounded-r"
              onClick={(e) => handleAddNewClick(e, setActiveAddBrandForm)}
              data-tip="add new brand"
            >
              +
            </Button>
            <ReactTooltip effect="solid" />
          </Flex>
          <ValidationErrorText formik={formik} name="brandId" />
        </InputContainer>
        <InputContainer>
          <Label>Supplier price (*):</Label>
          <TextBox
            id="supplierPrice"
            name="supplierPrice"
            value={formik.values.supplierPrice}
            onChange={formik.handleChange}
            type="number"
            fullWidth
            placeholder="Enter supplier price..."
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
          />
          <ValidationErrorText formik={formik} name="supplierPrice" />
        </InputContainer>
        <InputContainer>
          <Label>Main unit (*):</Label>
          <Flex className="flex">
            <Select
              id="mainUnit"
              name="mainUnit"
              value={formik.values.mainUnit}
              onChange={(value) => {
                formik.setFieldValue('mainUnit', value);
              }}
              placeholder="Select a main unit. If main unit not exists you can create it by pressing '+' button."
              options={getSelectOptionsFrom(
                getProductUnitsState.response
              ).filter((item) => {
                let subItem;
                for (subItem of formik.values.subUnitList) {
                  if (subItem.value === item.value) {
                    return false;
                  }
                }
                return true;
              })}
            ></Select>
            <Button
              className="bg-secondary-color rounded-r"
              onClick={(e) => handleAddNewClick(e, setActiveAddUnitForm)}
              data-tip="add new unit"
            >
              +
            </Button>
            <ReactTooltip effect="solid" />
          </Flex>
          <ValidationErrorText formik={formik} name="mainUnit" />
        </InputContainer>
        <InputContainer>
          <Label>Main unit price (*):</Label>
          <TextBox
            id="mainUnitPrice"
            name="mainUnitPrice"
            value={formik.values.mainUnitPrice}
            onChange={formik.handleChange}
            type="number"
            fullWidth
            placeholder="Enter price for main unit..."
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
          />
          <ValidationErrorText formik={formik} name="mainUnitPrice" />
        </InputContainer>
        <InputContainer>
          <Label>Add sub units (?):</Label>
          <Flex>
            <Select
              id="subUnitList"
              name="subUnitList"
              value={formik.values.subUnitList}
              onChange={(value) => {
                const priceList = value.map((item) => {
                  return {
                    id: item.value,
                    label: item.label,
                    price: '',
                  };
                });
                formik.setFieldValue('subUnitList', value);
                formik.setFieldValue('subUnitPriceList', priceList);
              }}
              placeholder="Select a sub unit. If sub units not exists you can create it by pressing '+' button."
              isMulti
              options={getSelectOptionsFrom(
                getProductUnitsState.response
              ).filter((item) => item.value !== formik.values.mainUnit.value)}
            ></Select>
          </Flex>
          <ValidationErrorText formik={formik} name="subUnitList" />
        </InputContainer>
        {formik.values.subUnitPriceList.length > 0
          ? formik.values.subUnitPriceList.map(function (item, index) {
              return (
                <InputContainer key={index}>
                  <Label>Unit price for {item.label} (*):</Label>
                  <TextBox
                    type="number"
                    fullWidth
                    placeholder="Enter price for sub unit..."
                    name="subUnitPrice"
                    value={item.price}
                    onChange={(e) => {
                      formik.setFieldValue(
                        'subUnitPriceList',
                        formik.values.subUnitPriceList.map((price) => {
                          if (item.id === price.id)
                            return { ...price, price: e.target.value };
                          return price;
                        })
                      );
                    }}
                    icon={
                      <FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />
                    }
                  />
                </InputContainer>
              );
            })
          : ''}
        <ValidationErrorText formik={formik} name="subUnitPriceList" />
        <InputContainer>
          <Label>Quantity (*):</Label>
          <TextBox
            id="amount"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            type="number"
            fullWidth
            icon={<FontAwesomeIcon icon={faTurkishLiraSign} size="lg" />}
            placeholder="Enter quantity based on main unit, example: main unit = meters, quantity = 25, stock = 25 meters total quantity..."
          />
          <ValidationErrorText formik={formik} name="amount" />
        </InputContainer>
        <InputContainer>
          <Label>Stock keeping unit (*):</Label>
          <TextBox
            id="sku"
            name="sku"
            value={formik.values.sku}
            onChange={formik.handleChange}
            fullWidth
            placeholder="Enter sku..."
          />
          <ValidationErrorText formik={formik} name="sku" />
        </InputContainer>
        <InputContainer>
          <Label>Tax percentage (*):</Label>
          <TextBox
            id="taxPercentage"
            name="taxPercentage"
            value={formik.values.taxPercentage}
            onChange={formik.handleChange}
            type="number"
            fullWidth
            placeholder="Enter tax percentage..."
          />
          <ValidationErrorText formik={formik} name="taxPercentage" />
        </InputContainer>
        <InputContainer>
          <FileInputPreview
            ref={fileListRef}
            id="image-uploads"
            name="imageListData"
            initialImages={
              Array.isArray(images) && images.length > 0 ? images : ''
            }
            onChange={(files) => {
              let myFiles = Array.from(files);
              formik.setFieldValue('imageListData', myFiles);
            }}
          />
        </InputContainer>
        <InputContainer>
          <RichEditor
            setFieldValue={(val) => formik.setFieldValue('description', val)}
            value={formik.values.description}
            initialValue={data && data.description}
          />
          <ValidationErrorText formik={formik} name="description" />
        </InputContainer>
        <InputContainer>
          <Button
            className="bg-primary-color"
            type="submit"
            pending={postProductState.loading}
            onClick={(e) => {
              if (!formik.isValid) {
                window.scrollTo(0, 0);
              }
            }}
          >
            SUBMIT
          </Button>
        </InputContainer>
      </FormContainer>
    </Box>
  );
}

function getSelectOptionsFrom(data) {
  if (isArrayAndHasItems(data)) {
    return convertListToReactSelectOption(data);
  }
  return [];
}
