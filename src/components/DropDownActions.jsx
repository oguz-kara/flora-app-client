import '../style/drop-down-actions.scss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mergeClasses from '../utils/mergeClasses';
import Box from './Box';
import DropDownMenu, { DropDownBody, DropDownHeader } from './DropDownMenu';
import Typography from './Typography';

function Action({ name, children, className, ...props }) {
  return (
    <button
      className={mergeClasses(['action', 'hover-bg-light', className])}
      {...props}
    >
      {children}
    </button>
  );
}

export default function DropDownActions({ data, ...props }) {
  return (
    <Box className="dda-container">
      <DropDownMenu>
        <DropDownHeader style={{ zIndex: 99 }}>
          <FontAwesomeIcon icon={faChevronDown} size="sm" />
        </DropDownHeader>
        <DropDownBody className="background-dark">
          <Box>
            {data.map((item) => (
              <Action className="p-10" onClick={(e) => item.action(e)}>
                <Typography variant="small">{item.name}</Typography>
              </Action>
            ))}
          </Box>
        </DropDownBody>
      </DropDownMenu>
    </Box>
  );
}
