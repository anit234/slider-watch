import React from 'react';
import { ReactComponent as UpSvg } from '../icons/up.svg';
import { ReactComponent as DownSvg } from '../icons/down.svg';

export default class ControlButtons extends React.Component {
  render() {
    return (
      <div className={'control-buttons'}>
        <div className={'up-down-buttons-area'}>
          <UpSvg
            onClick={() => this.props.changeTime('up', 10)}
            className={'up-down-buttons'}
          />
          <DownSvg
            onClick={() => this.props.changeTime('down', 10)}
            className={'up-down-buttons'}
          />
        </div>
        <div className={'pwr-button-area'}>
          <div onClick={this.props.togglePower} className={'pwr-button'}>
            <div className={'pwr-icon'}>
              <div
                className={this.props.power ? 'pwr-icon-on' : 'pwr-icon-off'}
              ></div>
            </div>
            &nbsp;
            <span>PWR</span>
          </div>
        </div>
      </div>
    );
  }
}
