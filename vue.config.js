const webpack = require("webpack");
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/dr/home' : '/', //静态资源目录
	outputDir: "dr/home", //构建输出目录
	assetsDir: 'resource', //静态资源目录
	lintOnSave: false, //是否开启代码检测
	productionSourceMap: false,  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = '家庭医生'
				return args
			})
	},
	devServer: {
		port: 8018, //端口
		open: true, //自动打开
		proxy: { //代理
			'/api': {
				target: 'http://192.168.1.179:8009/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		},
		disableHostCheck: true
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
		],
		// externals: { 	//忽略打包
		// 	'vue': 'Vue',
		// 	'vue-router': 'VueRouter',
		// 	'element-ui': 'ELEMENT',
		// 	'jquery': '$'
		//},
	}
};
