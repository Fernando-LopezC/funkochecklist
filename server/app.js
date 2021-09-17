const express = require('express');
const app = express();

app.use('/api', require('./routes'));
// app.get('/', (req, res) => res.json({message: 'Welcome to My Funko Checklist'}));

app.listen(3001, () => {
    console.log(`Welcome to My Funko Pop Checklist`)
})