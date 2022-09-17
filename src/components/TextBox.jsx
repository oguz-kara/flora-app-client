import React from 'react';
import '../style/text-box.scss';
import mergeClasses from '../utils/mergeClasses';

function NormalTextBox({ fullWidth, className, disabled, ...props }) {
  return (
    <input
      className={mergeClasses([
        fullWidth ? 'textbox full-width' : 'textbox',
        className,
      ])}
      disabled={disabled}
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

const TextBox = React.forwardRef(
  ({ icon, className, disabled = false, ...props }, ref) => {
    return icon ? (
      <TextBoxWithIcon icon={icon} ref={ref} {...props} />
    ) : (
      <NormalTextBox
        className={mergeClasses([
          'p-2.5',
          disabled ? 'bg-primary-background-300' : 'bg-primary-background',
          className,
        ])}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

export default TextBox;
