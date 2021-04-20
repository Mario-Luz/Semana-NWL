import express from "express";

const app = express();

/**
 * GET = Buscas
 * POST = CRIÇÃO
 * PUT = ALTERAÇÃO
 * PATCH = ALTERAR UMA INFORMAÇÃO 
 */

app.get("/", (req, res) => {
    return res.send("ola mundo")
});

app.post("/", (req, res) => {
    return res.json({ message: "Usuario salvo!" });
});
app.listen(3333, () => console.log("server is running on port 3333"));