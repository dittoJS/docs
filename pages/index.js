import React, { Component } from "react";

import Link from "next/link";
import HeaderComponent from "../client/layout/header/header.js";
import FooterComponent from "../client/layout/footer/footer.js";
import NotesListComponent from "../client/components/NotesList/NotesList.js";
import SideComponent from "../client/components/aside/aside.js";
import IphoneComponent from "../client/components/iphone6/index";

import "./index.scss";
import { Http } from "../client/utils.js";

export default class HomePage extends Component {
    static async getInitialProps({ query }) {
        let res = await Http.get("/notes/getDoc", { key: query.id });
        let resAll = await Http.get("/notes/docsList");

        return {
            note: res,
            menuObj: processMenu(resAll)
        };
    }

    render() {
        return (
            <div className="page-wrapper">
                <HeaderComponent />
                <section className="banner introduction">
                    <h1 className="">
                        {" "}
                        DittoJs 是一个开放式的跨平台、 框架编译转换工具{" "}
                    </h1>{" "}
                    <h2 className="">
                        {" "}
                        编写一次， 编译成不同平台、 不同框架的代码{" "}
                    </h2>{" "}
                    <div className="container">
                        <a
                            href="/docs/docs/doc/304bca36-3be9-4c89-955f-a7ac8693d470"
                            class="button is-info is-outlined"
                        >
                            开始使用{" "}
                        </a>{" "}
                        <a
                            href="https://github.com/dittoJS/ditto"
                            class="button is-info is-outlined"
                        >
                            {" "}
                            Github{" "}
                        </a>{" "}
                    </div>{" "}
                </section>{" "}
                <section className="banner showcase">
                    <div className="container">
                        <nav className="level">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="subtitle"> 编码规范 </p>{" "}
                                    <p className="heading">
                                        {" "}
                                        指令式语法， 支持 jsx 模板{" "}
                                    </p>{" "}
                                </div>{" "}
                            </div>{" "}
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="subtitle"> 组件化 </p>{" "}
                                    <p className="heading">
                                        {" "}
                                        支持组件化开发， 层次清晰， 便于复用{" "}
                                    </p>{" "}
                                </div>{" "}
                            </div>{" "}
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="subtitle"> 跨端融合 </p>{" "}
                                    <p className="heading">
                                        {" "}
                                        编写一套代码， 生成不同端、 框架原生代码{" "}
                                    </p>{" "}
                                </div>{" "}
                            </div>{" "}
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="subtitle"> 开放式框架 </p>{" "}
                                    <p className="heading">
                                        {" "}
                                        基于插件的编译方式， 定制自己的编译规则{" "}
                                    </p>{" "}
                                </div>{" "}
                            </div>{" "}
                        </nav>{" "}
                    </div>{" "}
                </section>{" "}
                <section className="banner support">
                    <div className="container">
                        <div className="columns is-gap">
                            <div className="column">
                                <h2 className="title is-4"> 小程序 </h2>{" "}
                                <p className="heading"> 微信小程序 </p>{" "}
                                <p className="heading"> 百度小程序 </p>{" "}
                                <p className="heading"> 头条小程序 </p>{" "}
                            </div>{" "}
                            <div className="column">
                                <h2 className="title is-4"> 前端框架 </h2>{" "}
                                <p className="heading"> Vue </p>{" "}
                                <p className="heading"> React </p>{" "}
                                <p className="heading"> Angular </p>{" "}
                            </div>{" "}
                            <div class="column">
                                <h2 className="title is-4"> Native 开发 </h2>{" "}
                                <p className="heading"> React Native </p>{" "}
                                <p className="heading"> Weex </p>{" "}
                                <p className="heading"> Native Script </p>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </section>{" "}
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
            title: "The Basics",
            body: obj["transform-basics"] || []
        },
        {
            title: "The Components",
            body: obj["transform-base-components"] || []
        },
        {
            title: "The Plugins",
            body: obj["transform-plugin"] || []
        }
    ];
}
