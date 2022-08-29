import React from 'react';
import mergeClasses from '../utils/mergeClasses';
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

export function Th({ children, className, ...props }) {
  return (
    <th className={mergeClasses(['th', className])} {...props}>
      {children}
    </th>
  );
}

export const Tr = forwardRef(
  ({ children, className, noBorder, ...props }, ref) => {
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
  }
);

export const Td = forwardRef(
  ({ children, noBorder = false, className, ...props }, ref) => {
    return (
      <td className={mergeClasses(['td', className])} {...props} ref={ref}>
        {children}
      </td>
    );
  }
);

export default function Table({ children, className, ...props }) {
  return (
    <table className={mergeClasses(['table', className])} {...props}>
      {children}
    </table>
  );
}
