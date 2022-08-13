import Flex from './Flex';
import Label from './Label';
import Typography from './Typography';

export default function Cb({ className, children, ...props }) {
  return (
    <Label className={className ? className : ''} style={{marginRight: 5}}>
      <Flex className="items-center justify-center">
        <Typography className="mr-2" variant="subtitle2">
          {children}
        </Typography>
        <input type="checkbox" {...props} />
      </Flex>
    </Label>
  );
}
