import CustomerReturn from '../components/forms/CustomerPurchaseForm';

export default function AddNewCustomerPurchase() {
  return (
    <div className="add-new-order">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Customers {'>'} Customer return
      </h4>
      <CustomerReturn />
    </div>
  );
}
