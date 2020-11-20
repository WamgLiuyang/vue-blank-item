// 自适应Px转Rem
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = ({ file }) => {
    let rootValue = 0;
    // vant 37.5 https://github.com/youzan/vant/issues/1181
    if (file && file.dirname && file.dirname.indexOf('van') > -1) {
        rootValue = '37.5'
    } else {
        rootValue = '72'
    }
    return {
        plugins: [
            autoprefixer({
                browsers: ['Android >= 4.0', 'iOS >= 7'],
				overrideBrowserslist: ['> 0.15% in CN'] 	//解决PostCSS配置报警告问题
            }),
            pxtorem({
                rootValue: rootValue,
                propList: ['*'],
                minPixelValue: 3
            })
        ]
    }
};