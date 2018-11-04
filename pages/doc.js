import React, { Component } from 'react';

import Link from 'next/link';
import HeaderComponent from '../client/layout/header/header.js';
import FooterComponent from '../client/layout/footer/footer.js';
import NotesListComponent from '../client/components/NotesList/NotesList.js';
import SideComponent from '../client/components/aside/aside.js';
import IphoneComponent from '../client/components/iphone6/index';

import { Http } from '../client/utils.js';

export default class HomePage extends Component {
    static async getInitialProps({ query }) {
        let res = await Http.get('/notes/getDoc', { key: query.id });
        let resAll = await Http.get('/notes/docsList');

        return {
            note: res,
            menuObj: processMenu(resAll)
        };
    }

    render() {
        return (
            <div className="">
                <HeaderComponent />
                <div className="nav-transition" />
                <div className="container markdown-body menu-wrap">
                    <SideComponent prefix="/doc" menu={this.props.menuObj} url={this.props.url} />
                    <div className="container menu-body">
                        <div className="content" dangerouslySetInnerHTML={{ __html: this.props.note.content }} />
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

/**
<div className='silver'>
    <IphoneComponent />
</div>
 */

/**
 * process menu data
 */
function processMenu(obj = {}) {
    return [
        {
            title: 'Introduction',
            body: obj['transform-introduction'] || []
        },
        {
            title: 'The Basics',
            body: obj['transform-basics'] || []
        },
        {
            title: 'The Components',
            body: obj['transform-base-components'] || []
        },
        {
            title: 'The Plugins',
            body: obj['transform-plugin'] || []
        }
    ];
}
