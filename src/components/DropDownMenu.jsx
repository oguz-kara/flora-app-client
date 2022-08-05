import '../style/drop-down-menu.scss';
import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useCallback,
} from 'react';

export const DropDownHeader = forwardRef(
  ({ children, activateMenu, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className="dropdown-header"
        {...rest}
        onClick={activateMenu}
      >
        {children}
      </span>
    );
  }
);

export const DropDownBody = forwardRef(
  ({ children, open = false, top, ...rest }, ref) =>
    open && (
      <div className="dropdown-body" {...rest} ref={ref} style={{ top }}>
        {children}
      </div>
    )
);

export default function DropDownMenu({
  children,
  active = false,
  top = 0,
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
      className="dropdown-menu"
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
            top,
          });
        }
      })}
    </div>
  );
}
