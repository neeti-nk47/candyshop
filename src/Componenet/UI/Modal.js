import { Fragment } from 'react'
import ReactDom from 'react-dom'
import  classes from './Modal.module.css'

const Backdrop = (props)=>{
    return( <div className={classes.backdrop} onClick={props.onClick}/>)
}

const Overlay = (props)=>{
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}


const Modal = (props)=>{
    const place = document.getElementById('overlays')

    return (
    <Fragment>
    {ReactDom.createPortal(<Backdrop onClick={props.onClose}/>,place)}
    {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,place)}
            </Fragment>
    )
}
export default Modal;