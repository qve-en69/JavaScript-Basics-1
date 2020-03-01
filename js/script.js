"use strict";
/*  //убери звездочку, чтобы все включилось

//lesson 4 Классификация типов данных в JavaScript
//null - чего то в коде просто не существует
//underfined - обьект есть , но без значения 
let ivan = {
   name: "John",
   age: 25,
   isMarried: false
};
console.log(ivan.name); // 1 тип обращения к объекту
console.log(ivan["ivan"]); // 2 тип обращения к объекту
let arr = ['gg','gege','ggwp'];
console.log(arr[2])

// lesson 8 Условия
let num = 50;
if (num < 50) {
  console.log('Мало')
} else if (num > 100) {
  console.log('Много')
} else {
  console.log('Верно!')
}
(num == 50) ? console.log('Верно!') : console.log('Неверно'); // тернарный оператор
switch (num) {
  case num < 49: 
  console.log('Неверно')
    break;
    case num > 100:
    console.log('Много');
    break;
    case num > 80:
      console.log('Все же много');
      break;
      case num = 50:
      console.log('Верно');
      break;
      default:
        console.log('стандартное значениие');
        break;   
}

//lesson 10 Функции
let ggrt = 20; //глобальная ggrt
//function showFirstMessage(text) { // text это параметр функции
  alert(text);
  let ggrt = 40; // локальная ggrt внутри этой функции 
  console.log(ggrt); // фукнция сначала ищет значение переменной внутри функции, а если ее нет берет снаружи (глабальную),
  //если не было бы значения 40 задано, то она бы взяла знач 20 , и вывела 20 20
}
showFirstMessage("hello!");
console.log(ggrt);
///
console.log(calc(3,4));
console.log(calc(8,4));

function calc(a,b) { //фукнция работает даже до того, как она у нас объявлена в коде
  return (a + b);
}
///
function retVar() {
  let num = 50;
  return num;
}

let anotherNum = retVar();//достаем локальное значение let в глобальное через func
console.log(anotherNum);

let calc = (a,b) => a+b // стрелочная func из стандарта ES6

console.log(calc(3,4));

console.log(calc(8,4));
///
let str = "text";
console.log(str.length);// длина строки test отсчет с 1
console.log(str.toUpperCase());// TEST
///
let twelve = "12.2px";
console.log(Math.round(twelve)); // округление числа, но без px и тд
console.log(parseInt(twelve)) // перевод в двоичную систему, округления и откидывание всего что стоит после числа px ..
console.log(parseFloat(twelve)) // с дробной частью но без px

//lesson 12 Объекты
let options = { //объект
    width: 1024, //ключ : значение, 
    height: 1024,
    name: "test"
};
console.log(options.name);
options.bool = false; // добавление еще одной пары для объекта, как четвертый ключ
options.colors = {
    border: "black",
    gb: "red"
};
delete options.bool // удаление свойства bool 
console.log(options);

for (let key in options) { 
    console.log('Свойство ' + key + ' имеет занчение ' + options[key]); // цикл
}
console.log(Object.keys(options).length); //работает с обьектом, с его ключами , Считаем кол-во его свойств

//lesson 14 Объектно Ориентированное Программирование ООП
let soldier = {
  health: 100,
  armor: 100
};
let john = {
  health: 100
}
john.__proto__ = soldier;
console.log(john);
console.log(john.armor); // значение брони не находит у объекта, а потом изет его у его прототипа, и берет от туда знач

//lesson 16 Получение элементов со страницы
let box = document.getElementById('card-item'),//elemetnT, мы получим 1 элемент
    link = document.getElementsByClassName('card-item'),//elemetntS, мы получим несколько элементов, массив
    heart = document.querySelectorAll('.contact-box .box-item');//правильное обращение к box-item через вложенность
    // с contact-box

console.log(box);
console.log(link[0]);// 1 элемент массива по названию класса card-item
console.log(heart[1]);

//lesson 18 События и их обработчики
// onclick="alert('Вы нажали на эту кнопку')" так можно записать прямо в HTML внутри div или элемента
let Home = document.getElementsByTagName('a');

Home[1].onclick = function() {
  alert('Ты нажал на 2 ссылку')
};
Home[1].onclick = function() {
  alert('Ты нажал второй раз на 2 ссылку')
};

let Home = document.getElementsByTagName('a');

Home[1].addEventListener('click', function() {

  alert('Ты нажал на 2 ссылку');
  alert('Ты нажал второй раз на 2 ссылку');
});

let Home = document.getElementsByTagName('a');

Home[1].addEventListener('click', function() {

  alert('Ты нажал на 2 ссылку');

});
Home[1].addEventListener('click', function() { // более новая func не перезаписывает старую, сработают обе func


  alert('Ты нажал второй раз на 2 ссылку');
});
Home[1].addEventListener('mouseenter', function(){
  alert('Вы навели на ссылку')
})

let Home = document.getElementsByTagName('a');

Home[1].addEventListener('click', function(event){// выбрать тот элемент с которым хотим взаимодействовать 
  console.log(event);
  let target = event.target;
  target.style.display = 'none'
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
    // если сделать событие и на элемент и на обертку, то сработает сначала событие элемента , а потом обертки
    //вверх по иерархии 
});

let link = document.querySelector('a'); // обращаемся к 'a'

link.addEventListener('click', function(event){  // создаем func события click
  event.preventDefault();// запрет перехода на новую вкладку по ссылке
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target); // описываем в консоли 
})

let link = document.querySelectorAll('a'); // обращаемся к 'a'

link.forEach(function(item){ // метод foReach для всех
   item.addEventListener('mouseleave', function() { // выполнение func, когла мышь покидает элемент 
      console.log('Вы убрали мышь с ссылок');
  });
})

//lesson 22 Конструкторы и классы
//func конструктор в ES5
 function User(name, id) { // конструктор для создания новых пользователей
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){ // метод вывода в консоль 
      console.log('Hello! ' + this.name);// конструкция this обращается к свойству, которое есть в объекте
    }
 }
 User.prototype.exit = function(name) { //prototype добавляет новые методы в конструктор и они наследуются у потомков
    console.log('Пользователь ' + this.name + ' ушел');
 }

 let ivan = new User('Ivan', 25), //ivan - объект
     alex = new User('Alex', 20); //alex - объект

console.log(ivan);
console.log(alex);

ivan.exit; 

//func конструктор в ES6
class User { //создание класс
  constructor(name, id) {
       this.name = name;
       this.id = id;
       this.human = true;
  }
  hello() { //методы класса
    console.log(`Hello! ${this.name}`)
  }
  exit() { //методы класса
    console.log(`Пользователь ${this.name} ушел`)
  }
}
  let ivan = new User('Ivan', 23); // создание переменных с обьектами
  let alex = new User('Alex', 20);
  console.log(ivan);
  console.log(alex);
  ivan.hello();
  alert.hello();
  
  //lesson 24 Стандарт ES6. Интерполяция
   let name = "Ivan",
      age = 30,
      mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`); // прием интерполяции, все переменные в $

//lesson 26 ES6 Стрелочные функции
let fun = () => { // в (аргументы)
  //действие
}
fun();

let obj =  { // создание объекта
    number: 5, //свойство а
    sayNumber: function() { //sayNumber - это метод для объекта
      let say = () => { //внутри метода, есть стрелочная func, у стрелочной func нет своего контекста вывода, она берет
        //его у родителя
        console.log(this); // действие
      };
      say(); //что бы она заработала вызываем func say 
    }
};
obj.sayNumber();

//lesson 28 Классы
class Rectangle {
    constructor(height, width){ //свойство constr, 2 переменные высоты и ширины 
      this.height = height,//в каждый экземпляр будем записывать свойства высоты и ширины 
      this.width = width;
    }
    calcArea(){//вычислить  площадь
      return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);// аргументы высоты и ширины
 console.log(square.calcArea());

 //lesson 30
 let options = {
   width: 1366,
   height: 768,
   background: 'red',
   font: {
     size: '16px',
     color: '#fff'
   }
 };
 console.log(JSON.stringify(options));//JSON - ключ значение, все JSON объекты в "ковычках" , все в одну строчку 
 console.log(JSON.parse(JSON.stringify(options)));// превратили JSON объект в обычный объект, когда например пришел ответ
 //от сервера, что бы потом из этого объекта можно была вытаскивать разные значения свойств , json формат лучший для
 // общения клиента с сервером, до него был XML

  //lesson 32 ES6 Promise
  //промисы это обещание
  let drink = 0;
function shoot(arrow, headshot, fail) { // func выстрела , имеет 3 аргумента
  console.log('Вы сделали выстрел..');

  setTimeout(function() { //время полета 2 секунды, и передаем внутрь func
    Math.random() > .5 ? headshot({}) : fail("Вы промахнулись"); // если больше 50% то вызываем func попадания ,либо fail  

  }, 2000)
};
function win() {
  console.log('Вы победили!');
  (drink == 1) ? buyBeer() : giveMoney();
}
function buyBeer() {
  console.log('Вам купили пиво');
}
function giveMoney() {
  console.log('Вам заплатили');
}
function loose (){
  console.log('Вы проиграли');
}
shoot({},
  function(mark){
    console.log('Вы попали в цель!');
    win(mark, buyBeer, giveMoney);
  }, 
  function(miss){
    console.error(miss)
    loose();
  }
)
//теперь тоже самое только через промисы
let drink = 0;
function shoot(arrow) { // выполняется func shoot
  console.log('Вы сделали выстрел..');
  let promise = new Promise(function(resolve, reject){// создается новое обещание с двумя аргументами/состояниями
    setTimeout(function() { //время полета 2 секунды, и передаем внутрь func
      Math.random() > .5 ? resolve({}) : reject("Вы промахнулись"); // если больше 50% то вызываем func попадания ,либо fail  
    }, 2000)
  });
  return promise; 
};
function win() {
  console.log('Вы победили!');
  (drink == 1) ? buyBeer() : giveMoney();
}
function buyBeer() {
  console.log('Вам купили пиво');
}
function giveMoney() {
  console.log('Вам заплатили');
}
function loose (){
  console.log('Вы проиграли');
}
shoot({})
      .then(amrk => console.log('Вы попали в цель!'))
      .then(win)
      .catch(loose)

//lesson 34 Ошибки. Как избежать поломки своего кода
let json = '{"id":2}'
try {
  let user = JSON.parse(json);
  console.log(user);

  if(!user.name){
    throw new Error("В этих данных нет имени!")// создание своих собственных ошибок
  }
} catch(error) {// ошибка имеет 3 основных свойства 
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);

  console.log(`Мы получили имя ошибку: ${error.name}`)
}
finally {
  console.log('А я выполнюсь всегда!')//выполнится всегда
}
console.log('А я буду работать дальше')
//lesson 36 Инкапсуляция. Геттеры и сеттеры
function User (name, age) {// func конструктор с 2 параметрами 

  this.name = name;
  let userAge = age;

    this.getAge = function(){
      return userAge;
    };
    this.setAge = function(age) {//set для установки каких то значениях 
      if (typeof age === 'number' && age > 0 && age < 110){// проверка 
        userAge = age; //присваиваем значение к age
      } else {
        console.log('Недопустимое значение');// не прошло проверку 
      }
    };
  this.say = function() {//действие 
    console.log(`Имя пользователя ${this.name}, возвраст: ${this.userAge}`);
  };
}
let user = new User('Ivan', 25);
console.log(user.name);
console.log(user.userAge);
user.say();
//пользователь может сам поменять значения программы
//user.age = 30;
//user.name = 'Alex';
//user.say();
console.log(user.getAge());// принимает значение getAge
user.setAge(30);
console.log(user.getAge()); 
 */
//Complete