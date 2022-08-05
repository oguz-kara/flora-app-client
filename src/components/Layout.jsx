import '../style/layout.scss';

export default function Layout({ children, ...rest }) {
  return (
    <div {...rest} className="layout">
      {children}
    </div>
  );
}
