import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import mergeClasses from '../utils/mergeClasses';

export default function Box({ pending, className, children, ...props }) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (pending) {
      setShowLoader(true);
    }

    if (!pending && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [pending, showLoader]);

  return (
    <div className={mergeClasses([className])} {...props}>
      {showLoader ? <Spinner /> : children}
    </div>
  );
}

function Spinner({ center }) {
  return (
    <div
      className={mergeClasses([
        'text-center h-screen',
        center ? 'flex justify-center items-center' : '',
      ])}
    >
      <div className="inline-block">
        <FontAwesomeIcon className="spinner" icon={faCircleNotch} spin size="2x" />
      </div>
    </div>
  );
}
