import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URL;

Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);


