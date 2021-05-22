var menu = ["ProfilE", "ServicE", "PortfoliO", "ContacT"]

const swiper = new Swiper('.swiper-container', {
  initialSlide: 0,
  touchPatio: 0,
  autoplay: {
    delay: 5000,
    disableOnInteration: false
  },
  autoplayDisableOnInteration: false,
  effect: 'fade',
  speed: 1000,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    }
  }
  // on: {
  //   slideChangeTransitionStart: function () {
  //     $(".swiper-slide.swiper-slide-active h2").css("left", "100px");
  //     $(".swiper-slide.swiper-slide-active svg").css("left", "0px");
  //   }
  // }
});


$(function () {
	$('.contact').click(function () {
		$('#modalArea').fadeIn();
	});
	$('#closeModal , #modalBg').click(function () {
		$('#modalArea').fadeOut();
	});
});


// var counter = 1;
// setInterval(function () {
//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if (counter > 4) {
//     counter = 1;
//   }
// }, 5000);




// let MAX = 8;
// let RADIUS = 200;
// let FPS = 60;
// let CENTER = {x:200, y:240};
// let canvas, ctx, timer, point;
// let stats;
// let mouseFlag = true;

// const Point = function(c, r, rota)
// {
//   this.x, this.y;
//   this.centerX = c.x;
//   this.centerY = c.y;
//   this.radian = rota * (Math.PI / 180);
//   this.radius = r;
  
//   this.speed = Math.random() * 10 + 5;
//   this.r = Math.random() * 2 + 1;
//   this.rota = 0;
  
  
//   this.update = function(){
//     let plus = Math.cos(this.rota * (Math.PI / 180)) * this.r;
    
//     this.radius += plus
    
//     let cos = Math.cos(this.radian) * this.radius;
//     let sin = Math.sin(this.radian) * this.radius;

//     this.x = cos + this.centerX;
//     this.y = sin + this.centerY;

//     this.rota += this.speed;
    
//     if(this.rota > 360){ this.rota -= 360; };
//   }  
// }

// function initialize(){
//   let rota = 360 / MAX;
//   let i;
//   for(i = 0; i < MAX; i++)
//   {
//     point[i] = new Point(CENTER, RADIUS, rota * i);
//   }
// }


// function update(){
//   for(let i = 0; i < MAX; i++)
//   {
//     point[i].update();
//      }
  
//   draw();
// }


// function draw(){  
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ctx.beginPath();
  
//   const xc1 = (point[0].x + point[MAX - 1].x) / 2;
//   const yc1 = (point[0].y + point[MAX - 1].y) / 2;
  
//   ctx.moveTo(xc1, yc1);


  
//   for(var i = 0; i < MAX - 1; i++){

//     const xc = (point[i].x + point[i + 1].x) / 2;
//     const yc = (point[i].y + point[i + 1].y) / 2;
  
//     ctx.quadraticCurveTo(point[i].x, point[i].y, xc, yc)
//   }
  
//   ctx.quadraticCurveTo(point[i].x, point[i].y, xc1, yc1);
  

//   const mouseFlag = ctx.fill()


  
//   for(i = 0; i < MAX; i++){
//     ctx.fillStyle = "rgb(250, 222, 158)";
//     ctx.closePath();
//     ctx.fill();
//   }
// }

// window.onload = function(e){
//   canvas = document.getElementById("canvas");
//   ctx = canvas.getContext("2d");
//   point = [];
  
//   initialize();
  
//   timer = setInterval(update, 8000 / FPS);
// }

// const anim = lottie.loadAnimation({
//     wrapper: document.getElementById('text-svg'),
//     animType: 'svg',
//     loop: true,
//     prerender: true,
//     autoplay: true,
//     path: 'data.json'

// });
// var anim = bodymovin.loadAnimation(animData);

// const anim = lottie.loadAnimation({
//   container: document.getElementById('text-svg'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'data.json'
// });

// const anim = lottie.loadAnimation({
// 	container: document.getElementById('bodymovin'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: true,
// 	path: '../data.json'
// });
