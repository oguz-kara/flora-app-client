import { useRef, useState, useEffect } from 'react';
import '../style/button.scss';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mergeClasses from '../utils/mergeClasses';
import Typography from './Typography';

export default function Button({
  className = 'btn',
  pending,
  type = 'button',
  children,
  variant = 'btn-filled',
  visibility = true,
  onClick,
  disabled,
  ...props
}) {
  const [showLoader, setShowLoader] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (pending) {
      setShowLoader(true);
    }

    // Show loader a bits longer to avoid loading flash
    if (!pending && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      // Don’t forget to clear the timeout
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [pending, showLoader]);

  return (
    <button
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      ref={ref}
      type={type ? type : ''}
      className={mergeClasses([
        'button',
        pending ? 'button--disabled' : '',
        visibility ? 'visible' : 'invisible',
        disabled ? 'button--disabled' : '',
        getVariant(variant),
        className,
      ])}
      disabled={pending ? true : false}
      {...props}
    >
      {showLoader ? (
        <FontAwesomeIcon className="spinner" icon={faCircleNotch} spin />
      ) : (
        <Typography
          className={mergeClasses([pending ? 'muted' : '', 'font-bold'])}
          // variant={variant}
        >
          {children}
        </Typography>
      )}
    </button>
  );
}

function getVariant(variant = 'filled') {
  switch (variant) {
    case 'filled':
      return 'btn-filled';
    case 'outlined':
      return 'btn-outlined';
    case 'transparent':
      return '';
    case 'danger-outlined':
      return 'danger-outlined';
    case 'danger-filled':
      return 'danger-filled';
    default:
      return '';
  }
}
