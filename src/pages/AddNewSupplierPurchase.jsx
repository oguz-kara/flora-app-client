import AddNewSupplierPurchaseForm from '../components/forms/AddNewSupplierPurchaseForm';

export default function AddNewCustomerPurchase() {
  return (
    <div className="add-new-supplier-purchase">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Supplier {'>'} Add new supplier purchase
      </h4>
      <AddNewSupplierPurchaseForm />
    </div>
  );
}
