import React from 'react'
import './Modal.css'
import Portal from './Portal'

export default class Modal extends React.Component {

    render() {

        const handleModalDialogClick = (e) => {
            e.stopPropagation();
        }    

        const { titulo, mensaje, toggle, active } = this.props;

        return (
            <Portal>
                {active && (
                <div className={`modal ${active && 'modal-open'}`} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document" onClick={handleModalDialogClick}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{titulo}</h5>
                                </div>
                                <div className="modal-body"> 
                                    <p className="mensaje" >{mensaje}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={toggle}>Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </Portal>
        )
    }
}
