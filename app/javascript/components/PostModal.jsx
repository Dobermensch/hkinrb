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
        if (document.getElementById("InputEmail1").value.length == 0 || 
            document.getElementById("InputPhone1").value.length == 0 || 
            document.getElementById("StoryText").value.length < 100 ) {
                alert("Please fill out the required fields. The story needs to be at least 100 characters long.")
                return
            }    

        const bod = {
            story: document.getElementById("StoryText").value,
            title: document.getElementById("TitleText").value,
            email: document.getElementById("InputEmail1").value, 
            phone_number: document.getElementById("InputPhone1").value,
            location: document.getElementById("LocationText").value, 
            name_poster: document.getElementById("NameText").value
        }   

        fetch(`/experiences`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(bod) 
        }).then(function(resp){
            return resp.json()
        }).then(function(data){
            console.log(data)
        }).catch(function(err){
            console.log("Oh no, an error occured")
            console.log(err)
        })
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
                            <div className="form-group">
                                <label htmlFor="InputEmail1">Email address</label>
                                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPhone1">Mobile Number</label>
                                <input type="tel" className="form-control" id="InputPhone1" aria-describedby="phoneHelp" placeholder="Enter mobile number" required />
                                <small id="phoneHelp" className="form-text text-muted">We'll never share your number with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="StoryText">Your Experience</label>
                                <textarea className="form-control" id="StoryText" rows="4" aria-describedby="StoryHelp" minLength="100" required></textarea>
                                <small id="StoryHelp" className="form-text text-muted">This needs to be at least 100 characters long</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="TitleText">Title (Optional)</label>
                                <input type="text" className="form-control" id="TitleText" aria-describedby="TitleHelp" placeholder="Enter Title" />
                                <small id="TitleHelp" className="form-text text-muted">Entering a title helps people remember the story</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="LocationText">Location (Optional)</label>
                                <input type="text" className="form-control" id="LocationText" aria-describedby="LocationHelp" placeholder="Enter Location" />
                                <small id="LocationHelp" className="form-text text-muted">Where did this occur? Work? School?</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="NameText">Name (Optional)</label>
                                <input type="text" className="form-control" id="NameText" aria-describedby="NameHelp" placeholder="Enter Name" />
                                <small id="NameHelp" className="form-text text-muted">We'll never share it with anyone</small>
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