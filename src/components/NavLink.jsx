import '../style/nav-link.scss';
import { useResolvedPath, useMatch, NavLink as Link } from 'react-router-dom';

export default function NavLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const getClassList = () => {
    return match ? 'nav-link nav-link--active' : 'nav-link';
  };

  return (
    <div>
      <Link className={getClassList()} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
