const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


app.use('http://localhost:3000/login', (req, res) => {    

  console.log("FrontEnd wala BAckend",req.body);

  res.send({
    token: 'FrontEnd wala BAckend Token'
  }); 
});


app.listen(3000, () => console.log('API is running on http://localhost:3000/login'));