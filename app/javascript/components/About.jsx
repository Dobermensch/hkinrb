import React, { Component } from "react";
import Nav from "./Nav";
import "../../assets/stylesheets/application.css";

const p_style={
    fontSize: "2.5vh"
}

class About extends Component {
    render() {
        return (
            <div>
                <div style={{width: "100vw", display: "flex", justifyContent: "center"}}>
                    <Nav />
                </div>
                <div className="vw-100 vh-100 primary-color d-flex">
                    <div className="vw-100 row" style={{padding: "5vh 10vw 5vh 10vw", height: "100%", display: "flex", justifyContent: "center"}}>
                        <ul>
                            <li style={p_style}>
                                This is a safe space for people who have unfortunately been discriminated against on the basis of their race
                                to share their stories in the hopes of letting them lighten their hearts and know that they are not alone.      
                            </li>
                            <li style={p_style}>
                                Personally, I started this project to see if others faced what I faced too. I don't know what I'll do with this information
                                even if I get it.
                            </li>
                            <li style={p_style}>
                                To whom it may concern, the objective of this project isn't to call out or to indignify other people. 
                                That's why the name of the project bears this reminder. An individual's actions/thoughts cannot represent the actions/thoughts of the whole. 
                            </li>
                            <li style={p_style}>
                                Each story is represented by a color changing ball to illustrate that these stories have color as a recurring theme.
                                At a glace, it symbolizes a society of people of different colors, ironically portraying a "dark" issue with color.     
                            </li>
                            <li style={p_style}>
                                "A user interface is like a joke, if you have to explain it, it's not that good". Fuck it - click on a ball to reveal it's story.
                            </li>
                        </ul>
                        <p style={p_style}>
                            If posting a story, you will be asked for your email and phone number just in case but these will not be revealed publicly.  
                        </p>
                    </div>
                </div>   
            </div>
        )
    }
}

export default About;