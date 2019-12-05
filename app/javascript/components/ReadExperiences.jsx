import React, { Component } from "react";
import Nav from "./Nav"
import Story from "./Story"
import Modal from "./Modal"
import PostModal from "./PostModal"
import "../../assets/stylesheets/application.css"

class ReadExperiences extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Stories: [], 
            show: false, 
            post: false,
            story: "test",
            storyTitle: "title"
        }
    }

    componentDidMount() {
        // send fetch to server to retrieve number of stories.
        const cthis = this
        fetch(`http://localhost:3000/get_ids`, {method: "GET"})
        .then(function(resp){
            console.log(resp)
            return resp.json()    
        }).then(function(data){
            console.log(data)
            cthis.setState({Stories: data})
        }).catch(function(err){
            console.log("Oh no an error occurred")
            console.log(err)
        }) 
    }

    showModal = (r,g,b,id) => {
        console.log("clicked!")
        if (![r,g,b].every(x => x == 211)) {

            // this.getStory(id)

            this.setState({ show: true })    
        }
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    showPost = () => {
        this.setState({ post: true })
    }

    hidePost = () => {
        this.setState({ post: false })
    }

    getStory = (id) => {
        const cthis = this
        console.log(`localhost:3000/experiences/${id}`)
        fetch(`${process.env.React_APP_API_URL}/experiences/${id}`, {method: "GET"})
        .then(function(resp){
            return resp.json()    
        }).then(function(data){
            cthis.setState({story: data.story})
        }).catch(function(err){
            console.log("Oh no an error occurred")
            console.log(err)
        })
    }

    render() {

        const stories = []

        for (let i = 0; i < this.state.Stories.length; i++) {
            // TODO: shuffle array
            console.log(`${i}, ${this.state.Stories[i]}`)
            stories.push(<Story key={i} idProp={this.state.Stories[i]} handleStoryClick={this.showModal} />)
        }

        return (
            <div>
                <div style={{width: "100vw", display: "flex", justifyContent: "center"}}>
                    <Nav showPost={true} onPostClick={this.showPost} />
                </div>
                <div className="vw-100 vh-100 primary-color d-flex">
                    <div>
                        <Modal story={this.state.story} storyTitle={this.state.storyTitle} show={this.state.show} handleModalClose={this.hideModal} />
                    </div>
                    <div>
                        <PostModal show={this.state.post} handleModalClose={this.hidePost} />
                    </div>
                    <div className="vw-100 row" style={{padding: "5vh 10vw 5vh 10vw"}}>
                        {stories}
                    </div>
                </div>   
            </div>
        )
    }
}

export default ReadExperiences;