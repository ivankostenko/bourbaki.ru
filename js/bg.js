   var col_text="#000000";

   var speed=50;
   var min_rgb=0;


   var r=255;
   var g=255;
   var b=255;

   var flag=0;

   var t=[];
   var o=[];
   var d=[];

function hex(p,q) {
    t[p]=Math.floor(q/16);
    o[p]=q%16;
switch (t[p]) {
    case 10:t[p]='a';
    break;
    case 11:t[p]='b';
    break;
    case 12:t[p]='c';
    break;
    case 13:t[p]='d';
    break;
    case 14:t[p]='e';
    break;
    case 15:t[p]='f';
    break;
    default:break;
 }
switch (o[p]) {
    case 10:o[p]='a';
    break;
    case 11:o[p]='b';
    break;
    case 12:o[p]='c';
    break;
    case 13:o[p]='d';
    break;
    case 14:o[p]='e';
    break;
    case 15:o[p]='f';
    break;
    default:break;
  }
 }

function ran(p,q) {
if((Math.random()>2/3||q==min_rgb)&&q<255) {
    q++;
    d[p]=2;
 }
else {
if((Math.random()<=1/2||q==255)&&q>min_rgb) {
    q--;
    d[p]=1;
 }
else d[p]=0;
 }
    return q;
 }

function do_it(p,q) {
if((d[p]==2&&q<255)||q==min_rgb){
    q++;
    d[p]=2;
 }
else {
if((d[p]==1&&q>min_rgb)||q==255) {
    q--;
    d[p]=1;
  }
 }
if(p==3) {
if(d[1]==0&&d[2]==0&&d[3]==0)
    flag=1;
 }
    return q;
 }

function bgcol() {
if(flag==0) {
    r=ran(1,r);
    g=ran(2,g);
    b=ran(3,b);
    hex(1,r);
    hex(2,g);
    hex(3,b);
    document.body.style.backgroundColor="#"+t[1]+o[1]+t[2]+o[2]+t[3]+o[3];
    flag=50;
 }
else {
    r=do_it(1,r);
    g=do_it(2,g);
    b=do_it(3,b);
    hex(1,r);
    hex(2,g);
    hex(3,b);
   document.body.style.backgroundColor="#"+t[1]+o[1]+t[2]+o[2]+t[3]+o[3];
    flag--;
 }
var rr=255-r;
var gg=255-g;
var bb=255-b;

col_text="rgba("+gg+","+bb+","+rr+")";
//$('a').css('color', col_text);

//col_text="rgba("+bb+","+rr+","+gg+")";
//$('a').css('text-shadow', "1px 1px 1px "+col_text);

setTimeout(function(){bgcol()},speed)
}

function InitBG(){

if(window.addEventListener){
   window.addEventListener('load',bgcol,false);
 }
else {
if(window.attachEvent){
   window.attachEvent('onload',bgcol);
  }
 }
}