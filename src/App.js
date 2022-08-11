import { ToastContainer } from 'react-toastify';
import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Layout from './components/Layout';

// pages
import Dashboard from './pages/Dashboard';
import AddNewProduct from './pages/AddNewProduct';
import UpdateProduct from './pages/UpdateProduct';
import ProductList from './pages/ProductList';
import SaleList from './pages/SaleList';
import ProductSaleList from './pages/ProductSaleList';
import AddNewOrder from './pages/AddNewOrder';
import OrderList from './pages/OrderList';
import AddNewCustomer from './pages/AddNewCustomer';
import CustomerList from './pages/CustomerList';
import AddNewCustomerPayment from './pages/AddNewCustomerPayment';
import AddNewCustomerPurchase from './pages/AddNewCustomerPurchase';
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
import CustomerDetails from './pages/CustomerDetails';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <Layout>
        <SideBar open={sidebarOpen} onOverlayClick={closeSidebar} />
        <div className="right-side">
          <TopBar onMenuClick={openSidebar} />
          <div className="main">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-new-product" element={<AddNewProduct />} />
              <Route path="/update-product" element={<UpdateProduct />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/sales-list" element={<SaleList />} />
              <Route path="/product-sales" element={<ProductSaleList />} />
              <Route path="/add-new-order" element={<AddNewOrder />} />
              <Route path="/order-list" element={<OrderList />} />
              <Route path="/add-new-customer" element={<AddNewCustomer />} />
              <Route path="/customer-list" element={<CustomerList />} />
              <Route
                path="/customer-new-payment"
                element={<AddNewCustomerPayment />}
              />
              <Route
                path="/customer-new-purchase"
                element={<AddNewCustomerPurchase />}
              />
              <Route path="/add-new-supplier" element={<AddNewSupplier />} />
              <Route path="/supplier-list" element={<SupplierList />} />
              <Route
                path="/supplier-new-payment"
                element={<AddSupplierPayment />}
              />
              <Route
                path="/supplier-new-purchase"
                element={<AddSupplierPurchase />}
              />{' '}
              <Route path="/add-new-expense" element={<AddNewExpense />} />
              <Route path="/expense-list" element={<ExpenseList />} />
              <Route
                path="/add-new-destruction"
                element={<AddNewDestruction />}
              />
              <Route path="/destruction-list" element={<DestructionList />} />
              <Route path="/product-details" element={<ProductDetails />} />
              <Route path="/supplier-details" element={<SupplierDetails />} />
              <Route path="/customer-details" element={<CustomerDetails />} />
            </Routes>
          </div>
        </div>
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
    </div>
  );
}

export default App;
