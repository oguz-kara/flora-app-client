import AddNewSupplierForm from '../components/forms/AddNewSupplierForm';

export default function AddNewCustomer() {
  return (
    <div className="add-new-customer">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Suppliers {'>'} Add new supplier
      </h4>
      <AddNewSupplierForm />
    </div>
  );
}
