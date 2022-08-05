import '../style/text-box.scss';

function NormalTextBox({ fullWidth, ...props }) {
  const getClassList = () => {
    return fullWidth ? 'textbox full-width' : 'textbox';
  };
  return <input className={getClassList()} type="text" {...props} />;
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

export default function TextBox({ icon, ...props }) {
  return icon ? (
    <TextBoxWithIcon icon={icon} {...props} />
  ) : (
    <NormalTextBox {...props} />
  );
}
