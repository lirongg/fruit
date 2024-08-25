const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const chatRoutes = require('./routes/chatRoutes');
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require('./middlewares/errorMiddleware')
// const mongoose = require ('mongoose')

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());




// Route middleware
// app.use('/api/auth', authRoutes)
// app.use('/api/products', productRoutes)
// app.use('/api/chats', chatRoutes)
// app.use('/api/users', userRoutes)

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})



// mongoose.connect(process.env.DATABASE_URL);

// const db = mongoose.connection;

// db.on("connected", function () {
//   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// });
