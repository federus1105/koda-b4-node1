const express = require('express');
const router = require('./src/routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/', router);

app.get('/', (req, res)=>{
  res.json({
    message: 'Backend is running well',
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});