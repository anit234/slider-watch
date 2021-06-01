import React from "react";

export default class Slider extends React.Component {

    render() {

        return (
            <div className={"slider-area"}>
            <input onChange={(e) => this.props.changeTime("slider", e.target.value)} type="range" min="0" max="500" step="10" value={this.props.timeValue} className={"slider"}/>
                <div class='ruler'>                
                {Array(10).fill(1).map((u, i) => i+1).map(()=>
                    <div class='cm'>
                        {Array(4).fill(1).map((u, i) => i+1).map(()=><div class='mm'></div>)}
                    </div>
                )}  
                </div>
            </div>
        );
    }
}