import '../style/container.scss';
import mergeClasses from '../utils/mergeClasses';

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

export function InputContainer({ center = false, className, ...props }) {
  return (
    <div
      className={mergeClasses(['input-group', className ? className : ''])}
      {...props}
    >
      {props.children}
    </div>
  );
}

export function SubContainer({ center = false, ...props }) {
  const getClassList = () => {
    return 'sub-container';
  };
  return (
    <div className={getClassList()} {...props}>
      {props.children}
    </div>
  );
}
