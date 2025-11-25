const express = require('express');
const authRoutes = require('./src/routes/auth.router');
const productRoutes = require('./src/routes/products.router');
const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/product', productRoutes);

app.get('/', (req, res)=>{
  res.json({
    message: 'Backend is running well',
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});