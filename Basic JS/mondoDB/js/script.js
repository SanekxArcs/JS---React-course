/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок 24:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// 1) Первую часть задания повторить по уроку 27

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < numberOfFilms; i++) {
            const movieName = prompt('Один из последних просмотренных фильмов?', ''),
                  movieRanking = prompt('На сколько оцените его?', '');
        
                if(movieName != null && movieRanking != null && movieName != '' && movieRanking != ''&& movieName.length < 50){
                    this.movies[movieName] = movieRanking;
                  } else{
                        i--;
                  }; 
        }
    },
    detectPersonalLevel: function () {
        if (this.count <10){
                console.log("Просмотрено довольно мало фильмов");
              } else if(this.count >=10 && this <30) {
                console.log("Вы классический зритель");
              } else if(this.count >=30) {
                console.log("Вы киноман");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres: function (){
        for(let i = 1; i <= 3; i++) {
             let genres = prompt(`Ваш любимый жанр под номером ${i}`);

             if(genres === "" || genres == null){
                console.log("Неправильний ввод");
                i--
             } else {
                this.genres[i-1] = genres.split(', ');
                this.genres.sort();
             }
            
        }
        this.genres.forEach(item, i) => {
            console.log(`Любимий жанр ${i+1} - це ${item}`)
        }
    },
    
    toddleVisibleMyDB: function(){
        if(this.privat){
        this.privat = false;
    } else {
        this.privat = true;
    }
}