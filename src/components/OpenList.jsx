import '../style/open-list.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Typography from './Typography';

export default function OpenList({ header, children, isOpen = false }) {
  const [open, setOpen] = useState(isOpen);

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
      <Typography variant="h6" onClick={(e) => setOpen(!open)} className="open-list__list-header">
        <span>{header}</span>
        {getChevron(open)}
      </Typography>
      <div className={getOpenListBodyClassList(open)}>{children}</div>
    </div>
  );
}
