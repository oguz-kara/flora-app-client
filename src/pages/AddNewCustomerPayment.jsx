import AddNewCustomerPaymentForm from '../components/forms/CustomerPaymentForm';

export default function AddNewCustomerPayment() {
  return (
    <div className="add-new-customer">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Customers {'>'} Add new customer payment
      </h4>
      <AddNewCustomerPaymentForm />
    </div>
  );
}
