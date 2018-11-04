import 'bulma';
import './header.scss';
import '../../../client/layout/common/markdown.scss';
import utils from '../../utils.js';

import { Component } from 'react';

export default class Header extends Component {
    state = {
        isActive: ''
    }

    render () {
        return <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="navbar-brand">
                    <a className="navbar-item" href={utils.url('')}>
                  <img style={{ maxHeight: "none" }} src={utils.url('/static/img/ditto-logo.png')} width="72"/>
                </a>
                <div onClick={() => {this.toggleNavActiveClass(this.state.isActive)}} 
                    className={'navbar-burger burger ' + this.state.isActive} data-target="navMenuDocumentation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
              </div>
                <div onClick={() => { this.toggleNavActiveClass(this.state.isActive) }} 
                    className={"navbar-menu " + this.state.isActive}>
                <div className="navbar-end">
                        <a href={utils.url('')} className="navbar-item">首页</a>
                        <a href={utils.url(`/doc/304bca36-3be9-4c89-955f-a7ac8693d470`)}
                     className="navbar-item">文档</a>
                  <a href={`https://github.com/dittoJS/ditto`}
                     className="navbar-item">Github</a>
                  <a href="www.yangxiaofu.com"
                        className="navbar-item">博客</a>
                </div>
              </div>
            </div>
          </nav>;
    }

    toggleNavActiveClass = (classState) => {
        if (classState) {
            this.setState({
                isActive: ''
            });
        } else {
            this.setState({
                isActive: 'is-active'
            })
        }
    }
}

/*
<Link href='/'><a className="navbar-item">首页</a></Link>
<Link href='/post?id=e512e8fdd5418f746eca'><a className="navbar-item">Lab</a></Link>
*/
