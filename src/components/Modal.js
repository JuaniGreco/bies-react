import React from 'react'
import './Modal.css'

const Modal = ({ isOpen, closeModal, title, mensaje }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document" onClick={handleModalDialogClick}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{mensaje}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={closeModal} >Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

