const express =require('express');
const app=express();
const mongoose =require('mongoose');
const helmet =require('helmet');
const morgan=require('morgan');
const dotenv=require('dotenv')
const userRoute=require('./routes/users')
const authRouter=require('./routes/auth')

const postRoute = require("./routes/posts");



dotenv.config();

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true,useUnifiedTopology:true},()=>{
    console.log("Connected to mongoDB")
});
      
//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"))


app.use("/api/users", userRoute);
app.use("/api/auth", authRouter);

app.use("/api/posts", postRoute);


app.listen(8080,()=>{
    console.log('backend server is running')
})