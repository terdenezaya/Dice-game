
var activePlayer, scores, roundScore;
var diceDom = document.querySelector(".dice");
// Тоглоомыг эхлүүлэх функц
function initGame(){
    // Тоглогчийн ээлж хадгалах хувьсагч, 1r toglogch 0, 2r toglogch 1 gej temdeglie.
activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
scores = [0, 0]

// Идэвхтэй тоглогчийн ээлжийн оноог хадгалах хувьсагч
roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагчь 1-6 гэсэн утгаас санамсаргүйгээр үүсгэж өгнө.
// Програм эхлэхэд бэлтгэе
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';

document.getElementById('name-0').textContent = "Player 1";
document.getElementById('name-1').textContent = "Player 2";

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

diceDom.style.display = "none";
}

initGame();
// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener('click', function() {
    diceNumber = Math.floor(Math.random()  * 6) + 1;
    
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
                switchToNextPlayer();
    }
});
// Hold товчны эвент листнер
document.querySelector('.btn-hold').addEventListener('click',function(){
    // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноон дээр нэмж өгнө.
scores[activePlayer] = scores[activePlayer] + roundScore;

       //  Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

     // Уг тоглогч хожсон эсэхийг  шалгах Оноо 100 хүрвэл хожино
if(scores[activePlayer] >= 20){
    // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "winner!!!";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    
} else {
        // Тоглогчийн ээлжийг солино.
        switchToNextPlayer();

}
  
     // Ээлжийн оноог 0 болгоно.
     roundScore = 0;
     document.getElementById('current-' + activePlayer).textContent = 0;
    
})
// Энэ функц нь тоглох ээлжийг дараагийн тоглогч руу шилжүүлнэ.
function switchToNextPlayer(){
     // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
     roundScore = 0;
     document.getElementById("current-" + activePlayer).textContent = 0;

     // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
     activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
     
     // Улаан цэгийг шилжүүлэх
     document.querySelector('.player-0-panel').classList.toggle("active");
     document.querySelector('.player-1-panel').classList.toggle("active");

     // Шоог түр алга болго
     diceDom.style.display = 'none';
}
// Шинэ тоглоом эхлүүлэх товчний листнер
document.querySelector(".btn-new").addEventListener('click', initGame);
