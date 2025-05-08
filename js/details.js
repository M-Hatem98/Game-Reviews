import {Ui} from './ui.js'
export class Details {
    constructor(id) {
        this.getGameDetails(id)
    }

   async getGameDetails(id) {
        const options = {
           method: 'GET',
           headers: {
              'x-rapidapi-key': '54484efab4msh34b9c6436ad276ap1132bajsn55152272e2f9',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
           }
        }
        document.getElementById('pageLoader').classList.remove('hidden');
        let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
        if(response.ok) {
           let data = await response.json()
           let ui = new Ui()
           ui.displayGameDetails(data)
              document.getElementById('pageLoader').classList.add('hidden');
        }
     
     }

}