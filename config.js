const debug = process.env.NODE_ENV !== "production";

module.exports = {
    storgePath: "/Users/yangxiaofu/work/xiaofu/opensource-doc",
    assetPrefix: !debug ? "/documents" : ""
};
