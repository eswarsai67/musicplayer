//BTS -- song

let bt_img = document.getElementById('btimage');
var first_scroll = document.getElementById('btsscroll');
var button1 = document.getElementById('fbutton');
button1.addEventListener('click',()=>{
  if(first_scroll.style.display=="none"){
    first_scroll.style.display = "block";
    second_scroll.style.display = "none";
    gscroll.style.display = "none";
  }
  else{
    first_scroll.style.display = "none";
  }
});
var first = document.getElementById('fsong');
var progressbar = document.getElementById('bar1');
var Dynamite = new Audio('1.mp3');
first.addEventListener('click',()=>{
  if(Dynamite.paused || Dynamite.currentTime<=0){
     first.classList.remove('fa-play');
     first.classList.add('fa-pause');
     ot_image.src = "https://i.scdn.co/image/ab67616d0000b2732606a868e74789e3d3b806ce";
     guna_image.src = "https://sarajevo.travel/assets/photos/events/original/bonjasky-amp-ezekiel-1556106325.jpg";
      var x = Math.floor(Math.random()*21);
      btimage.src = x + ".gif";
     song2.pause();
     song3.pause();
     Dynamite.play();
  }
  else{
    first.classList.remove('fa-pause');
    first.classList.add('fa-play');
    btimage.src = "https://pyxis.nymag.com/v1/imgs/c10/524/1853b57c011cf5fd8ebc8f4b149345d5d3-BTS-JOIN-LOUIS-VUITTON-AS-HOUSE-AMBASSAD.rsquare.w1200.jpg";
    Dynamite.pause();
  }
})
Dynamite.addEventListener('timeupdate',()=>{
  var progress = ((Dynamite.currentTime/Dynamite.duration)*100);
  progressbar.value = progress;
})
progressbar.addEventListener('change',()=>{
  Dynamite.currentTime = (progressbar.value * Dynamite.duration)/100;

})
// otilia song

let ot_image = document.getElementById('otimage');
var second = document.getElementById('ssong');
var song2 = new Audio('ot.mp3');
var progress2 = document.getElementById('bar2');
second.addEventListener('click',()=>{
  if(song2.paused || song2.currentTime<=0){
    second.classList.remove('fa-play');
    second.classList.add('fa-pause');
    btimage.src = "https://pyxis.nymag.com/v1/imgs/c10/524/1853b57c011cf5fd8ebc8f4b149345d5d3-BTS-JOIN-LOUIS-VUITTON-AS-HOUSE-AMBASSAD.rsquare.w1200.jpg";
    guna_image.src = "https://sarajevo.travel/assets/photos/events/original/bonjasky-amp-ezekiel-1556106325.jpg";
      var y = Math.floor(Math.random() * 21);
      ot_image.src = y + ".gif";
    Dynamite.pause();
    song3.pause();
    song2.play();
  }
  else{
    second.classList.remove('fa-pause');
    second.classList.add('fa-play');
      ot_image.src = "https://i.scdn.co/image/ab67616d0000b2732606a868e74789e3d3b806ce";
    song2.pause();
  }
});
song2.addEventListener('timeupdate',()=>{
  var updated = ((song2.currentTime/song2.duration)*100);
  progress2.value = updated;
})
progress2.addEventListener('change',()=>{
  song2.currentTime = (progress2.value * song2.duration)/100;
});
var second_scroll = document.getElementById('otscroll');
var button2 = document.getElementById('sbutton');
button2.addEventListener('click',()=>{
  if(second_scroll.style.display=="none"){
    second_scroll.style.display = "block";
      gscroll.style.display = "none";
      first_scroll.style.display = "none";
  }
  else{
    second_scroll.style.display = "none";
  }
})
// gunamamidi
var third = document.getElementById('tsong');
var guna_image = document.getElementById('gunaimage');
var song3 = new Audio("guna.mp3");
var pro3 = document.getElementById('bar3');
var gscroll = document.getElementById('gunascroll');
var tbutton = document.getElementById('tbutton');
third.addEventListener('click',()=>{
  if(song3.paused || song3.currentTime<=0){
    third.classList.remove('fa-play');
    third.classList.add('fa-pause');
    var z = Math.floor(Math.random() * 21);
    guna_image.src = z + ".gif";
    ot_image.src = "https://i.scdn.co/image/ab67616d0000b2732606a868e74789e3d3b806ce";
    btimage.src = "https://pyxis.nymag.com/v1/imgs/c10/524/1853b57c011cf5fd8ebc8f4b149345d5d3-BTS-JOIN-LOUIS-VUITTON-AS-HOUSE-AMBASSAD.rsquare.w1200.jpg";
    Dynamite.pause();
    song2.pause();
    song3.play();
  }
  else{
    third.classList.remove('fa-pause');
    third.classList.add('fa-play');
    guna_image.src = "https://sarajevo.travel/assets/photos/events/original/bonjasky-amp-ezekiel-1556106325.jpg";
    song3.pause();
  }
});
song3.addEventListener('timeupdate',()=>{
  progress3 = ((song3.currentTime/song3.duration) * 100);
  pro3.value = progress3;
})
pro3.addEventListener('change',()=>{
  song3.currentTime = ((pro3.value * song3.duration)/100);
});
tbutton.addEventListener('click',()=>{
  if(gscroll.style.display=="none"){
    gscroll.style.display = "block";
    second_scroll.style.display = "none";
    first_scroll.style.display = "none";
  }
  else{
    gscroll.style.display = "none";
  }
})
