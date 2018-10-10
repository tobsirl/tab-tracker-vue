const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  res.send({
    message: `Your ${req.body.email}! user was registered! Have Fun`,
  });
});

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server started on port ${port}`));
