import express from "express"

const app = express()

const port = 5000
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
app.get('/home', (req, res) => {
    res.send('home page');
  });
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
    
})