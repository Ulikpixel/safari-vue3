import express from 'express';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json({ extended: true }));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));