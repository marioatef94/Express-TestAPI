const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./Routes/user-route');
const postRouter = require('./Routes/post-route')
const _links = require("./Helper/helper")

dotenv.config({path:'config.env'});
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.json({message:"Simple API - Test",_links:_links._links}); 
})
    
app.use('/users/v1',userRouter);
app.use('/posts/v1',postRouter);

app.listen(port,()=>{console.log(`Server Running on http://localhost:${port}`);})
