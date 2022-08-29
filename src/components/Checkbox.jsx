import Box from './Box';
import Flex from './Flex';
import Label from './Label';
import Typography from './Typography';

export default function Cb({ className, label, onChange, value, ...props }) {
  return (
    <Label className={className ? className : ''}>
      <Box>
        {label ? <Typography variant="subtitle2">{label}</Typography> : ''}
        <input
          type="checkbox"
          {...props}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </Box>
    </Label>
  );
}
