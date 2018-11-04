// next.config.js
const withSass = require("@zeit/next-sass");
const notesApi = require('./lib/notes/index.js');
const fs = require("fs-extra");
const Config = require('./config.js');
const path = require('path');

const _path = Config.storgePath || "/Users/yangxiaofu/Boostnote";
const assetPrefix = Config.assetPrefix;

function saveStorge () {
    fs.emptyDirSync("./storge");
    fs.copySync(_path, './storge', {
        overwrite: true
    });
}

async function getNotesList () {
    let res = await notesApi.fetchNotes();
    return res;
}
let nextConfigJs = {
  exportPathMap: async function(defaultPathMap) {
    let pages = {
        "/": { page: "/index" },
        "/docs": { page: "/docs" },
        "/doc": { page: "/doc" }
    };

    let postPages = {};
    let Posts = await getNotesList();
    let allPosts = Posts.all;
    

    allPosts.map(post => {
      postPages[`/doc/${post.key}`] = {
        page: "/doc",
        query: { id: post.key }
      };
    });

    // let transformIntroDocs = Docs['transform-introduction'] || [];
    // let transformDocs = Docs['transform-basics'] || [];
    // let transformComponentsDocs = Docs['transform-base-components'] || [];
    // let transformPluginDocs = Docs['transform-plugin'] || [];
    // transformDocs = transformDocs.concat(transformComponentsDocs);
    // transformDocs = transformDocs.concat(transformPluginDocs);
    // transformDocs = transformDocs.concat(transformIntroDocs);
    // transformDocs.map(post => {
    //     postPages[`/ditto/docs/${post.key}`] = {
    //         page: '/ditt/docs',
    //         query: { id: post.key }
    //     };
    // });
    // saveStorge
    // saveStorge();
    return Object.assign(pages, postPages);
  },
  assetPrefix: assetPrefix
};
module.exports = withSass(nextConfigJs)
