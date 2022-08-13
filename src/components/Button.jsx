import { useRef, useState, useEffect } from 'react';
import '../style/button.scss';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mergeClasses from '../utils/mergeClasses';
import Typography from './Typography';

export default function Button({
  className,
  pending,
  type,
  children,
  ...props
}) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

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
      ref={ref}
      type={type ? type : ''}
      className={mergeClasses([
        'button',
        pending ? 'button--disabled' : '',
        className,
      ])}
      disabled={pending ? true : false}
      style={
        width && height
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
      {...props}
    >
      {showLoader ? (
        <FontAwesomeIcon className="spinner" icon={faCircleNotch} spin />
      ) : (
        <Typography className={pending ? 'muted' : ''} variant="button">
          {children}
        </Typography>
      )}
    </button>
  );
}
