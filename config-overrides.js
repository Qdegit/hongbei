const {
    override,
    fixBabelImports,
    addWebpackAlias
} = require("customize-cra")

const path = require("path")

module.exports = override(
    //利用antd按需加载
    fixBabelImports('import',{
        libraryName:'antd-mobile',
        libraryDirectory:"es",
        style:'css',
    }),
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "./src"),
        ["@views"]: path.resolve(__dirname, "./src/views"),
        ["@components"]: path.resolve(__dirname, "./src/components"),
        ["@router"]:path.resolve(__dirname,"./src/router"),
        ["@common"]:path.resolve(__dirname,"./src/common"),
        ["@store"]:path.resolve(__dirname,"./src/store"),
        ["@utils"]:path.resolve(__dirname,"./src/utils"),
        ["@filters"]:path.resolve(__dirname,"./src/filters")
    })
)



