import '../style/text-box.scss';
import mergeClasses from '../utils/mergeClasses';

function NormalTextBox({ fullWidth, className, ...props }) {
  return (
    <input
      className={mergeClasses([
        fullWidth ? 'textbox full-width' : 'textbox',
        className,
      ])}
      type="text"
      {...props}
    />
  );
}

function TextBoxWithIcon({ fullWidth, icon, ...props }) {
  const getClassList = () => {
    return fullWidth ? 'textbox-icon-container full-width' : 'textbox-icon';
  };
  return (
    <div className={getClassList()}>
      <div className="textbox-icon__icon">{icon}</div>
      <input className="textbox-icon" type="text" {...props} />
    </div>
  );
}

export default function TextBox({ icon, className, ...props }) {
  return icon ? (
    <TextBoxWithIcon icon={icon} {...props} />
  ) : (
    <NormalTextBox className={mergeClasses(['p-2.5', className])} {...props} />
  );
}
