const webpack = require("webpack");
module.exports = {
	publicPath: '/', //静态资源目录
	outputDir: "dist", //构建输出目录
	assetsDir: 'resource', //静态资源目录
	lintOnSave: false, //是否开启代码检测
	devServer: {
		port: 8888, //端口
		open: true, //自动打开
		proxy: { //代理
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			}
		}
	},
	configureWebpack: { //配置jquery
		entry: {
			app: './src/main.js',
		},
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"windows.jQuery": "jquery"
			})
		]
	}
};
