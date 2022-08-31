'use strict';

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
      btn = document.querySelector('button'),
      addInput = document.querySelector('.adding__input'),
      favoriteFilm = document.querySelector('[type="checkbox"]');


btn.addEventListener('click', (e)=> {
    e.preventDefault();
    if (addInput.value != '') {
        let newFilm = addInput.value;
        if (newFilm.length > 21) {
            newFilm = `${newFilm.slice(0, 20).toUpperCase()}...`;
        } 
        if (favoriteFilm) {
            console.log("Добавляем любимый фильм");
        }
        movieDB.movies.push(newFilm.toUpperCase());
        sort(movieDB.movies);
        showListFilms();
    }     
});

function deleteAdb() {
    adv.forEach(item => {
        item.remove();
    });
}
deleteAdb();

function makeChange () {
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
}
makeChange();

function sort(list) {
    list.sort();
}

function showListFilms () {
    movieList.innerHTML = "";
    sort(movieDB.movies);
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((item, i) => { 
        item.addEventListener('click', () =>{
            delete movieDB.movies[i];
            console.log(movieDB.movies);
            showListFilms();
        });
    });
}
showListFilms();