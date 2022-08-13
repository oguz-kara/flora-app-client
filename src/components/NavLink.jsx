import '../style/nav-link.scss';
import { useResolvedPath, useMatch, NavLink as Link } from 'react-router-dom';
import mergeClasses from '../utils/mergeClasses';

export default function NavLink({ children, to, className, ...props }) {
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
