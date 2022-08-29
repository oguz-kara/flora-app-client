import '../style/modal.scss';
import { useEffect } from 'react';
import mergeClasses from '../utils/mergeClasses';

export default function Modal({ active, setActive, className, ...props }) {
  useEffect(() => {
    if (document) {
      active
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    }
  }, [active]);

  if (active)
    return (
      <>
        <div className={mergeClasses(['modal', className])} {...props}>
          <div
            className="modal-overlay"
            onClick={(e) => setActive(false)}
          ></div>
          {props.children}
        </div>
      </>
    );
}
