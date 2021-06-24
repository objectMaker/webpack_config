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
        filename:"[name].abc.js",//这里使用[name]就获取了main这个名字
        environment: { //webpack打包的文件默认带上了箭头函数和const关键字 ，如果我们要兼容ie11，则需要把这两个值设为false
            arrowFunction: false,
            const: false
        }
    },
    module:{
        rules:[
            {
                // exclude: ,如果配置了include久可以不需要配置exclude选项了
                include: path.resolve(__dirname,'src'),//只处理src下面的js文件
                test:/\.js$/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets:[
                                ["@babel/preset-env",
                                    {targets:{ //兼容到哪个版本
                                    "chrome":58,
                                    "ie":11
                                },
                                "corejs":3, //corejs版本
                                "useBuiltIns":"usage" //按需引入
                            }]],//这个预设包里面包含了多个处理js语法的预设插件包，
                            //这个配置有s 而且是一个数组 可能有多个预设包
                            // 如果还需要其它
                            //插件就可以在下面自己配置一个plugins里面配置
                            plugins: [

                            ]
                        }
                    }
                ]
            },
            {
                include: path.resolve(__dirname,'src'),
                test:/\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",//直接用file-loader不能进行base64处理
                        //url-loader内部使用了file-loader但是 file-loader需要自己下载。
                        options: {
                            limit:1024*20,//转base64的大小。  这里是小于20kb就采用base64处理
                            name:"static/img/[name].[hash:6].[ext]"
                        }
                    }
                ]
            },
            {
                include: path.resolve(__dirname,'src'),
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    ["postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]

                                ]
                            }
                        }
                    }
                ]
            }
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