import AddNewCustomerForm from '../components/forms/AddNewCustomerForm';
import '../style/add-new-customer.scss';

export default function AddNewCustomer() {
  return (
    <div className="add-new-customer">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        customers {'>'} Add newcustomer
      </h4>
      <AddNewCustomerForm />
    </div>
  );
}
