import UserLoginForm from '../User/LoginForm';
import classes from './Modal.module.css';

function Modal ({ children, onClose }) {
    return(
        <>
        <div className={classes.backdrop}/>
        <dialog open className={classes.modal}><UserLoginForm /></dialog>
        
        </>
    );
};

export default Modal;