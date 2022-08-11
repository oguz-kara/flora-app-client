import '../style/_typography.scss';
import mergeClasses from '../utils/mergeClasses';

export default function Typography({ children, variant, className, ...props }) {
  return (
    <div
      className={mergeClasses(['typography', variant, className])}
      {...props}
    >
      {children}
    </div>
  );
}
