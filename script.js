var rd = 0;
var timer = 60;
var score = 0;


function bubbleMaking(){
    var clatter = "";
    for(var i = 1; i < 190; i++){
        var rndm=  Math.floor(Math.random()*10);
      clatter += ` <div class="elem2">${rndm}</div>`;
    }
    document.querySelector("#bottomPart").innerHTML = clatter;
}
bubbleMaking();


 function getHit () {
   rd =Math.floor(Math.random()*10) ;

    document.querySelector(".elem1").textContent = rd;
} 
getHit ();



function getTimer(){
   var timeInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#tt").textContent = timer; 
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#bottomPart").innerHTML =`<h1>Game Over</h1>`
        }
       
    },1000) 
    
}
getTimer();



function getScore(){
  score += 10
document.querySelector("#scr").textContent = score; 
}

document.querySelector("#bottomPart").addEventListener("click",function(dets){
    var clicked = Number(dets.target.textContent);
if(clicked ===rd){
    getScore();
    bubbleMaking();
    getHit ()

}
 })





