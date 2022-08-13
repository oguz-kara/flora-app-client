import mergeClasses from '../utils/mergeClasses';
import Typography from './Typography';

export default function MessageBlock({ title, icon, className }) {
  return (
    <div
      className={mergeClasses([
        'flex items-center p-5 w-full h-full',
        className,
      ])}
    >
      <div className="mr-3">{icon}</div>
      <div>
        <Typography
          className={mergeClasses(['text-muted', title.className])}
          variant="h6"
        >
          {title.text}
        </Typography>
      </div>
    </div>
  );
}
