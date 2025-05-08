import { Details } from "./details.js"
export class Ui {
    constructor() {
   
    }

    displayGames(arr) {
        const gameData = document.getElementById('gameData')
        let holder = ''
        for(let i =0 ; i<arr.length ; i++) {
          holder += `
          <div class="col">
               <div data-id="${arr[i].id}" class="card h-100 bg-transparent" role="button" "="">
                  <div class="card-body">
                     <figure class="position-relative">
                        <img class="card-img-top object-fit-cover h-100" src="${arr[i].thumbnail}">
                     </figure>
                     <figcaption>
                        <div class="hstack justify-content-between">
                           <h3 class="h6 small">${arr[i].title}</h3>
                           <span class="badge text-bg-warning p-2">Free</span>
                        </div>
         
                        <p class="card-text small text-center text-white opacity-50">
                        ${arr[i].short_description.split(" " , 10).join(" ")}
                        </p>
         
                     </figcaption>
                  </div>
         
                  <footer class="card-footer small hstack justify-content-between">
         
                     <span class="badge badge-color">${arr[i].genre}</span>
                     <span class="badge badge-color">${arr[i].platform}</span>
         
                  </footer>
               </div>
            </div>
          `
        }
        gameData.innerHTML = holder
            let detail;
            const details = document.querySelector('.details')
            const mainContent = document.querySelector('#mainContent')
         let cards = document.querySelectorAll('.card')
         cards.forEach(card => {
            card.addEventListener('click' , function(e){
               // let id = e.currentTarget.getAttribute('data-id')
               const id = card.dataset.id;
                  
               detail = new Details(id)
               mainContent.classList.add('d-none')
               details.classList.remove('d-none')
            })
         })
      
      
      }

      displayGameDetails(data) {
        const detailsContent = document.getElementById('detailsContent')
        const details = document.querySelector('.details')
        const mainContent = document.querySelector('#mainContent')
        const btnClose = document.getElementById('btnClose')
        let holder = '';
      
        // Check if screenshots exist and are valid
        if (data.screenshots && data.screenshots.length > 0) {
          holder += `
            <div class="col-md-8 mx-auto">
            <h3 class="text-center title mb-4">${data.title}</h3>
              <div id="gameCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner rounded">
                  <div class="carousel-item active">
                    <img src="${data.thumbnail}" class="d-block w-100" alt="Main Image">
                  </div>
                  ${data.screenshots.map((screenshot, index) => `
                    <div class="carousel-item">
                      <img src="${screenshot.image}" class="d-block w-100" alt="Alt Image ${index + 1}">
                    </div>
                  `).join('')}
                </div>
              </div>
      
              <!-- Thumbnails -->
              <div class="d-flex justify-content-between flex-wrap mt-3 gap-2">
                <img src="${data.thumbnail}" width="24%" class="img-thumbnail p-1 cursor-pointer" data-bs-target="#gameCarousel" data-bs-slide-to="0">
                ${data.screenshots.map((screenshot, index) => `
                  <img src="${screenshot.image}" width="24%" class="img-thumbnail p-1 cursor-pointer" data-bs-target="#gameCarousel" data-bs-slide-to="${index + 1}">
                `).join('')}
              </div>
            </div>
          `;
        } else {
          // No screenshots, only display main image
          holder += `
            <div class="col-md-8 mx-auto">
            <h3 class="text-center title mb-4">${data.title}</h3>
              <img src="${data.thumbnail}" class="w-100 rounded mb-3" alt="Main Game Image">
            </div>
          `;
        }
      
        // Game Info
        holder += `
          <div class="col-md-12 text-white text-center mb-5">
            <div class="hstack justify-content-around mt-4">
            <p>Category: <span class="badge text-bg-warning">${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-warning">${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-warning">${data.status}</span></p>
              </div>
            <p class="small text-start">${data.description}</p>
            <a class="btn text-dark btn-warning" target="_blank" href="${data.game_url}">Show Game</a>
          </div>
        `;
      
        detailsContent.innerHTML = holder;
      
        btnClose.addEventListener('click', function () {
          details.classList.add('d-none');
          mainContent.classList.remove('d-none');
        });
      }
}