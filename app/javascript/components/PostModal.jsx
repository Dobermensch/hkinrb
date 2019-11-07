import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import "../../assets/stylesheets/application.css"

const FadeInDiv = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

class PostModal extends React.Component {
    constructor(props) {
        super(props)
    }

    submitStory = () => {
        // perform input validation and then send to server
    }

    render () {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
  
        return (
        <FadeInDiv className={showHideClassName} tab-index="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Share your experience</h5>
                        <button type="button" className="close" aria-label="Close" onClick={this.props.handleModalClose}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{height: "65vh", overflowWrap: "break-word", overflowY: "auto"}}>
                        <form>
                            <div class="form-group">
                                <label for="InputEmail1">Email address</label>
                                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="InputPhone1">Mobile Number</label>
                                <input type="tel" class="form-control" id="InputPhone1" aria-describedby="phoneHelp" placeholder="Enter mobile number" required />
                                <small id="phoneHelp" class="form-text text-muted">We'll never share your number with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="StoryText">Your Experience</label>
                                <textarea class="form-control" id="StoryText" rows="4" aria-describedby="StoryHelp" minLength="100" required></textarea>
                                <small id="StoryHelp" class="form-text text-muted">This needs to be at least 100 characters long</small>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={this.submitStory}>Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={this.props.handleModalClose}>Close</button>
                    </div>
                </div>
            </div>
        </FadeInDiv>
        );
    }
}

export default PostModal;