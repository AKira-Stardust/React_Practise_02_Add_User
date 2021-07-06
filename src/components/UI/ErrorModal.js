import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
    return(
        <div className={styles.backdrop} onClick={props.onConfirm}/>
    );
}

const ModalOverlay = (props) => {
    return(
        <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title2}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message2}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm2}>Okay</Button>
                </footer>
        </Card>
    );
}

const ErrorModal = (props) => {
    return(
        <React.Fragment>     
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title2={props.title}
                    message2={props.message}
                    onConfirm2={props.onConfirm}
                />,
                document.getElementById("overlay-root")
            )}
        </React.Fragment>
    );
}

export default ErrorModal;