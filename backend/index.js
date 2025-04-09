// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const productRoutes = require('./routes/productRoutes');
// require('dotenv').config(); // Load environment variables from .env

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.get('/',(req,res)=>{
//     res.send("Welcome to Listing Product Backend")
// })

// mongoose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err.message);
//   });

// app.use('/api', productRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ New line
require('dotenv').config(); // Load environment variables from .env

const app = express();

app.use(express.json());
app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to Listing Product Backend");
});

// MongoDB connection
// mongoose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err.message);
//   });
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsAllowInvalidCertificates: true, // ⚠️ Only for development
})
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
  });


// Routes
app.use('/api', productRoutes);       // existing product routes
app.use('/api/auth', authRoutes);     // ✅ auth routes added here

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
