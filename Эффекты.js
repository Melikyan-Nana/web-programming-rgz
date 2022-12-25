const effect1 = document.getElementById('effect1');
const effect2 = document.getElementById('effect2');
const effect3 = document.getElementById('effect3');
const effect4 = document.getElementById('effect4');
const effect5 = document.getElementById('effect5');
const effect6 = document.getElementById('effect6');
const effect7 = document.getElementById('effect7');
const effect8 = document.getElementById('effect8');
const effect9 = document.getElementById('effect9');
const effect10 = document.getElementById('effect10');

effect1.addEventListener('click', () => {
    let start = Date.now();
    effect1.style.position = 'absolute';
    setInterval(() => {
        let int = Date.now() - start;
        effect1.style.right = `${int/5}px`;
        if (int >= 10000) {
            effect1.style.position = 'initial'
            return;
          }
    }, 20)  
})

effect2.addEventListener('mouseenter', (e) => {
    let opacity = 20;
    setInterval(function ik() {
        if(opacity > 50){
            e.target.style.width = `${opacity}px`
            opacity = Math.ceil(Math.random()*100);
        } else {
            e.target.style.width = `${opacity}px`
            opacity = Math.ceil(Math.random()*100);
        }
    },1000);
})

let counter = 0;
effect3.addEventListener('click', (e) => {
    counter++;
    if(counter === 10){
        alert('Ура вы поймали 10 котят!')
        counter = 0;
    }
})

effect4.addEventListener('click', () => {
    let start = Date.now();
    setInterval(() => {
        let int = Date.now() - start;
        effect4.style.rotate = `${int/5}deg`;
        if (int >= 10000) {
            effect4.style.rotate = '0deg'
            return;
          }
    }, 20)
})

effect5.addEventListener('mouseenter', (e) => {
    e.target.style.transform = 'scale(-1,1)' 
})
effect5.addEventListener('mouseout', (e) => {
    e.target.style.transform = 'scale(1,1)' 
})

const btnAlert = document.getElementById('btn');
btnAlert.addEventListener('click', () => {
    alert('Желаю вам отличного настроения и хорошего дня!')
})
const btnClick = document.getElementById('btnClick');

var typeText = document.querySelector(".typeText")
var textToBeTyped = "мультипарадигменный язык программирования"
var index = 0, isAdding = true
function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
        if (index > textToBeTyped.length) {
            isAdding = false
            setTimeout(function () {
            playAnim()
            }, 2000)
            return
        } 
        else {
            index++
        }
    } 
    else {
      if (index === 0) {
        isAdding = true
      } 
      else {
        index--
      }
    }
    playAnim()
  }, 120)
}
playAnim()

function randColor(elem) {   
    var element = document.getElementById(elem),
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    element.style.backgroundColor = color;
}                                
effect8.addEventListener('click',() => {
    randColor(effect8.id);
})

btnClick.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    const points = ['Привет!','Я кнопка','Спасибо, что заметил меня!','Ну... мне пора','Спасибо!Пока!']
    let currentIndex = points.indexOf(e.target.innerText);
    console.log(currentIndex)
    e.target.innerText = points[currentIndex+1] ?? points[0];
})
const promtClick = document.getElementById('btnPromt');

effect10.addEventListener('click', () => {
    let start = Date.now();
    setInterval(() => {
        let int = Date.now() - start;
        effect10.style.rotate = `${int/5}deg`;
        if (int >= 10000) {
            effect10.style.rotate = '0deg'
            return;
          }
    }, 20)
})


