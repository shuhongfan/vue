const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const htmlPlugin=new htmlWebpackPlugin({
    template:'./src/index.html', //要用到的模板文件
    filename:'index.html' //指定生成的文件名称
})
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
    // 编译模式
    // development 开发模式
    // production 发布模式
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins: [
        htmlPlugin,
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader','postcss-loader']},
            {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: 'url-loader?limit=104268'
            },
            {test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue-loader'}
        ]
    }
}
