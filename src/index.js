import express from 'express';
import { connectDb } from './config/db.js';
import { router } from './routes/router.js';

const app = express();

connectDb();
app.use(express.json());

const port = 3000;

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})