require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.static('frontend'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});