import DropDownMenu, { DropDownHeader, DropDownBody } from './DropDownMenu';
import '../style/top-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faChevronCircleDown,
  faSearch,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import SearchMenu from './SearchMenu';
import AccountMenu from './AccountMenu';

export default function TopBar({ onMenuClick }) {
  return (
    <>
      <div className="topbar">
        <div className="topbar__menu">
          <button className="topbar__menu-button" onClick={onMenuClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <div className="actions">
          <div className="actions__notifications">
            <div className="actions__notification">
              <DropDownMenu top={90}>
                <DropDownHeader>
                  <div className="actions__icon-container">
                    <FontAwesomeIcon icon={faSearch} size="xl" />
                  </div>
                </DropDownHeader>
                <DropDownBody top={23} left={21}>
                  <SearchMenu />
                </DropDownBody>
              </DropDownMenu>
            </div>
          </div>
          <DropDownMenu top={90}>
            <DropDownHeader className="actions__account">
              <div className="actions__avatar">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="avatar"
                />
              </div>
              <div className="actions__content">
                <h4 className="actions__title">Hasan Kara</h4>
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
