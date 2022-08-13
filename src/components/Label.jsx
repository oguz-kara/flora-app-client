import '../style/label.scss';
import mergeClasses from '../utils/mergeClasses';

export default function Label({ children, className, style }) {
  return (
    <label className={mergeClasses(['label', className])} style={style}>
      {children}
    </label>
  );
}
