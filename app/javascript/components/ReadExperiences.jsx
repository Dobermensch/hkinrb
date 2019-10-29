import React, { Component } from "react";
import Nav from "./Nav"
import Story from "./Story"
import Modal from "./Modal"
import "../../assets/stylesheets/application.css"

const test = {
    border: "2px dotted"
}

class ReadExperiences extends Component {
    constructor(props) {
        super(props)

        this.state = {numOfStories: 1, show: false}
    }

    componentDidMount() {
        // send fetch to server to retrieve number of stories. 
    }

    showModal = () => {
        this.setState({ show: true })
        console.log("clicked")
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render() {

        const stories = []
        for (let i = 0; i < this.state.numOfStories; i++) {
            stories.push(<Story key={i} handleStoryClick={this.showModal} />)
        }

        return (
          <div style={test} className="vw-100 primary-color d-flex">
              <Nav />
              <Modal show={this.state.show} handleModalClose={this.hideModal} />
              <div className="vw-100 row">
                {stories}
              </div>
          </div>   
        )
    }
}

export default ReadExperiences;