import express from 'express';
import router from './routes';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;