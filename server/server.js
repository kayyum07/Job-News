const express = require('express');
const dbConnect=require('./dbConnect');
const newsRoute = require('./Routes/NewsRoute');
const userRoute = require('./Routes/UserRoute');
const app=  express();
app.use(express.json());
const port=process.env.PORT || 5000;

const path = require('path')
if(process.env.NODE_ENV==='production'){
    app.use('/',express.static('../client/build'))

//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'../client/build/index.html'))
//     })
}

app.use('/api/newsitems/', newsRoute)
app.use('/api/users/', userRoute)

app.get('/', (req,res) => res.send("Hello world"));
app.listen(port,()=> console.log('example listening on port 3000 !'));
