// Тоглогчийн ээлж хадгалах хувьсагч, 1r toglogch 0, 2r toglogch 1 gej temdeglie.
var activePlayer = 1;
// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0]
// Идэвхтэй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагчь 1-6 гэсэн утгаас санамсаргүйгээр үүсгэж өгнө.

// document.querySelector("#score-1").innerHTML = "<em>Yes</em>";

// Програм эхлэхэд бэлтгэе
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener('click', function() {
    var diceNumber = Math.floor(Math.random()  * 6) + 1;
    // alert('shoo ' + diceNumber + ' buulaa');
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';
    
});



// console.log('Шоо : ' + diceNumber);