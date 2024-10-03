import express from "express";
import cors from "cors";
import * as db from "./handledb.js";

const PORT = 1234;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/highscore', async (req, res)=>{
    const highscore = await db.getAllHighscores();
    res.json(highscore);
})

app.post('/highscore', async (req, res) => {
    const addPlayers = await db.addPlayers(req.body);

    res.json({message: `Your score are saved successfully!`});

})

app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
});