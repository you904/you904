const express = require("express")
const cors = require("cors")
const Item = require("./models/item.model")
const mongoose = require("mongoose")
const app = express()

const port = 5000
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
// app.get('/home', (req, res) => {
//     res.send('home page');
//   });

  const corsOptions = {
    origin: ['https://frontend-lemon-seven.vercel.app', 'http://localhost:3000'],
  };
  
  app.use(cors(corsOptions));
  
  // Your existing routes and middleware
  const MONGODB_URI = 'mongodb+srv://syedmutahir908:Mongoauth123@cluster0.da7uyp9.mongodb.net/';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error('Could not connect to MongoDB..', err));

  app.get('/api/endpoint', async(req, res) => {
    const items = await Item.find()
    res.json(items);
  });
  app.post('/api/sendData',async(req, res) => {
    const receivedData = req.body;
    console.log('Received data = client:', receivedData);
    const item = new Item(receivedData)
    await item.save()
    res.json({ message: 'Data received successfully!' });
  });
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
    
})