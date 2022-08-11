import '../style/drop-down-menu.scss';
import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useCallback,
} from 'react';
import mergeClasses from '../utils/mergeClasses';

export const DropDownHeader = forwardRef(
  ({ children, activateMenu, className, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={mergeClasses(['dropdown-header', className])}
        {...rest}
        onClick={activateMenu}
      >
        {children}
      </span>
    );
  }
);

export const DropDownBody = forwardRef(
  ({ children, open = false, className, ...rest }, ref) =>
    open && (
      <div
        className={mergeClasses(['dropdown-body', className])}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    )
);

export default function DropDownMenu({
  children,
  active = false,
  className,
  ...rest
}) {
  const [menuActive, setMenuActive] = useState(active);

  const menu = useRef(null);
  const dropdown = useRef(null);

  const activeMenu = () => {
    if (!menuActive) setMenuActive(true);
  };

  const passiveMenu = () => {
    if (menuActive) setMenuActive(false);
  };

  const closeActiveMenu = useCallback(
    (e) => {
      if (menu.current && menuActive && !menu.current.contains(e.target))
        passiveMenu();
    },
    [menuActive, menu]
  );

  useEffect(() => {
    window.addEventListener('mousedown', closeActiveMenu);
    return () => {
      window.removeEventListener('mousedown', closeActiveMenu);
    };
  }, [closeActiveMenu]);

  return (
    <div
      ref={dropdown}
      className={mergeClasses(['dropdown-menu', className])}
      onClick={(e) => activeMenu()}
      {...rest}
    >
      {React.Children.map(children, (child, index) => {
        if (index > 1)
          throw new Error('DropDownMenu cannot have more than two elements!');

        if (child.type.name === 'DropDownHeader') {
          return React.cloneElement(child, {
            activateMenu: activeMenu,
          });
        } else {
          return React.cloneElement(child, {
            open: menuActive,
            ref: menu,
          });
        }
      })}
    </div>
  );
}
