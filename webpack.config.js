const path = require('path');//这是node内置的模块
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动引入js文件。
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//自动清除原来的打包文件，是分别引入的方式
module.exports = {
    mode:"development",
    entry:{//entry可以是一个字符串也可以是一个对象 如果是一个字符串可以是index.js的相对路径。
        //如果是一个对象 那么这个key值 就是输出文件的名字。但是output要使用[name]来获得这个key值
        main:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),//注意不需要加./
        filename:"[name].abc.js"//这里使用[name]就获取了main这个名字
    },
    module:{
        rules:[

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html" //指定模板
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port:8082,//配置开发服务器打开端口
        open:true,//配置是否自动打开
        quiet:true//静默打包输出日志更少
    }
}