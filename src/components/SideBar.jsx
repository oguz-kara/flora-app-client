import '../style/side-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faScaleBalanced,
  faCartShopping,
  faPlus,
  faList,
  faCashRegister,
  faMoneyBillWave,
  faPen,
  faArrowRotateBack,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import OpenList from './OpenList';
import NavLink from './NavLink';

export default function Sidebar({ open, onOverlayClick }) {
  const getSidebarStyles = () => {
    return open ? 'sidebar  sidebar__active' : 'sidebar sidebar__passive';
  };

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onOverlayClick}></div>}
      <div className={getSidebarStyles()}>
        <div className="sidebar__logo">KaraTicaret</div>
        <div className="sidebar__body">
          <ul className="sidebar__list">
            <li className="sidebar__link-list-item sidebar__link-list-item--active">
              <NavLink to="/dashboard" onClick={onOverlayClick}>
                <FontAwesomeIcon icon={faChartPie} />
                <span className="sidebar__link-text">Dashboard</span>
              </NavLink>
            </li>
            <li className="sidebar__link-list-item sidebar__link-list-item--active">
              <NavLink
                className="new-sale"
                to="/new-sale"
                onClick={onOverlayClick}
              >
                <FontAwesomeIcon icon={faCartPlus} />
                <span className="sidebar__link-text">
                  New sale
                </span>
              </NavLink>
            </li>
            <li className="sidebar__list-item">
              <OpenList header="Sales">
                <ul className="sidebar__link-list">
                  <li className="sidebar__link-list-item">
                    <NavLink to="/sales-list" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faScaleBalanced} />
                      <span className="sidebar__link-text">Sales list</span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink to="/product-sales" onClick={onOverlayClick}>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        onClick={onOverlayClick}
                      />
                      <span className="sidebar__link-text">Product sales</span>
                    </NavLink>
                  </li>
                </ul>
              </OpenList>
            </li>
            <li className="sidebar__list-item">
              <OpenList header="Products">
                <ul className="sidebar__link-list">
                  <li className="sidebar__link-list-item">
                    <NavLink to="/add-new-product" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faPlus} />
                      <span className="sidebar__link-text">
                        Add new product
                      </span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink to="/update-product" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faPen} />
                      <span className="sidebar__link-text">Update product</span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink to="/product-list" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faList} />
                      <span className="sidebar__link-text">Product list</span>
                    </NavLink>
                  </li>
                </ul>
              </OpenList>
            </li>
            <li className="sidebar__list-item">
              <OpenList header="Orders">
                <ul className="sidebar__link-list">
                  <li className="sidebar__link-list-item">
                    <NavLink to="/add-new-order" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faPlus} />
                      <span className="sidebar__link-text">Add new order</span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink to="/order-list" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faList} />
                      <span className="sidebar__link-text">Order list</span>
                    </NavLink>
                  </li>
                </ul>
              </OpenList>
            </li>
            <li className="sidebar__list-item">
              <OpenList header="Customers">
                <ul className="sidebar__link-list">
                  <li className="sidebar__link-list-item">
                    <NavLink to="/add-new-customer" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faPlus} />
                      <span className="sidebar__link-text">
                        Add new customer
                      </span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink to="/customer-list" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faList} />
                      <span className="sidebar__link-text">Customer list</span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink
                      to="/customer-new-payment"
                      onClick={onOverlayClick}
                    >
                      <FontAwesomeIcon icon={faCashRegister} />
                      <span className="sidebar__link-text">New payment</span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink
                      to="/customer-new-purchase"
                      onClick={onOverlayClick}
                    >
                      <FontAwesomeIcon icon={faMoneyBillWave} />
                      <span className="sidebar__link-text">New purchase</span>
                    </NavLink>
                    <NavLink to="/customer-return" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faArrowRotateBack} />
                      <span className="sidebar__link-text">
                        Customer return
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </OpenList>
            </li>
            <li className="sidebar__list-item">
              <OpenList header="Suppliers">
                <ul className="sidebar__link-list">
                  <li className="sidebar__link-list-item">
                    <NavLink to="/add-new-supplier" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faPlus} />
                      <span className="sidebar__link-text">
                        Add new supplier
                      </span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink to="/supplier-list" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faList} />
                      <span className="sidebar__link-text">Supplier list</span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink
                      to="/supplier-new-payment"
                      onClick={onOverlayClick}
                    >
                      <FontAwesomeIcon icon={faCashRegister} />
                      <span className="sidebar__link-text">New payment</span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink
                      to="/supplier-new-purchase"
                      onClick={onOverlayClick}
                    >
                      <FontAwesomeIcon icon={faMoneyBillWave} />
                      <span className="sidebar__link-text">New purchase</span>
                    </NavLink>
                  </li>
                </ul>
              </OpenList>
            </li>
            <li className="sidebar__list-item">
              <OpenList header="Expenses">
                <ul className="sidebar__link-list">
                  <li className="sidebar__link-list-item">
                    <NavLink to="/add-new-expense" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faPlus} />
                      <span className="sidebar__link-text">
                        Add new expense
                      </span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink to="/expense-list" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faList} />
                      <span className="sidebar__link-text">Expense list</span>
                    </NavLink>
                  </li>
                </ul>
              </OpenList>
            </li>
            <li className="sidebar__list-item">
              <OpenList header="Destructions">
                <ul className="sidebar__link-list">
                  <li className="sidebar__link-list-item">
                    <NavLink to="/add-new-destruction" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faPlus} />
                      <span className="sidebar__link-text">
                        Add new destruction
                      </span>
                    </NavLink>
                  </li>
                  <li className="sidebar__link-list-item">
                    <NavLink to="/destruction-list" onClick={onOverlayClick}>
                      <FontAwesomeIcon icon={faList} />
                      <span className="sidebar__link-text">
                        Destruction list
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </OpenList>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
