import { useNavigate } from 'react-router-dom';
import Checkbox from '../components/Checkbox';
import Modal from '../components/Modal';
import '../style/fa-styles.scss';
import '../style/product-list.scss';
import Container, {
  FormContainer,
  InputContainer,
} from '../components/Container';
import Label from '../components/Label';
import Table, { TBody, Td, Th, THead, Tr } from '../components/Table';
import TextBox from '../components/TextBox';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';
import { useLayoutEffect, useState } from 'react';
import Box from '../components/Box';
import MessageBlock from '../components/MessageBlock';
import Loader from '../components/Loader';
import VerifyPasswordForm from '../components/forms/VerifyPasswordForm';
import { noDataFound } from '../utils/noDataFound';
import useSearch from '../hooks/useSearch';
import Button from '../components/Button';
import Typography from '../components/Typography';
import useAxios from '../hooks/useAxios';
import Flex from '../components/Flex';

export default function ProductList() {
  const [activeVerifyPasswordForm, setActiveVerifyPasswordForm] =
    useState(false);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [headerChecked, setHeaderChecked] = useState(false);
  const navigate = useNavigate();

  const { loading, data, searchTerm, setSearchTerm, refetch } = useSearch({
    endpoint: '/products',
    params: '/search',
    queryOnEmpty: { page: 0 },
  });

  const deleteManyProductsState = useAxios({
    endpoint: '/products/many',
    method: 'delete',
  });

  useLayoutEffect(() => {
    if (data && checkedProducts.length > 0) {
      if (checkedProducts.length === data.length) setHeaderChecked(true);
      else if (headerChecked) setHeaderChecked(false);
    }
  }, [checkedProducts]);

  useLayoutEffect(() => {}, [data]);

  const handleVerifyPasswordFormSubmit = (values) => {
    const data = {
      password: values.password,
      data: checkedProducts,
    };
    deleteManyProductsState.refetch({ data }, () => {
      refetch();
    });
    setActiveVerifyPasswordForm(false);
    setCheckedProducts([]);
  };

  return (
    <Box className="min-h-screen">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Products {'>'} Product list
      </h4>
      <Modal
        active={activeVerifyPasswordForm}
        setActive={setActiveVerifyPasswordForm}
      >
        <VerifyPasswordForm
          style={{ padding: 20 }}
          onSubmit={(values) => handleVerifyPasswordFormSubmit(values)}
          title="-> Delete products"
          className="card"
          onCancelClick={() => setActiveVerifyPasswordForm(false)}
        />
      </Modal>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <InputContainer>
          <Label>Search (?):</Label>
          <TextBox
            tabIndex={0}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            fullWidth
            placeholder="Search for products..."
          />
        </InputContainer>
      </FormContainer>
      <Container>
        <Flex>
          <Button
            onClick={() => setActiveVerifyPasswordForm(true)}
            className="bg-danger-color rounded mr-2"
            visibility={checkedProducts.length > 0}
          >
            <Typography variant="small" className="px-2 py-1">
              Delete {checkedProducts.length} item
            </Typography>
          </Button>
          <Button
            className="bg-primary-light-color rounded"
            visibility={checkedProducts.length === 1}
            onClick={() => {
              navigate('/update-product', {
                state: data.find((item) => item.id === checkedProducts[0]),
              });
            }}
          >
            <Typography variant="small" className="px-2 py-1">
              Update
            </Typography>
          </Button>
        </Flex>
        {loading ? (
          <Loader pending={true} />
        ) : noDataFound(data) ? (
          <MessageBlock
            title={{ text: 'No products found!' }}
            icon={
              <FontAwesomeIcon
                className="fa-muted"
                icon={faMagnifyingGlassMinus}
                size="3x"
                beat
              />
            }
          />
        ) : (
          <Table>
            <THead>
              <Tr>
                <Th>
                  <Checkbox
                    checked={headerChecked}
                    onChange={(e) => {
                      setHeaderChecked(e.target.checked);
                      if (e.target.checked) {
                        const checkedIdList = data.map((item) => item.id);
                        setCheckedProducts(checkedIdList);
                      } else {
                        setCheckedProducts([]);
                      }
                    }}
                  />
                </Th>
                <Th>#image</Th>
                <Th>#name</Th>
                <Th>#unit</Th>
                <Th>#qty</Th>
                <Th>#price</Th>
              </Tr>
            </THead>
            <TBody>
              {Array.isArray(data) &&
                data.map((product) => (
                  <Tr key={product.id}>
                    <Td>
                      <Checkbox
                        checked={checkedProducts.includes(product.id)}
                        onChange={(e) => {
                          if (
                            e.target.checked &&
                            !checkedProducts.includes(product.id)
                          ) {
                            setCheckedProducts((prev) => [...prev, product.id]);
                          } else {
                            setCheckedProducts(
                              checkedProducts.filter((id) => id !== product.id)
                            );
                          }
                        }}
                      />
                    </Td>
                    <Td>
                      <img
                        src={
                          product.imageSourceList
                            ? `${
                                product.imageSourceList[0]
                              }?no_cache=${new Date().getTime()}`
                            : ''
                        }
                        alt="product1"
                        className="product-image"
                      />
                    </Td>
                    <Td>
                      <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </Td>
                    <Td>{product.productUnitData.main.name}</Td>
                    <Td>{product.amount}</Td>
                    <Td>₺{product.productUnitData.main.price}</Td>
                  </Tr>
                ))}
            </TBody>
          </Table>
        )}
      </Container>
    </Box>
  );
}
