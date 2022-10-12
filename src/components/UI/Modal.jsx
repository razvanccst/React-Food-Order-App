import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom';


const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalDiv = document.getElementById('overlays')

const Modal = (props) => {
  return (<>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalDiv)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalDiv)}
  </>
  )
}

export default Modal