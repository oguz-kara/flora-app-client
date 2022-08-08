import '../style/modal.scss';
import { useState, useEffect } from 'react';

export default function Modal({ active, setActive, ...props }) {
  const getClassList = () => {
    return active ? 'modal' : 'modal modal--passive';
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
