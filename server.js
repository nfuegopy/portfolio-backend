const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/projects', (req, res) => {
    res.json([
        { id: 1, name: 'Project 1', description: 'Description of project 1' },
        { id: 2, name: 'Project 2', description: 'Description of project 2' },
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
