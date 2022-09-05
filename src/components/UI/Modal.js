import React from 'react';
import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop}>

    </div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>

};

const portalDiv = document.getElementById('overlays');

const Modal = props =>{
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalDiv)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalDiv)}
    </React.Fragment>
};

export default Modal;