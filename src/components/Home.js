import React from "react";
import ControlSwitches from "./ControlSwitches";
import ControlButtons from "./ControlButtons";
import Display from "./Display";
import { Row } from "react-grid-system";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timeValue: 100,
            timeUnit: "min",
            power: true
        };
    }

    changeTime = (action, offset) => {
        let newValue = this.state.timeValue;
        if (this.state.power) {
            switch (action) {
                case "up":
                    newValue = newValue + offset;
                    break;
                case "down":
                    newValue = newValue - offset;
                    break;
                case "slider":
                    newValue = Number(offset);
                    break;
            }
            this.setState({timeValue: newValue});
        }
    }

    changeUnit = (checked) => {
        if (this.state.power) {
            const value = checked ? "min" : "hrs";
            this.setState({timeUnit: value});
        }
    }

    togglePower = () => {
        this.setState({power: !this.state.power});
    }

    render() {

        return (
            <div className={"watchBody"}>
                <Row>
                    <Display power={this.state.power} timeUnit={this.state.timeUnit} timeValue={this.state.timeValue}/>
                    <ControlButtons power={this.state.power} togglePower={this.togglePower} changeTime={this.changeTime}/>
                </Row>
                <Row style={{ marginTop: "10px", marginBottom: '-15px'}}>
                    <ControlSwitches timeValue={this.state.timeValue} timeUnit={this.state.timeUnit} changeTime={this.changeTime} changeUnit={this.changeUnit}/>
                </Row>
            </div>
        );
    }
}