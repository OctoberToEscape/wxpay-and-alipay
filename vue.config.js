const path = require("path");
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false,
    publicPath:
        process.env.NODE_ENV === "production" ||
        process.env.NODE_ENV === "alpha"
            ? "/aura-h5"
            : "/",
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/styles/main";`,
            },
        },
        // 是否使⽤用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === "development") {
            return {
                devServer: {
                    proxy: {
                        "/api": {
                            target: "https://testapp.feimayun.com",
                            changeOrigin: true,
                            secure: false,
                            pathRewrite: {
                                "^/api": "",
                            },
                        },
                    },
                    watchOptions: {
                        poll: true,
                        ignored:
                            /(node_modules|dist|build|vendor|Docker|tests|backup|\.lock|\.git)/,
                    },
                    disableHostCheck: true,
                    historyApiFallback: true,
                },
                devtool: "source-map",
            };
        } else if (
            process.env.NODE_ENV === "production" ||
            process.env.NODE_ENV === "alpha"
        ) {
            return {
                performance: {
                    hints: "warning",
                    maxEntrypointSize: 50000000,
                    maxAssetSize: 30000000,
                    assetFilter: (assetFilename) => {
                        return assetFilename.endsWith(".js");
                    },
                },
            };
        }

        return {
            plugins: [
                ComponentsPlugin({
                    resolvers: [VantResolver()],
                }),
            ],
        };
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");
        // 清除已有的所有 loader。如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear();
        // 添加别名
        config.resolve.alias.set("@", path.resolve("src"));

        config.module
            .rule("svg")
            .test(/\.svg$/)
            .include.add(path.resolve("src/icons"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            // 使用时id形式与symbolId保持一致
            // options可以不要，默认的id是svg文件名=name
            // use xlink:href="#icon-user", 这个#icon-user就是id
            .options({
                symbolId: "icon-[name]",
            });

        config
            .plugin("webpack-bundle-analyzer")
            .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);

        if (
            process.env.NODE_ENV === "production" ||
            process.env.NODE_ENV === "alpha"
        ) {
            config.plugin("compressionPlugin").use(
                new CompressionPlugin({
                    filename: "[path].gz[query]", // 压缩后的文件名(保持原文件名，后缀加.gz)
                    algorithm: "gzip", // 使用gzip压缩
                    test: productionGzipExtensions,
                    threshold: 10240, // 对超过10k的数据压缩
                    minRatio: 0.8, // 压缩率小于0.8才会压缩
                    deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
                })
            );
        }
    },
};
