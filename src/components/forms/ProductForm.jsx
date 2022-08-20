import axios from 'axios';
import { getErrorMessage } from '../../utils/messages';
import toast from '../../config/toast-message';
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
import AddBrandForm from './BrandForm';
import Modal from '../Modal';
import { useRef, useState, useEffect } from 'react';
import mergeClasses from '../../utils/mergeClasses';
import Button from '../Button';
import Box from '../Box';
import productSchema from '../../schemas/product-schema';
import { useFormik } from 'formik';
import useAxios from '../../hooks/useAxios';
import convertListToReactSelectOption from '../../utils/converToReactSelectOption';

export default function ProductForm({ className, style }) {
  const [activeAddCategoryForm, setActiveAddCategoryForm] = useState(false);
  const [activeAddBrandForm, setActiveAddBrandForm] = useState(false);
  const [activeAddSupplierForm, setActiveAddSupplierForm] = useState(false);
  const [selectOptions, setSelectOptions] = useState({
    categories: [],
    brands: [],
    suppliers: [],
    unitList: [],
  });
  const [images, setImages] = useState('');
  const fileListRef = useRef(null);

  const postProductState = useAxios('/products', 'post', {
    headers: { multipart: true },
  });

  const postCategoryState = useAxios('/categories', 'post');

  const postBrandState = useAxios('/brands', 'post');

  const postSupplierState = useAxios('/suppliers', 'post');

  const getCategoriesState = useAxios('/categories', 'get');

  const getBrandsState = useAxios('/brands', 'get');

  const getSuppliersState = useAxios('/suppliers', 'get');

  const getProductUnitsState = useAxios('/product-unit', 'get');

  useEffect(() => {
    
  }, [
    postProductState.response,
    postProductState.error,
  ]);

  useEffect(() => {
    if (isDataExistsInResponse(getCategoriesState)) {
      setSelectOptions((prev) => ({
        ...prev,
        categories: convertListToReactSelectOption(
          getCategoriesState.response.data.data
        ),
      }));
    } else {
      toast.error(getErrorMessage(getCategoriesState.error));
    }
  }, [getCategoriesState.response, getCategoriesState.error]);

  useEffect(() => {
    if (isDataExistsInResponse(getBrandsState)) {
      setSelectOptions((prev) => ({
        ...prev,
        brands: convertListToReactSelectOption(
          getBrandsState.response.data.data
        ),
      }));
    } else {
      toast.error(getErrorMessage(getBrandsState.error));
    }
  }, [getBrandsState.response, getBrandsState.error]);

  useEffect(() => {
    if (isDataExistsInResponse(getSuppliersState)) {
      setSelectOptions((prev) => ({
        ...prev,
        suppliers: convertListToReactSelectOption(
          getSuppliersState.response.data.data
        ),
      }));
    } else {
      toast.error(getErrorMessage(getSuppliersState.error));
    }
  }, [getSuppliersState.response, getSuppliersState.error]);

  useEffect(() => {
    if (isDataExistsInResponse(getProductUnitsState)) {
      setSelectOptions((prev) => ({
        ...prev,
        unitList: convertListToReactSelectOption(
          getProductUnitsState.response.data.data
        ),
      }));
    } else {
      toast.error(getErrorMessage(getProductUnitsState.error));
    }
  }, [getProductUnitsState.response, getProductUnitsState.error]);

  const handleFilesChange = (e) => {
    const files = e.target.files;
    let myFiles = Array.from(files);
    formik.setFieldValue('imageListData', myFiles);
  };

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
            ...values.subUnitList.map((item) => {
              return {
                unitId: item.value,
                price: values.subUnitPriceList.find(
                  (price) => price.id === item.value
                ).price,
              };
            }),
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
      // postProductState.exec(formData);
      // axios
      //   .post('http://localhost:8000/api/products', formData)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => console.log(err));
      postProductState.exec(formData);

      if (
        postProductState.response &&
        Object.keys(postProductState.response).length > 0
      ) {
        // resetForm();
      }
    },
  });

  const handleAddNewCategoryClick = (e) => {
    e.preventDefault();
    setActiveAddCategoryForm(true);
  };

  const handleCategoryFormSubmit = (values) => {
    const formData = {
      name: values.name,
      description: values.description,
    };
    postCategoryState.exec(formData);

    if (
      postCategoryState.response &&
      Object.keys(postCategoryState.response).length > 0
    ) {
      setActiveAddCategoryForm(false);
    }
  };

  const handleAddNewBrandClick = (e) => {
    e.preventDefault();
    setActiveAddBrandForm(true);
  };

  const handleBrandFormSubmit = (values) => {
    const formData = {
      name: values.name,
    };
    postBrandState.exec(formData);
    if (
      postBrandState.response &&
      Object.keys(postBrandState.response).length > 0
    ) {
      setActiveAddBrandForm(false);
    }
  };

  const handleAddNewSupplierClick = (e) => {
    e.preventDefault();
    setActiveAddSupplierForm(true);
  };

  const handleSupplierFormSubmit = (values) => {
    const formData = {
      name: values.name,
      companyName: values.companyName,
      credit: values.credit,
      phoneNumber: values.phoneNumber,
    };
    postSupplierState.exec(formData);
    if (
      postSupplierState.response &&
      Object.keys(postSupplierState.response).length > 0
    ) {
      setActiveAddSupplierForm(false);
    }
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
          onSubmit={(values) => handleCategoryFormSubmit(values)}
          title="-> New category form"
          className="card"
          pending={postCategoryState.loading}
        />
      </Modal>
      <Modal active={activeAddBrandForm} setActive={setActiveAddBrandForm}>
        <AddBrandForm
          style={{ padding: 20 }}
          onSubmit={(values) => handleBrandFormSubmit(values)}
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
          onSubmit={(e) => handleSupplierFormSubmit(e)}
          title="-> New supplier form"
          className="card"
        />
      </Modal>
      <FormContainer onSubmit={formik.handleSubmit}>
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
              value={formik.values.categoryId}
              onChange={(value) => {
                formik.setFieldValue('categoryId', value);
              }}
              placeholder="Select a product category. If category not exists you can create it by pressing '+' button."
              options={selectOptions.categories}
            ></Select>
            <Button
              className="bg-secondary-color rounded-r"
              data-tip="add new supplier"
              onClick={handleAddNewCategoryClick}
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
              options={selectOptions.suppliers}
            ></Select>
            <Button
              className="bg-secondary-color rounded-r"
              data-tip="add new supplier"
              onClick={handleAddNewSupplierClick}
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
              options={selectOptions.brands}
            ></Select>
            <Button
              className="bg-secondary-color rounded-r"
              onClick={handleAddNewBrandClick}
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
              onChange={(value) => formik.setFieldValue('mainUnit', value)}
              placeholder="Select a main unit. If main unit not exists you can create it by pressing '+' button."
              options={selectOptions.unitList.filter((item) => {
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
              onClick={handleAddNewCategoryClick}
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
              name="setSubUnitList"
              value={formik.values.subUnitList}
              onChange={(value) => {
                const priceList = value.map((item, index) => {
                  return {
                    id: value[index].value,
                    label: value[index].label,
                    price: 0,
                  };
                });
                formik.setFieldValue('subUnitPriceList', priceList);
                formik.setFieldValue('subUnitList', value);
              }}
              placeholder="Select a sub units. If sub units not exists you can create it by pressing '+' button."
              isMulti
              options={selectOptions.unitList.filter(
                (item) => item.value !== formik.values.mainUnit.value
              )}
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
            value={images}
            onChange={(e) => handleFilesChange(e)}
          />
        </InputContainer>
        <InputContainer>
          <RichEditor
            setFieldValue={(val) => formik.setFieldValue('description', val)}
            value={formik.values.description}
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

function isDataExistsInResponse(obj) {
  return obj && obj.response && obj.response.data && obj.response.data.data;
}
