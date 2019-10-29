import React from "react";
import "../../assets/stylesheets/application.css"

class Modal extends React.Component {
    render () {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
  
        return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <p>TEST</p>
                <button onClick={this.props.handleModalClose}>close</button>
            </section>
        </div>
        );
    }
}

export default Modal;