import AddNewOrderForm from '../components/forms/OrderForm';

export default function AddNewOrder() {
  return (
    <div className="add-new-order">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Orders {'>'} Add new order
      </h4>
      <AddNewOrderForm />
    </div>
  );
}
