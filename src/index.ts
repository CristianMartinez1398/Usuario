import express from 'express';

const app = express();

const PORT = 4500;

app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en https//:localhost:${PORT}`);
});