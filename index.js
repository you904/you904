import express from "express"
import cors from "cors"
const app = express()

const port = 5000
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
  app.get('/api/endpoint', (req, res) => {
    res.json({ message: 'kia hal hian ' });
  });
  app.post('/api/sendData', (req, res) => {
    const receivedData = req.body.data;
    console.log("Received data from client:", receivedData);
  
    res.json({ message: "Data received successfully!" });
  });
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
    
})