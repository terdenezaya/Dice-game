// Тоглогчийн ээлж хадгалах хувьсагч, 1r toglogch 0, 2r toglogch 1 gej temdeglie.
var activePlayer = 1;
// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0]
// Идэвхтэй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагчь 1-6 гэсэн утгаас санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random()  * 6) + 1;
// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice ;
// document.querySelector("#score-1").innerHTML = "<em>Yes</em>";

// Togloom ehlehed beldie
document.querySelector("#score-0").textContent = 0 ;
document.querySelector("#score-1").textContent = 0 ;
document.querySelector(".dice").style.display = "none";
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
function rollDice(){
    document.querySelector("#ion-ios-loop").style.display
}

console.log('Шоо : ' + dice);