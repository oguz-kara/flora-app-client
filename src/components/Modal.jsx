import '../style/modal.scss';
import { useState, useEffect } from 'react';
import mergeClasses from '../utils/mergeClasses';

export default function Modal({ active, setActive, className, ...props }) {
  const getClassList = () => {
    return active
      ? mergeClasses(['modal', className])
      : mergeClasses(['modal modal--passive', className]);
  };

  useEffect(() => {
    if (document) {
      active
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    }
  }, [active]);

  return (
    <>
      <div className={getClassList()} {...props}>
        <div className="modal-overlay" onClick={(e) => setActive(false)}></div>
        {props.children}
      </div>
    </>
  );
}
