// =============================== //
// Bouncing Images                 //
// v1.1 - Feb 5, 2005              //
// ------------------------------- //
// Written by Lloyd Hassell        //
// Website: lloydhassell.com       //
// Email: lloydhassell@hotmail.com //
// =============================== //

// Featured on: Dynamic Drive HTML code library (http://www.dynamicdrive.com)

// INITIALIZATION:


bouncingImages = new Object();


bouncingImages.imgCount = 32;

bouncingImages.imgWidth = 600;
bouncingImages.imgHeight = 600;
bouncingImages.imgSrc = 'images/scs_0.png';
bouncingImages.imgSrc1 = 'images/btn_1.png';
bouncingImages.imgSrcInc = 'http://dogs.fedariki.ru/images/animated_soccer_ball.gif';
bouncingImages.frameRate = 20;
bouncingImages.maxtime = 5000;
bouncingImages.minRandomSpeed = 1;
bouncingImages.maxRandomSpeed = 3;

// MAIN:
bouncingImages.time = 0;
bouncingImages.isLoaded = false;
bouncingImages.dirX = new Array();
bouncingImages.dirY = new Array();
bouncingImages.posX = new Array();
bouncingImages.posY = new Array();
bouncingImages.speedX = new Array();
bouncingImages.speedY = new Array();
var winWidth, winHeight;
var preloadImgObj,preloadImgObj1,preloadImgObjInc;

//if (dyn) preloadImgObj = loadImg(bouncingImages.imgSrc);
//if (dyn) preloadImgObj1 = loadImg(bouncingImages.imgSrc1);
//if (dyn) preloadImgObjInc = loadImg(bouncingImages.imgSrcInc);

function randomBoolean(){
    return Math.random() < 0.5;
}

function IncBouncingImages() {
//	if(is_mobile())
         return;

  if (preloadImgObjInc == null)  preloadImgObjInc = loadImg(bouncingImages.imgSrcInc);

//                bouncingImages.maxtime += 1000;
//	            bouncingImages.time = 0;
	            bouncingImages.imgCount += 1;
	            localStorage.setItem("imgCount", bouncingImages.imgCount);
                winWidth = getWinWidth();
                winHeight = getWinHeight();

	            var layerLoop = bouncingImages.imgCount - 1;
	            bouncingImages.dirX[layerLoop] = (Math.round(Math.random()) == 0) ? 'left' : 'right';
	            bouncingImages.dirY[layerLoop] = (Math.round(Math.random()) == 0) ? 'up' : 'down';
	            bouncingImages.posX[layerLoop] = Math.floor(Math.random() * (winWidth - bouncingImages.imgWidth - 1)) + getDocScrollLeft();
	            bouncingImages.posY[layerLoop] = Math.floor(Math.random() * (winHeight - bouncingImages.imgHeight - 1)) + getDocScrollTop();
	            bouncingImages.speedX[layerLoop] = Math.round(Math.random() * (bouncingImages.maxRandomSpeed - bouncingImages.minRandomSpeed)) + bouncingImages.minRandomSpeed;
	            bouncingImages.speedY[layerLoop] = Math.round(Math.random() * (bouncingImages.maxRandomSpeed - bouncingImages.minRandomSpeed)) + bouncingImages.minRandomSpeed;
	            var tempLayerObj = addLayer('bouncingImagesLyr' + layerLoop);
	            bouncingImages['layerObj' + layerLoop] = tempLayerObj;
	            setLayerSize(tempLayerObj,bouncingImages.imgWidth,bouncingImages.imgHeight);
	            setLayerClip(tempLayerObj,0,bouncingImages.imgWidth,bouncingImages.imgHeight,0);
	            setLayerHTML(tempLayerObj,getImgTag('bouncingImagesImg' + layerLoop,preloadImgObjInc.src,bouncingImages.imgWidth,bouncingImages.imgHeight,0));
	            moveLayerTo(tempLayerObj,bouncingImages.posX[layerLoop],bouncingImages.posY[layerLoop]);
	            showLayer(tempLayerObj);
	             bouncingImages.isLoaded = true;
	            moveBouncingImages();
   }

function loadBouncingImages() {
//	if(is_mobile() || (bouncingImages.imgCount == 0))
 //        return;

    if (preloadImgObj == null)  preloadImgObj = loadImg(bouncingImages.imgSrc);

   if (dyn && !bouncingImages.isLoaded) {
      winWidth = getWinWidth();
      winHeight = getWinHeight();
      for (var layerLoop = 0; layerLoop < bouncingImages.imgCount; layerLoop++) {
         bouncingImages.dirX[layerLoop] = (Math.round(Math.random()) == 0) ? 'left' : 'right';
         bouncingImages.dirY[layerLoop] = (Math.round(Math.random()) == 0) ? 'up' : 'down';
         bouncingImages.posX[layerLoop] = Math.floor(Math.random() * (winWidth - bouncingImages.imgWidth - 1)) + getDocScrollLeft();
         bouncingImages.posY[layerLoop] = Math.floor(Math.random() * (winHeight - bouncingImages.imgHeight - 1)) + getDocScrollTop();
         bouncingImages.speedX[layerLoop] = Math.round(Math.random() * (bouncingImages.maxRandomSpeed - bouncingImages.minRandomSpeed)) + bouncingImages.minRandomSpeed;
         bouncingImages.speedY[layerLoop] = Math.round(Math.random() * (bouncingImages.maxRandomSpeed - bouncingImages.minRandomSpeed)) + bouncingImages.minRandomSpeed;
         var tempLayerObj = addLayer('bouncingImagesLyr' + layerLoop);
         bouncingImages['layerObj' + layerLoop] = tempLayerObj;
         setLayerSize(tempLayerObj,bouncingImages.imgWidth,bouncingImages.imgHeight);
         setLayerClip(tempLayerObj,0,bouncingImages.imgWidth,bouncingImages.imgHeight,0);
         setLayerHTML(tempLayerObj,getImgTag('bouncingImagesImg' + layerLoop,preloadImgObj.src,bouncingImages.imgWidth,bouncingImages.imgHeight,0));
         moveLayerTo(tempLayerObj,bouncingImages.posX[layerLoop],bouncingImages.posY[layerLoop]);
         showLayer(tempLayerObj);
         }
      bouncingImages.isLoaded = true;
      moveBouncingImages();
      }
   }

function loadBouncingImagesRandom() {
//	if(is_mobile() || (bouncingImages.imgCount == 0))
 //        return;

    if (preloadImgObj == null)  preloadImgObj = loadImg(bouncingImages.imgSrc);
    if (preloadImgObj1 == null)  preloadImgObj1 = loadImg(bouncingImages.imgSrc1);

   if (dyn && !bouncingImages.isLoaded) {
      winWidth = getWinWidth();
      winHeight = getWinHeight();
      for (var layerLoop = 0; layerLoop < bouncingImages.imgCount; layerLoop++) {
         bouncingImages.dirX[layerLoop] = (Math.round(Math.random()) == 0) ? 'left' : 'right';
         bouncingImages.dirY[layerLoop] = (Math.round(Math.random()) == 0) ? 'up' : 'down';
         bouncingImages.posX[layerLoop] = Math.floor(Math.random() * (winWidth - bouncingImages.imgWidth - 1)) + getDocScrollLeft();
         bouncingImages.posY[layerLoop] = Math.floor(Math.random() * (winHeight - bouncingImages.imgHeight - 1)) + getDocScrollTop();
         bouncingImages.speedX[layerLoop] = Math.round(Math.random() * (bouncingImages.maxRandomSpeed - bouncingImages.minRandomSpeed)) + bouncingImages.minRandomSpeed;
         bouncingImages.speedY[layerLoop] = Math.round(Math.random() * (bouncingImages.maxRandomSpeed - bouncingImages.minRandomSpeed)) + bouncingImages.minRandomSpeed;
         var tempLayerObj = addLayer('bouncingImagesLyr' + layerLoop);
         bouncingImages['layerObj' + layerLoop] = tempLayerObj;
         setLayerSize(tempLayerObj,bouncingImages.imgWidth,bouncingImages.imgHeight);
         setLayerClip(tempLayerObj,0,bouncingImages.imgWidth,bouncingImages.imgHeight,0);

         setLayerHTML(tempLayerObj,getImgTag('bouncingImagesImg' + layerLoop, randomBoolean() ? preloadImgObj.src : preloadImgObj1.src, bouncingImages.imgWidth,bouncingImages.imgHeight,0));

         moveLayerTo(tempLayerObj,bouncingImages.posX[layerLoop],bouncingImages.posY[layerLoop]);
         showLayer(tempLayerObj);
         }
      bouncingImages.isLoaded = true;
      moveBouncingImages();
      }
   }

function moveBouncingImages() {
//	if(is_mobile())
 //        return;

   for (var layerLoop = 0; layerLoop < bouncingImages.imgCount; layerLoop++) {
         if (bouncingImages.dirX[layerLoop] == 'left') {
            if (bouncingImages.posX[layerLoop] +bouncingImages.imgWidth> bouncingImages.speedX[layerLoop]) bouncingImages.posX[layerLoop] -= bouncingImages.speedX[layerLoop];
            else {
               bouncingImages.dirX[layerLoop] = 'right';
               bouncingImages.posX[layerLoop] = -bouncingImages.imgWidth;
               }
            }
         else if (bouncingImages.dirX[layerLoop] == 'right') {
            if (bouncingImages.posX[layerLoop] + bouncingImages.imgWidth  -bouncingImages.imgWidth< winWidth - bouncingImages.speedX[layerLoop]) bouncingImages.posX[layerLoop] += bouncingImages.speedX[layerLoop];
            else {
               bouncingImages.dirX[layerLoop] = 'left';
               bouncingImages.posX[layerLoop] = winWidth - bouncingImages.imgWidth + bouncingImages.imgWidth;
               }
            }
         if (bouncingImages.dirY[layerLoop] == 'up') {
            if (bouncingImages.posY[layerLoop] +bouncingImages.imgHeight> bouncingImages.speedY[layerLoop]) bouncingImages.posY[layerLoop] -= bouncingImages.speedY[layerLoop];
            else {
               bouncingImages.dirY[layerLoop] = 'down';
               bouncingImages.posY[layerLoop] = -bouncingImages.imgHeight;
               }
            }
         else if (bouncingImages.dirY[layerLoop] == 'down') {
            if (bouncingImages.posY[layerLoop] + bouncingImages.imgHeight  -bouncingImages.imgHeight< winHeight - bouncingImages.speedY[layerLoop]) bouncingImages.posY[layerLoop] += bouncingImages.speedY[layerLoop];
            else {
               bouncingImages.dirY[layerLoop] = 'up';
               bouncingImages.posY[layerLoop] = winHeight - bouncingImages.imgHeight + bouncingImages.imgHeight;
               }
            }
      }
   for (var layerLoop = 0; layerLoop < bouncingImages.imgCount; layerLoop++) moveLayerTo(bouncingImages['layerObj' + layerLoop],bouncingImages.posX[layerLoop] + getDocScrollLeft(),bouncingImages.posY[layerLoop] + getDocScrollTop());
 //  bouncingImages.time += bouncingImages.frameRate;
 //  if (bouncingImages.time<bouncingImages.maxtime)
       {window.setTimeout('moveBouncingImages()',bouncingImages.frameRate);}
//   else
//       {
//	            IncBouncingImages();
//       }
   }

   function InitFedariki() {
//   	if(is_mobile())
//            return;
bouncingImages.imgCount = 64;
bouncingImages.imgWidth = 280;
bouncingImages.imgHeight = 280;
bouncingImages.imgSrc = 'http://dogs.fedariki.ru/images/mini-pretzel-dogs.png';
bouncingImages.frameRate = 20;
bouncingImages.minRandomSpeed = 1;
bouncingImages.maxRandomSpeed = 4;


   }