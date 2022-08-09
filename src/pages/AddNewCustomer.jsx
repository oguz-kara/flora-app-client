import AddNewCustomerForm from '../components/forms/AddNewCustomerForm';

export default function AddNewCustomer() {
  return (
    <div className="add-new-customer">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Customers {'>'} Add new customer
      </h4>
      <AddNewCustomerForm />
    </div>
  );
}