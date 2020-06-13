const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..','public')
app.use(express.static(publicPath));//static takes the path of public folder

app.get('*',(req,res)=>{
   res.sendFile(path.join(publicPath,'index.html'));;
})

app.listen(3000,()=>{
    console.log('Server is up');
});
