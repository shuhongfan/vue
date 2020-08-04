var path=require('path')
// 在内存生成页面 并注入bundle.js
var htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry: path.join(__dirname,'./src/main.js'),//入口文件
    output: {//指定输出选项
        path: path.join(__dirname,'./dist'),//输出路径
        filename: "bundle.js"//输出文件的名称
    },
    plugins: [//插件配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'//生成内存页面名称
        })
    ],
    module: {
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use: ['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use: ['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=4000&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader', exclude: /node_modules/},
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    resolve: {
        alias: {//修改加载包的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}