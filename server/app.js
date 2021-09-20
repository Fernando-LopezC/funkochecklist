require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', require('./routes'));
app.get('/api', (req, res) => res.json({message: 'Welcome to My Funko Checklist'}));

app.listen(process.env.PORT, () => {
    console.log(`Express on port ${process.env.PORT}`)
})