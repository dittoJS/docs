import { Component } from 'react';
import utils from '../../utils.js';

import "./aside.scss";
export default class ASide extends Component {
    render () {
        const menuObjec = this.props.menu || [0, 1];
        const url = this.props.url;
        return (
            <div className="menu menu-side">
                {
                    menuObjec.map((menu, i) => {
                        return <div key={i}>
                                <p className="menu-label">
                                    {menu.title}
                                </p>
                                <ul className="menu-list">
                                    {
                                        this.sortMenuItems(menu.body).map((item) => {
                                        let isActive = item.key == url.query.id ? 'is-active' : '';
                                return (
                                                <li key={item.key}>
                                                    <a className={isActive} href={utils.url(`${this.props.prefix}/${item.key}`)}>{item.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                          </div>;
                    })
                }
            </div>
        );
    }

    sortMenuItems = (arr) => {
        return arr.sort(function (a, b) {
            return Number(a.tags[0]) - Number(b.tags[0]);
        })
    }
}
