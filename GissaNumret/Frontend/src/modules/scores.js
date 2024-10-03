const baseURL = 'http://localhost:1234/highscore';

async function getAllHighscores(){
    const res = await fetch(baseURL);
    const highscores = await res.json();

    return highscores;
}

async function addPlayers(newPlayers){
    const options = {
        method: 'POST',
        body: JSON.stringify(newPlayers),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(baseURL, options);
    const data = await res.json();
    console.log(data);
}

export {getAllHighscores, addPlayers};