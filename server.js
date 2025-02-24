const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require("dotenv").config();
const userRoutes = require("./routes/userRoute")

const app = express()
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);

let items = [{
        id: 1,
        name: "Item 1"
    },
    {
        id: 2,
        name: "Item 2"
    },
    {
        id: 3,
        name: "Item 3"
    },
    {
        id: 4,
        name: "Item 4"
    },
    {
        id: 5,
        name: "Item 5"
    }

];

app.get('/item', (req, res) => {
    res.json(items);
});

app.get('/item/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    res.json(item);
});

app.post('/item', (req, res) => {
    const newItems = { id: items.length + 1, name: req.body.name };
    items.push(newItems);
    res.status(201).json(items);
});

app.put('/item/:id', (req, res) => {

    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: "Item not found!" });

    item.name = req.body.name;
    res.json(item);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});