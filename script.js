// =============================
// LOADING
// =============================

window.onload = function () {

setTimeout(() => {

document.getElementById("loading").style.opacity = "0";

setTimeout(() => {

document.getElementById("loading").style.display = "none";

},1000);

},2500);

}

// =============================
// ELEMENT
// =============================

const music=document.getElementById("music");

const btnMulai=document.getElementById("btnMulai");

const btnSurat=document.getElementById("btnSurat");

const btnFoto=document.getElementById("btnFoto");

const btnAkhir=document.getElementById("btnAkhir");

// =============================
// saya tau kau kepo apa isinya, tekanmi
// =============================

btnMulai.onclick=function(){

document.getElementById("welcome").style.display="none";

document.getElementById("giftPage").style.display="flex";

music.play();

buatHati();

confetti({

particleCount:200,

spread:180,

origin:{y:.6}

});

}

// =============================
// SURAT
// =============================

btnSurat.onclick=function(){

document.getElementById("giftPage").style.display="none";

document.getElementById("letterPage").style.display="flex";

ketikSurat();

}

// =============================
// GALERI
// =============================

btnFoto.onclick=function(){

document.getElementById("letterPage").style.display="none";

document.getElementById("gallery").style.display="block";

}

// =============================
// HALAMAN AKHIR
// =============================

btnAkhir.onclick=function(){

document.getElementById("gallery").style.display="none";

document.getElementById("ending").style.display="flex";

firework();

}

// =============================
// EFEK MENGETIK
// =============================

const isiSurat=

`Happy Birthday! ❤️

I wish you nothing but happiness, good health, and success.
Thank you for always supporting me and for being someone I can always count on.
I hope all your hard work pays off and all your dreams come true.

Happy Birthday ❤️`;

function ketikSurat(){

let i=0;

let text=document.getElementById("typing");

text.innerHTML="";

let typing=setInterval(()=>{

text.innerHTML+=isiSurat.charAt(i);

i++;

if(i>=isiSurat.length){

clearInterval(typing);

}

},45);

}

// =============================
// HUJAN HATI
// =============================

function buatHati(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*4+3)+"s";

heart.style.fontSize=(Math.random()*20+15)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},250);

}

// =============================
// FIREWORK
// =============================

function firework(){

setInterval(()=>{

confetti({

particleCount:180,

spread:360,

startVelocity:50,

origin:{

x:Math.random(),

y:Math.random()

}

});

},900);

}

// =============================
// AUTO SLIDE FOTO
// =============================

let slider=document.querySelector(".slider");

let posisi=0;

setInterval(()=>{

if(document.getElementById("gallery").style.display=="block"){

posisi+=320;

if(posisi>=slider.scrollWidth-slider.clientWidth){

posisi=0;

}

slider.scrollTo({

left:posisi,

behavior:"smooth"

});

}

},3000);

// =============================
// PESAN AKHIR
// =============================

setTimeout(()=>{

console.log("Happy Birthday ❤️");

},1000);