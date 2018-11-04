import { Component } from 'react';

import "./index.scss";

export default class IphoneSilver extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className='iphone-wrap'>
                <div className='screen'></div>
            </div>
        )
    }
}