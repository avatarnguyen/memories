import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

//TODO: Change before Deployment!!!
// mongodb+srv://anhfirstmernproject:<password>@cluster0.1palz.mongodb.net/<dbname>?retryWrites=true&w=majority
const CONNECTION_URL = 'mongodb+srv://anhfirstmernproject:2vMJuQl4178Cblbw@cluster0.1palz.mongodb.net/memories?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
