import mergeClasses from '../utils/mergeClasses';
import '../style/card.scss';

export function CardHeader({ children, ...props }) {
  return (
    <h3 className="super-card-title" {...props}>
      {children}
    </h3>
  );
}

export function CardBody({ children, ...props }) {
  return (
    <div className="super-card-body" {...props}>
      {children}
    </div>
  );
}

export default function Card({ children, className, ...rest }) {
  return (
    <div className={mergeClasses(['super-card', className])} {...rest}>
      {children}
    </div>
  );
}
