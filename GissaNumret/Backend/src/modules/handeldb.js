import fs from "fs/promises";
//Importera från filesystems. 

async function getAllHighscores(){
    const rawdata =  await fs.readFile('./src/highscores.json');
    return JSON.parse(rawdata);
}

async function addPlayers(newPlayers){
    const players = await getAllHighscores();
    players.push(newPlayers);

    await fs.writeFile('./src/highscores.json', JSON.stringify(players, null, 2));
}

export {getAllHighscores, addPlayers};