const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const { chats } = require("./data/data");

// Use CORS middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.get('/', (req, res) => {
    res.send("API is running");
});

app.get("/api/chat", (req, res) => {
    res.json(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find(c => c._id === req.params.id);
    if (singleChat) {
        res.json(singleChat);
    } else {
        res.status(404).send({ message: "Chat not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
