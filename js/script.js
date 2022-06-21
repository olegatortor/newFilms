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
    const adv = document.querySelectorAll(".promo__adv img"),
          promoGenre = document.querySelector(".promo__genre"),
          promoImg = document.querySelector('.promo__bg'),
          list = document.querySelector(".promo__interactive-list"),
          form = document.querySelector("form.add"),
          addInput = document.querySelector(".adding__input"),
          checkbox = document.querySelector('[type="checkbox"]');
    
    function deleteAdv() {
        adv.forEach(element => {
            element.style.display = "none";
        });
    }
    
    promoGenre.textContent = "ДРАМА";
    promoImg.style.background = "url(../img/bg.jpg) center center/cover no-repeat";
    
    const sortArr = (arr) => {
        arr.sort();
    };


    function addNewFilmInList(film, parent) {
        parent.innerHTML = "";
        sortArr(film);
        film.forEach((item, i) => {
            parent.innerHTML += (`
            <li class='promo__interactive-item'>${i+1} ${item}
                <div class='delete'></div>
            </li>`);
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                addNewFilmInList(film, parent);
            });
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            if (favorite) {
                console.log("the best");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            addNewFilmInList(movieDB.movies, list);
        }

        event.target.reset();
    });

    addNewFilmInList(movieDB.movies, list);
    deleteAdv();
});


// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту 