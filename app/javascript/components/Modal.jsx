import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import "../../assets/stylesheets/application.css"

const FadeInDiv = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

class Modal extends React.Component {
    render () {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
  
        return (
        <FadeInDiv className={showHideClassName} tab-index="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{this.props.storyTitle}</h5>
                        <button type="button" className="close" aria-label="Close" onClick={this.props.handleModalClose}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{height: "65vh", overflowWrap: "break-word", overflowY: "auto"}}>
                        {this.props.age && 
                            <p>Age of poster: {this.props.age}</p>
                        }
                        {this.props.ethnicity && 
                            <p>Ethnicity of poster: {this.props.ethnicity}</p>
                        }
                        <p><b>Story:</b></p>
                        <p>{this.props.story}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={this.props.handleModalClose}>Close</button>
                    </div>
                </div>
            </div>
        </FadeInDiv>
        );
    }
}

export default Modal;