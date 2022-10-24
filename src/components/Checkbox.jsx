import Box from './Box';
import Label from './Label';
import Typography from './Typography';

export default function Cb({ className, label, onChange, value, ...props }) {
  return (
    <Label className={className ? className : ''}>
      <Box>
        {label ? <Typography variant="subtitle2">{label}</Typography> : ''}
        <input type="checkbox" value={value} onChange={(e) => onChange(e)} />
      </Box>
    </Label>
  );
}
