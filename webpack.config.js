var path = require('path');
// var Html = require('html-webpack-plugin');

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'js')
    },
    mode: 'development', // moze byc tez production
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/, // sprawdzamy wszyskie pliki *.js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env',{
                            targets:{
                                browsers:[
                                    '> 1%',
                                    'last 2 versions'
                                ]
                            }
                        }]
                        ]}
                }
            },
            {
                test: /\.css$/, // sprawdzamy wszyskie pliki *.css
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/, // sprawdzamy wszyskie pliki *.scss
                use: ['style-loader', 'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins: () => [ //dodajemy plugin z autoprefixer
                            new require('autoprefixer')({
                                browsers:[
                                    'ie 11'
                                ]
                            })
                        ]
                    }
            },
            'sass-loader'
        ]
    },
{
    test: /\.(jpg|jpeg|gif|png|csv)$/, // sprawdzamy wszyskie obrazki
        use: {
    loader: "file-loader",
        options: {
        name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images'
    }
}
},
{
    test: /\.(eot|ttf|woff|woff2)$/, // sprawdzamy wszyskie fonty
        use: {
    loader: "file-loader",
        options: {
        name: '[name].[ext]',
            publicPath: 'fonts',
            outputPath: 'fonts'
    }
}
}
]
}
// ,
// plugins: [
//   new Html({
//     filename: 'index_out.html',
//     template: './app.html'
//   })
// ]
}