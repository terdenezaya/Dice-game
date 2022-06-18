// Тоглогчийн ээлж хадгалах хувьсагч, 1r toglogch 0, 2r toglogch 1 gej temdeglie.
var activePlayer = 0;
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
    
        // Шооны зургийг веб дээр гаргаж ирнэ
    diceDom.style.display = "block";

    // Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дэр гаргаж ирнэ.
    diceDom.src = 'dice-' + diceNumber + '.png';

    // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн тоог өөрчилнө.
    if (diceNumber !== 1){
        //1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber ;
        document.getElementById("current-" + activePlayer).textContent = roundScore ;
    } else {
        // 1 буусанх тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        // Хэрэв идэвхтйэ тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго. Үгүй бол идэвхтэй тоглогчийг 0 болго.
        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        // Шоог түр алга болго
        diceDom.style.display = 'none';
 
      
    }
});
