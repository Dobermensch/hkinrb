import React, { Component } from "react"

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
        this.setState({ 
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255)
        })
    }

    render() {
        let { r, g, b } = this.state;
        return (
            <div className="circle" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} onClick={this.props.handleStoryClick} />
        )
    }
}

export default Story;