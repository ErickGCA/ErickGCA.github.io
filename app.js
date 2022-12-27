

var d = new Date();
var dt = d.getDate();
var h = d.getHours();
var m = d.getMinutes();

function aZero(n) {
  return n.toString().length == 1 ?  n = '0' + n : n;
}

(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();
var day = d.getDayName();
var month = d.getMonthName();

var x = aZero(h)+":"+aZero(m);
var y = day+", "+month+" "+dt;
var o = "AT&T";

document.getElementById("clock-text").innerHTML = x;
document.getElementById("date-text").innerHTML = y;
document.getElementById("temp-notch").innerHTML = o;

var message = document.getElementById('message-overlay');
var mw = document.getElementById('merrywrap');
var audio = new Howl({
  src: ['https://s0.vocaroo.com/media/download_temp/Vocaroo_s0E0FP15QAsj.mp3'],
  volume: 0
});
var mcSong = new Howl({
  src: ['https://ia802604.us.archive.org/12/items/WeWishYouAMerryChristmas_123/WeWishYouAMerryChristmas_64kb.mp3'],
  volume: 0,
  loop: true,
});

// <!-- GIFT BOX SOURCE CODE: https://tympanus.net/codrops/2013/12/24/merry-christmas-with-a-bursting-gift-box/ -->

function giftAnimation(){
  var merrywrap=document.getElementById("merrywrap");
  var box=merrywrap.getElementsByClassName("giftbox")[0];
  var step=1;
  var stepMinutes=[2000,2000,1000,1000];
  function init(){
          box.addEventListener("click",openBox,false);
  }
  function stepClass(step){
    merrywrap.className='merrywrap';
    merrywrap.className='merrywrap step-'+step;
  }
  function openBox(){
    if(step===1){
      box.removeEventListener("click",openBox,false); 
    }  
    stepClass(step); 
    if(step===3){ 
    } 
    if(step===4){ 
       return;
    }     
    setTimeout(openBox,stepMinutes[step-1]);
    step++;  
  }
   
  init();
 
}

// =====================

$(document).ready(function(){
  setTimeout(function() {
    audio.play();
    message.className += ' animated zoomIn';
    message.style.visibility = "visible";
  }, 2000);
  
  $("#message-overlay").click(function() {
    $("#lock-icon").remove();
    $("#clock-text-overlay").remove();
    $("#date-overlay").remove();
    $("#message-overlay").remove();
    $("#touch-overlay").remove();
    mcSong.play();
    $(".content").css('background-image', 'url(https://i.ibb.co/8KtBVY6/Whats-App-Image-2022-12-27-at-02-09-55.png)');
    document.getElementById("temp-notch").innerHTML = x;
    mw.style.visibility = "visible";
    giftAnimation();
  });
})

