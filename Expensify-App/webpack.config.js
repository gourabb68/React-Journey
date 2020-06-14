const path = require('path'); //node module helps to join path
//importing for creating diff css file
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports =(env)=>{
    const isProduction = env === 'production';
    //creating instance and passing name of the file where it is going to dump css file
    const CSSExtract = new  ExtractTextPlugin('styles.css');
    return {
    "entry": "./src/app.js",//put the source file..main file ..where should webpack start from
    // "entry": "./src/playground/hoc.js",
    "output":{
        "path": path.join(__dirname,'public','dist'),  //absolute path from root user complete path 
        "filename":  'bundle.js'//name of the file 
    },
    "module":{
        "rules":[{
            "loader": 'babel-loader',
            "test": /\.js$/,
            "exclude": /node_modules/ 
        },{
            "test": /\.s?css$/, //specifying which file is looking for
            "use": CSSExtract.extract({
                "use": [                    
                    {
                        "loader": 'css-loader',
                        "options": {
                          "sourceMap": true
                        }
                      },
                      {
                        "loader": 'sass-loader',
                        "options": {
                          "sourceMap": true
                        }
                      }
                ] 
            })
        }]
    },
    "plugins": [
        CSSExtract
    ],
    "devtool": isProduction? "source-map": "inline-source-map",
    "devServer":{
        "contentBase":  path.join(__dirname,'public'),  //absolute path from root user complete
        "historyApiFallback": true,
        "publicPath": '/dist/'
    }
    }
}