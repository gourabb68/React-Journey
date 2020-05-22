const path = require('path'); //node module helps to join path
module.exports ={
    "entry": "./src/app.js",//put the source file..main file ..where should webpack start from
    "output":{
        "path": path.join(__dirname,'public'),  //absolute path from root user complete path 
        "filename":  'bundle.js'//name of the file 
    },
    "module":{
        "rules":[{
            "loader": 'babel-loader',
            "test": /\.js$/,
            "exclude": /node_modules/ 
        },{
            "test": /\.scss$/, //specifying which file is looking for
            "use":[ //use allow array of loader
                "style-loader",
                "css-loader",
                "sass-loader"

            ]
        }]
    },
    "devtool": "cheap-module-eval-source-map",
    "devServer":{
        "contentBase":  path.join(__dirname,'public'),  //absolute path from root user complete
    }

}