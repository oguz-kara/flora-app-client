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

export function Tr({ children, ...props }) {
  return (
    <tr className="tr" {...props}>
      {children}
    </tr>
  );
}

export function Td({ children, ...props }) {
  return (
    <td className="td" {...props}>
      {children}
    </td>
  );
}

export default function Table({ children, ...props }) {
  return (
    <table className="table" {...props}>
      {' '}
      {children}
    </table>
  );
}
