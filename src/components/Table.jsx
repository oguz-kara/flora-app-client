import { forwardRef } from 'react';
import '../style/table.scss';

export function THead({ children, ...props }) {
  return (
    <thead className="thead" {...props}>
      {children}
    </thead>
  );
}

export function TBody({ children, ...props }) {
  return (
    <tbody className="tbody" {...props}>
      {children}
    </tbody>
  );
}

export function Th({ children, ...props }) {
  return (
    <th className="th" {...props}>
      {children}
    </th>
  );
}

export const Tr = forwardRef(({ children, className, ...props }, ref) => {
  const mergeClassListProp = () => {
    if (className) {
      return `tr ${className}`;
    }
    return 'tr';
  };
  return (
    <tr className={mergeClassListProp()} {...props} ref={ref}>
      {children}
    </tr>
  );
});

export const Td = forwardRef(({ children, ...props }, ref) => {
  return (
    <td className="td" {...props} ref={ref}>
      {children}
    </td>
  );
});

export default function Table({ children, ...props }) {
  return (
    <table className="table" {...props}>
      {' '}
      {children}
    </table>
  );
}
