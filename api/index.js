import express from "express"
import mongoose from "mongoose"
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
// import registerRoutes from "./routes/register.route.js"
const app = express()
dotenv.config();
app.use(express.json());
app.use(cookieParser());
import path from 'path';

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Mongo Db Connected")
}).catch((err) => {
    console.log(err)
})

const __dirname = path.resolve();

app.listen(3000, () => {
    console.log("Server running on 3000")
    
})

app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '/clients/dist')));
// app.use('/api/register', registerRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'clients', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });});