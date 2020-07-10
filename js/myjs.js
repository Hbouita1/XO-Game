var counterc=0;//defined turn of which player
var i=0,j=0,k=0;
var turnp1=true,turnp2=false;
var stoptime;
var countovertime1=0,countovertime2=0,countfull=0;
var timeover1=false,timeover2=false;
var roboturnx=0,roboturno,l=1,m=1;
var p1=document.getElementById("Player1");
var p2=document.getElementById("Player2");
var side1=document.getElementById("sidep1");
var elem1 = document.getElementById("myBar1");
var side2=document.getElementById("sidep2");
var elem2 = document.getElementById("myBar2");

function disabledbox(booll){
    document.getElementById(1).disabled = booll;
    document.getElementById(2).disabled = booll;
    document.getElementById(3).disabled = booll;
    document.getElementById(4).disabled = booll;
    document.getElementById(5).disabled = booll;
    document.getElementById(6).disabled = booll;
    document.getElementById(7).disabled = booll;
    document.getElementById(8).disabled = booll;
    document.getElementById(9).disabled = booll;
}

window.onload = function() {
    disabledbox(true);
  }

  //test if box empty for add symbol automaticaly becouse of timeover
function test1(id){
    var xo = document.getElementById(id);
    if(xo.innerHTML!='X' && xo.innerHTML!='O')
    {symbol(id);roboturnx=1}
    if(roboturnx==0 && l<10){test1(++l)}
}   
function test2(id){
    var xo = document.getElementById(id);
    if(xo.innerHTML!='X' && xo.innerHTML!='O')
    {symbol(id);roboturno=1}
    if(roboturno==0 && m<10 ){test2(++m);}
    
} 


function symbol(id){
    var X=document.getElementById(id);
    if(++counterc %2!=0){
        //player 1
        X.innerHTML="X";
        X.style.color="#f00";
        p1.style.color='#000';
        p2.style.color='#fff';
        turnp1=false;
        turnp2=true;
        countfull++;
        if(countfull!=9)
        timer2();
        testwiner();
        roboturno=0;
    }
    else
    {
        //player 2
        X.innerHTML="O";
        X.style.color="#00f";
        p1.style.color='#fff';
        p2.style.color='#000';
        turnp1=true;
        turnp2=false;
        countfull++;
        if(countfull!=9)
        timer1();
        testwiner();
        roboturnx=0;
    }
    X.disabled = true;
}

function reset(){
    var bt = document.getElementById("btplay");
    if(bt.innerHTML=="Start Now"){
        bt.innerHTML="_Restart_";
        disabledbox(false);
        document.getElementById(1).style.backgroundColor = "#6599FF";
        document.getElementById(2).style.backgroundColor = "#6599FF";
        document.getElementById(3).style.backgroundColor = "#6599FF";
        document.getElementById(4).style.backgroundColor = "#6599FF";
        document.getElementById(5).style.backgroundColor = "#6599FF";
        document.getElementById(6).style.backgroundColor = "#6599FF";
        document.getElementById(7).style.backgroundColor = "#6599FF";
        document.getElementById(8).style.backgroundColor = "#6599FF";
        document.getElementById(9).style.backgroundColor = "#6599FF";
        document.getElementById("Player1").style.color="#fff";
        timer1();
        stoptime=false;  
    }
        
        else{//reset
            document.getElementById(1).innerHTML = "";
            document.getElementById(2).innerHTML = "";
            document.getElementById(3).innerHTML = "";
            document.getElementById(4).innerHTML = "";
            document.getElementById(5).innerHTML = "";
            document.getElementById(6).innerHTML = "";
            document.getElementById(7).innerHTML = "";
            document.getElementById(8).innerHTML = "";
            document.getElementById(9).innerHTML = "";
            disabledbox(true);
            counterc=0;
            p1.style.color='#fff';
            p2.style.color='#000';    
            i=0,j=0,k=0;
            bt.innerHTML="Start Now";  
            if(timeover1){
                for(i=0;i<countovertime1;i++)
                document.getElementById("ico1").remove();
            }
            if(timeover2){
                for(i=0;i<countovertime2;i++)
                document.getElementById("ico2").remove();
            }
            counterc=0;//defined turn of which player
             i=0,j=0,k=0;
             turnp1=true,turnp2=false;
            stoptime=false;
            countovertime1=0,countovertime2=0,countfull=0;
            timeover1=false,timeover2=false;
            roboturnx=0,roboturno,l=1,m=1;
        }
}


function timer1() {
  if (k== 0) {
    k = 1;
    var width = 100;
    var id = setInterval(frame, 100);
    function frame() {
      if (width <= 0 || turnp2 || stoptime) {
        if(width==0){
            timeover1=true;
            icon1 = document.createElement('i');
            icon1.setAttribute('class','fas fa-hourglass-end fa-3x');
            icon1.setAttribute('id','ico1');
            side1.appendChild(icon1);
            ++countovertime1;
            test1(1);
          }
        clearInterval(id);
        k = 0;
        width=100;
        elem1.style.width = width + "%";
        elem1.innerHTML = width  + "%";
      } else {
        width--;
        elem1.style.width = width + "%";
        elem1.innerHTML = width  + "%";
      }
    }
  }
}

function timer2() {
    if (j == 0) {
      j = 1;
      var width = 100;
      var id = setInterval(frame, 100);
      function frame() {
        if (width <= 0 || turnp1 || stoptime) {
            if(width==0){
                timeover2=true;
                icon2 = document.createElement('i');
                icon2.setAttribute('class','fas fa-hourglass-end fa-3x');
                icon2.setAttribute('id','ico2');
                side2.appendChild(icon2);
                ++countovertime2;
                test2(1);
              }
          clearInterval(id);
          j = 0;
          width=100;
          elem2.style.width = width + "%";
          elem2.innerHTML = width  + "%";
        } else {
          width--;
          elem2.style.width = width + "%";
          elem2.innerHTML = width  + "%";
        }
      }
    }
  }

  function innerh(idd){
      return document.getElementById(idd).innerHTML
  }

function whowinner(symbol){
    if(innerh(1)==symbol && innerh(2)==symbol && innerh(3)==symbol)
        return true;
    else if(innerh(4)==symbol && innerh(5)==symbol && innerh(6)==symbol)
        return true
    else if(innerh(7)==symbol && innerh(8)==symbol && innerh(9)==symbol)
        return true
    if(innerh(1)==symbol && innerh(4)==symbol && innerh(7)==symbol)
        return true;
    else if(innerh(2)==symbol && innerh(5)==symbol && innerh(8)==symbol)
        return true
    else if(innerh(3)==symbol && innerh(6)==symbol && innerh(9)==symbol)
        return true
    else if(innerh(1)==symbol && innerh(5)==symbol && innerh(9)==symbol)
        return true
    else if(innerh(3)==symbol && innerh(5)==symbol && innerh(7)==symbol)
        return true    
    else
        return false;
}

function testwiner(){
    if(whowinner('X')){
        stoptime=true;
        disabledbox(true);
        icon1 = document.createElement('i');
        icon1.setAttribute('class','fas fa-trophy fa-5x');
        icon1.setAttribute('id','ico1');
        side1.appendChild(icon1);
    }
    if(whowinner('O')){
        stoptime=true;
        disabledbox(true);
        icon2 = document.createElement('i');
        icon2.setAttribute('class','fas fa-trophy fa-5x');
        icon2.setAttribute('id','ico2');
        side2.appendChild(icon2);
    }
}