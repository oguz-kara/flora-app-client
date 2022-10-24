import '../style/account-menu.scss';
import UserContext from '../context/userContext';
import { useContext } from 'react';
import { logout } from '../api/auth';
import { Link } from 'react-router-dom';

export default function AccountMenu() {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <div className="account-menu__search p-6">
        <div className="account-menu__search-body">
          <div className="account-menu__section-title">Manage Account</div>
          <ul className="account-menu__list">
            <li className="account-menu__list-item">
              <div className="account-menu__list-content">
                <Link
                  to="/account"
                  className="account-menu__list-content__title"
                >
                  Account
                </Link>
                <div className="account-menu__list-content__subtitle">
                  see account details
                </div>
              </div>
            </li>

            <li className="account-menu__list-item">
              <div className="account-menu__list-content">
                <button
                  onClick={async () => {
                    try {
                      const res = await logout();
                      if (res.success) {
                        setUser({});
                      }
                    } catch (err) {
                      console.log({ catchedError: err });
                    }
                  }}
                  className="account-menu__list-content__title"
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
