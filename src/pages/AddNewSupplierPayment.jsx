import AddNewSupplierPaymentForm from '../components/forms/AddNewSupplierPaymentForm';

export default function AddNewCustomerPayment() {
  return (
    <div className="add-new-supplier">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Suppliers {'>'} Add new supplier payment
      </h4>
      <AddNewSupplierPaymentForm />
    </div>
  );
}
