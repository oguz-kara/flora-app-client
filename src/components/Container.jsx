import '../style/container.scss';

export default function Container({ center = false, ...props }) {
  const getClassList = () => {
    return center ? 'container center' : 'container';
  };

  return (
    <div className={getClassList()} {...props}>
      {props.children}
    </div>
  );
}

export function FormContainer({ center = false, ...props }) {
  const getClassList = () => {
    return center ? 'form-container center' : 'form-container';
  };
  return (
    <form className={getClassList()} {...props}>
      {props.children}
    </form>
  );
}

export function InputGroup({ center = false, ...props }) {
  const getClassList = () => {
    return 'input-group'
  };
  return (
    <div className={getClassList()} {...props}>
      {props.children}
    </div>
  );
}