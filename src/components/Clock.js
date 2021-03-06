import React, { Component } from 'react'


/****** Clock Component class Here ******/
export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString().split(', ')[1]
        };
    }
    // When mounted, start interval 1 second ticker to update time
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // Clear the timer when module is unmounted
    componentWillUnmout() {
        clearInterval(this.intervalID);
    }
    // Function to re render the clock on the screen
    tick() {
        // Set the state every second to update the time on screen
        this.setState({
            time: new Date().toLocaleString().split(', ')[1]
        });
    }
    // Render the time as state to the screen
    render() {
        return (
            <div className="clock center-align">
                <p
                    className="clock__time">
                    {this.state.time}
                </p>
            </div>
        );
    }
}

