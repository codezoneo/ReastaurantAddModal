import React from 'react';
import  ReactDOM  from 'react';

import classes from './Modal.module.css';

const Backdrop = props=>{
    return <div className={classes.backdrop}/>
}
const ModalOverLay  = (props) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children }</div>
  </div>
};

const portalElement = document.getElementById('overLays')
const Modal = props =>{
    return (
      <>
        {ReactDOM.createPortal(<Backdrop />,portalElement)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,portalElement)}

        <ModalOverLay></ModalOverLay>
      </>
    );
}
export default Modal;