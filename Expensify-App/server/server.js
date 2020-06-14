const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..','public');
//for heroku 3000 will not work always
//heroku sets a env variable we can use it
const port =process.env.PORT || 3000;
app.use(express.static(publicPath));//static takes the path of public folder

//to serve up index.html for every req 
app.get('*',(req,res)=>{
   res.sendFile(path.join(publicPath,'index.html'));;
})
//for heroku 3000 will not work
app.listen(port,()=>{
    console.log('Server is up');
});
