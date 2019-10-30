import React, { Component } from "react";
import { bounce } from "react-animations"
import styled, { keyframes } from "styled-components";

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Story extends Component {
    constructor(props) {
        super(props)
        this.randomColorChange = this.randomColorChange.bind(this);
        this.state = {r: 255, g: 255, b: 255}
    }

    componentDidMount() {
        this.intervalVar = setInterval(this.randomColorChange, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalVar);
    }

    randomColorChange() {
        let x = Math.random()
        if (x < 0.1){
            this.setState({ 
                r: Math.floor(Math.random() * 255),
                g: Math.floor(Math.random() * 255),
                b: Math.floor(Math.random() * 255)
            })
        }
    }

    render() {
        let { r, g, b } = this.state;
        console.log([r,g,b].every(x => x != 255));
        let bouncer = Math.random() < 0.051;
        return (
            <div>
                {bouncer ? 
                    (<Bounce id={`story-${this.props.idProp}`} className="circle" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} onClick={this.props.handleStoryClick} />) 
                : 
                    (<div id={`story-${this.props.idProp}`} className="circle" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} onClick={this.props.handleStoryClick} />)
                }
            </div>
        )
    }
}

export default Story;