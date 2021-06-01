import React from "react";
import { timeUnitsDisplay } from "../common/constant";
import { ReactComponent as ClockSvg } from '../icons/clock.svg';

export default class Display extends React.Component {

    render() {

        return (
            <div className={"display"}>
                {this.props.power && <React.Fragment>
                    <span ><ClockSvg className={"display-icon"}/></span>
                    <span style={{float: "right", marginRight: "10px"}}>
                        <span className={"display-value"}>{this.props.timeValue}</span>&nbsp;
                        <span className={"display-unit"}>{timeUnitsDisplay[this.props.timeUnit]}</span>
                    </span>
                </React.Fragment>}
            </div>
        );
    }
}