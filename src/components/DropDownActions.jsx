import '../style/drop-down-actions.scss';
import mergeClasses from '../utils/mergeClasses';
import Box from './Box';
import DropDownMenu, { DropDownBody, DropDownHeader } from './DropDownMenu';
import Typography from './Typography';

function Action({ name, children, className, ...props }) {
  return (
    <button className={mergeClasses([className])} {...props}>
      {children}
    </button>
  );
}

export default function DropDownActions({ data, header, className, ...props }) {
  return (
    <Box className={mergeClasses([className])} {...props}>
      <DropDownMenu>
        <DropDownHeader style={{ zIndex: 99 }}>{header}</DropDownHeader>
        <DropDownBody className="background-dark bg-primary-background-light">
          <Box>
            {data.map((item) => (
              <Action
                className={mergeClasses(['p-2', 'hover:bg-primary-color', 'w-full'])}
                onClick={(e) => item.action(e)}
              >
                <Typography variant="small">{item.name}</Typography>
              </Action>
            ))}
          </Box>
        </DropDownBody>
      </DropDownMenu>
    </Box>
  );
}
