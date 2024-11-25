import express from 'express';
import cors from 'cors'
import { connectDb } from './config/db.js';
import { router } from './routes/router.js';

const app = express();

connectDb();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PATCH,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

const port = 3000;

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})