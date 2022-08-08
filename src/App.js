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
import ProductList from './pages/ProductList';
import SaleList from './pages/SaleList';
import ProductSaleList from './pages/ProductSaleList';
import AddNewOrder from './pages/AddNewOrder';

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
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/sales-list" element={<SaleList />} />
              <Route path="/product-sales" element={<ProductSaleList />} />
              <Route path="/add-new-order" element={<AddNewOrder />} />
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
