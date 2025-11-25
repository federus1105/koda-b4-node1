const express = require('express');
const router = require('./src/routes/index');
const Initdocs = require('./src/libs/docs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static('src/uploads'));

Initdocs(app);

app.use('/', router);

app.get('/', (req, res)=>{
  res.json({
    message: 'Backend is running well',
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});