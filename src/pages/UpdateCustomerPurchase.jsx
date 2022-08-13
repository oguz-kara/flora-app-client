import CustomerPurchaseForm from '../components/forms/CustomerPurchaseForm';

export default function AddNewCustomerPurchase() {
  return (
    <div className="add-new-order">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Customers {'>'} Update customer purchase
      </h4>
      <CustomerPurchaseForm />
    </div>
  );
}