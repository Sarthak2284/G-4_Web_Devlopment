const express = require('express');
require('dotenv').config(); 
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4888
const userRoutes = require('./routes/userRoutes')
const app = express();

app.use(express.json());


async function connectToDatabase() {
    await mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
})
}

app.use("/api/user",userRoutes)
app.get('/', (req,res)=>{
    res.send('This is Dashboard');
})



connectToDatabase().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})