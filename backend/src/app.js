const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'OutMart API' });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
