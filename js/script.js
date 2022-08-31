'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          addInput = document.querySelector('.adding__input'),
          favoriteFilm = document.querySelector('[type="checkbox"]');
    
    
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        let newFilm = addInput.value;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 20).toUpperCase()}...`;
            } 
            if (favoriteFilm) {
                console.log("Добавляем любимый фильм");
            }
    
            movieDB.movies.push(newFilm.toUpperCase());
            showListFilms(movieDB.movies, movieList);
        }

        e.target.reset();
    });
    

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function showListFilms (films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    
        document.querySelectorAll('.delete').forEach((item, i) => { 
            item.addEventListener('click', () =>{
                item.parentElement.remove();
                films.splice(i, 1);
                showListFilms(movieDB.movies, movieList);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    showListFilms(movieDB.movies, movieList);
});