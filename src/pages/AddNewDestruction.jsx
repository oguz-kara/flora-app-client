import AddNewDestructionForm from '../components/forms/AddNewDestructionForm';

export default function AddNewCustomer() {
  return (
    <div className="add-new-customer">
      <h4 style={{ marginBottom: 30, color: 'white' }}>
        Destructions {'>'} Add new destruction
      </h4>
      <AddNewDestructionForm />
    </div>
  );
}
