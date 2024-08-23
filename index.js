import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import bookRoutes from './routes/bookRoutes.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//connectDB
connectDB();

//rotuting
app.get('/', (req, res) => {
    res.send("backedn is working");
})

app.use('/books',bookRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
})