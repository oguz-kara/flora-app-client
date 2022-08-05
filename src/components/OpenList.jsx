import '../style/open-list.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faPlus,
  faList,
} from '@fortawesome/free-solid-svg-icons';

export default function OpenList({ header, children, isOpen = false }) {
  const [open, setOpen] = useState(isOpen);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const getBodyClassList = () => {
    return open ? 'active' : 'passive';
  };

  const getOpenListBodyClassList = (condition) => {
    return condition
      ? 'open-list__body open-list__body--active'
      : 'open-list__body';
  };

  const getChevron = (condition) => {
    if (condition) return <FontAwesomeIcon icon={faChevronUp} size="2xs" />;
    return <FontAwesomeIcon icon={faChevronDown} size="2xs" />;
  };

  return (
    <div className="open-list">
      <h6 onClick={(e) => setOpen(!open)} className="open-list__list-header">
        <span>{header}</span>
        {getChevron(open)}
      </h6>
      <div className={getOpenListBodyClassList(open)}>
        {children}
      </div>
    </div>
  );
}
