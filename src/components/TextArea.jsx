import '../style/text-area.scss';

export default function TextArea({ fullWidth, ...props }) {
  const getClassList = () => {
    return fullWidth ? 'textarea full-width' : 'textarea';
  };
  return (
    <textarea
      className={getClassList()}
      type="text"
      {...props}
    />
  );
}
