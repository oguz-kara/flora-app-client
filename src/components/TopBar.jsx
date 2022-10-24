import Typography from './Typography';
import DropDownMenu, { DropDownHeader, DropDownBody } from './DropDownMenu';
import '../style/top-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleDown,
  faBars,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import AccountMenu from './AccountMenu';
import { useContext } from 'react';
import UserContext from '../context/userContext';
import { useEffect } from 'react';

export default function TopBar({ onMenuClick }) {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <div className="topbar">
        <div className="topbar__menu">
          <button className="topbar__menu-button" onClick={onMenuClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <div className="actions">
          <DropDownMenu top={90}>
            <DropDownHeader className="actions__account">
              <div className="actions__avatar">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size="2x"
                  style={{ color: 'black' }}
                />
              </div>
              <div className="actions__content">
                <Typography variant="h1">{user.name}</Typography>
                <div className="actions__subtitle">Founder</div>
              </div>
              <div className="actions__drop-down">
                <FontAwesomeIcon icon={faChevronCircleDown} />
              </div>
            </DropDownHeader>
            <DropDownBody>
              <AccountMenu />
            </DropDownBody>
          </DropDownMenu>
        </div>
      </div>
    </>
  );
}
