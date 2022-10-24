import { ToastContainer } from 'react-toastify';
import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Layout from './components/Layout';

// pages
import Dashboard from './pages/Dashboard';
import AddNewProduct from './pages/AddNewProduct';
import UpdateProduct from './pages/UpdateProduct';
import ProductList from './pages/ProductList';
import SaleList from './pages/SaleList';
import NewSaleList from './pages/NewSaleList';
import ProductSaleList from './pages/ProductSaleList';
import AddNewOrder from './pages/AddNewOrder';
import OrderList from './pages/OrderList';
import AddNewCustomer from './pages/AddNewCustomer';
import CustomerList from './pages/CustomerList';
import CustomerDetails from './pages/CustomerDetails';
import UpdateCustomerPurchase from './pages/UpdateCustomerPurchase';
import AddNewCustomerPayment from './pages/AddNewCustomerPayment';
import AddNewCustomerPurchase from './pages/AddNewCustomerPurchase';
import CustomerReturn from './pages/CustomerReturn';
import AddNewSupplier from './pages/AddNewSupplier';
import SupplierList from './pages/SupplierList';
import AddSupplierPayment from './pages/AddNewSupplierPayment';
import AddSupplierPurchase from './pages/AddNewSupplierPurchase';
import AddNewExpense from './pages/AddNewExpense';
import ExpenseList from './pages/ExpenseList';
import AddNewDestruction from './pages/AddNewDestruction';
import DestructionList from './pages/DestructionList';
import ProductDetails from './pages/ProductDetails';
import SupplierDetails from './pages/SupplierDetails';
import NewReturnList from './pages/NewReturnList';
import Box from './components/Box';
import { fetchUnits } from './redux/productUnit';
import { useDispatch } from 'react-redux';
import Login from './components/forms/Login';
import UserContext from './context/userContext';
import { login, logout } from './api/auth';
import AccountPage from './pages/AccountPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const userContext = useContext(UserContext);

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      {document.cookie ? (
        <Box className="App">
          <Layout>
            <SideBar open={sidebarOpen} onOverlayClick={closeSidebar} />
            <Box className="right-side">
              <TopBar onMenuClick={openSidebar} />
              <Box className="main">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/add-new-product" element={<AddNewProduct />} />
                  <Route path="/update-product" element={<UpdateProduct />} />
                  <Route path="/product-list" element={<ProductList />} />
                  <Route path="/sales-list" element={<SaleList />} />
                  <Route path="/new-sale" element={<NewSaleList />} />
                  <Route path="/product-sales" element={<ProductSaleList />} />
                  <Route path="/add-new-order" element={<AddNewOrder />} />
                  <Route path="/order-list" element={<OrderList />} />
                  <Route
                    path="/add-new-customer"
                    element={<AddNewCustomer />}
                  />
                  <Route path="/customer-list" element={<CustomerList />} />
                  <Route
                    path="/customer-details"
                    element={<CustomerDetails />}
                  />
                  <Route
                    path="/customer-new-payment"
                    element={<AddNewCustomerPayment />}
                  />
                  <Route
                    path="/customer-new-purchase"
                    element={<AddNewCustomerPurchase />}
                  />
                  <Route
                    path="/update-customer-purchase"
                    element={<UpdateCustomerPurchase />}
                  />
                  <Route path="/customer-return" element={<CustomerReturn />} />
                  <Route
                    path="/add-new-supplier"
                    element={<AddNewSupplier />}
                  />
                  <Route path="/supplier-list" element={<SupplierList />} />
                  <Route
                    path="/supplier-new-payment"
                    element={<AddSupplierPayment />}
                  />
                  <Route
                    path="/supplier-new-purchase"
                    element={<AddSupplierPurchase />}
                  />
                  <Route path="/add-new-expense" element={<AddNewExpense />} />
                  <Route path="/expense-list" element={<ExpenseList />} />
                  <Route
                    path="/add-new-destruction"
                    element={<AddNewDestruction />}
                  />
                  <Route
                    path="/destruction-list"
                    element={<DestructionList />}
                  />
                  <Route path="/product-details" element={<ProductDetails />} />
                  <Route
                    path="/supplier-details"
                    element={<SupplierDetails />}
                  />
                  <Route path="/return-list" element={<NewReturnList />} />
                  <Route
                    path="/account"
                    element={<AccountPage user={user} />}
                  />
                </Routes>
              </Box>
            </Box>
          </Layout>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Box>
      ) : (
        <Login
          active={true}
          onSubmit={async ({ email, password }) => {
            // const res = await logout();
            const res = await login({ username: email, password: password });
            setUser(res.data && res.data);
          }}
        />
      )}
    </UserContext.Provider>
  );
}

export default App;
