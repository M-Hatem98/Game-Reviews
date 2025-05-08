import {Ui} from './ui.js'

export class Game {
    constructor(category = "mmorpg") {
        this.games(category)
    }

    async games(category){
 
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '54484efab4msh34b9c6436ad276ap1132bajsn55152272e2f9',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
        document.getElementById('pageLoader').classList.remove('hidden');
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` , options)
        
        if(response.ok) {
          const data = await response.json()
          let ui = new Ui()
            ui.displayGames(data)
            document.getElementById('pageLoader').classList.add('hidden');
          return data;
        }
      
      }
      
}

