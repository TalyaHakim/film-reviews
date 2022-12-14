const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({msg: 'Welcome to film reviews'}));

// Routes
app.use("/api/users", require('./routes/users'));
app.use("/api/auth", require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on prot ${PORT}`));