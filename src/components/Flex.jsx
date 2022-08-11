import mergeClasses from '../utils/mergeClasses';

export default function Flex({
  className,
  children,
  wrap,
  alignCenter,
  justifyCenter,
  spaceBetween,
  props,
}) {
  return (
    <div
      {...props}
      className={mergeClasses([
        'flex',
        className,
        wrap && 'wrap',
        alignCenter && 'align-center',
        justifyCenter && 'justify-center',
        spaceBetween && 'space-between',
      ])}
    >
      {children}
    </div>
  );
}
