import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const DefaultLoader = () => {
  return (
    <span className="relative">
      <FontAwesomeIcon className="fa-secondary-6" icon={faSpinner} size="3x" spinPulse />
    </span>
  );
};

export default function Loader({ show, setShow }) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (show) {
      setShowLoader(true);
    }

    // Show loader a bits longer to avoid loading flash
    if (!show && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      // Don’t forget to clear the timeout
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show, showLoader]);
  return <div className="flex justify-center">{<DefaultLoader />} </div>;
}
