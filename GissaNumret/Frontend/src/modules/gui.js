function displayHighscores(highscoresArray){
    const container = document.querySelector('#highscoreContainer');
    container.innerHTML = '';

    for(const highscores of highscoresArray){

        const players = document.createElement('p');
        const playersScore = document.createElement('p');

        playersScore = `${players.name}, ${players.scores}`;
     
        players.append(playersScore);
        container.append(players);
    }
}

export {displayHighscores};