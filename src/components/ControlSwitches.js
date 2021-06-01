import React from "react";
import Switch from "react-switch";
import Slider from "./Slider";

export default class ControlSwitches extends React.Component {

    render() {

        return (
            <div className={"control-switches"}>
                <span className={"switchLabel"}>
                    HRS&nbsp;
                    <Switch height={21} width={42} className={"switch"} offColor={"#000000"} uncheckedIcon={false} checkedIcon={false} onColor={"#000000"} onChange={this.props.changeUnit} checked={this.props.timeUnit === "min"} />
                    &nbsp;MIN
                </span>
                <Slider changeTime={this.props.changeTime} timeValue={this.props.timeValue} />
            </div>
        );
    }
}