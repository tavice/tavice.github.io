//query selectors
const score=document.querySelector('.Score');
const startscreen=document.querySelector('.StartScreen');
const gamearea=document.querySelector('.GameArea');




//create object player
let player={ speed:5,score:0}; 

//create highest score
let highest=0;


//initiate keyboard
let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false}; 


//Event listeners

startscreen.addEventListener('click',start);   //when you touch the startscreen div it starts the game
document.addEventListener('keydown',keyDown);
 document.addEventListener('keyup',keyUp);

 //Functions for the game
        function keyDown(ev){
            ev.preventDefault();
            keys[ev.key]=true;

        }
        function keyUp(ev){
            ev.preventDefault();
            keys[ev.key]=false;
            
        }

//function checkCollision

        
function checkCollision(a,b){
            aRect=a.getBoundingClientRect();
            bRect=b.getBoundingClientRect();

            return !((aRect.bottom<bRect.top)||(aRect.top>bRect.bottom)||(aRect.right<bRect.left)||(aRect.left>bRect.right));
        }


//function MOVINGLINES


function movingLines(){
            let lines=document.querySelectorAll('.lines');
            lines.forEach(function(item){
                if(item.y>=700){
                    item.y-=750;
                }
                item.y+=player.speed;
                item.style.top=item.y+'px';

            })
        }

 //function endGame       
        function endGame(){
            player.start=false;
            startscreen.classList.remove('hide');
        }


 //function moveCar

 
        function moveCar(car){
            let otherCar=document.querySelectorAll('.otherCar');
            otherCar.forEach(function(newOtherCar){
                if(checkCollision(car,newOtherCar)){
                    console.log('HIT');
                    endGame();
                }
                if(newOtherCar.y>=750){
                    newOtherCar.y=-100;
                    newOtherCar.style.left=Math.floor(Math.random()*350) + 'px';
                }
                newOtherCar.y+=player.speed;
                newOtherCar.style.top=newOtherCar.y+'px';

            })
        }


//function changeSpeed


        function changeSpeed(){
            if( player.score < 100){
                player.speed = 5
            } else if (player.score < 200){
                player.speed = 6
            } else if (player.score < 400){
                player.speed = 7
            } else if (player.score < 600){
                player.speed = 8
            } else if (player.score < 1000){
                player.speed = 9
            } else if (player.score < 2000){
                player.speed = 10
            } else {
                player.speed = 11
            }

            //console.log('player speed is ' + player.speed)
        }


 //function gamePlay




       
        function gamePlay(){

            let car=document.querySelector('.car');
            let road=gamearea.getBoundingClientRect();
            
           

            if(player.start === true){

                movingLines();
                moveCar(car);
                if(keys.ArrowUp && player.y>(road.top+50)){
                    player.y-=player.speed;
                }
                if(keys.ArrowDown && player.y<(road.bottom-50)){
                    player.y+=player.speed;
                }
                if(keys.ArrowLeft && player.x>0){
                    player.x-=player.speed;
                }
                if(keys.ArrowRight && player.x<(road.width-50)){
                    player.x+=player.speed;
                }

                car.style.top=player.y + 'px';
                car.style.left=player.x + 'px';

                window.requestAnimationFrame(gamePlay);
                
                player.score++;
                if(player.score>=highest)
                {
                    highest=player.score;
                } else (highest = highest)
                score.innerHTML="Your Score:"+ player.score+"<br><br>"+"Highest Score:"+highest;

                changeSpeed()    

            }
            
        }

 //Restscore button

        function ResetScore(){
            highest=0;
            score.innerHTML = "Highest Score:"+highest;
        }

 //function start


        function start(){
           
            startscreen.classList.add('hide');
            gamearea.innerHTML="";

            player.start=true;
            player.score=0;
            window.requestAnimationFrame(gamePlay);


           
    
            

           for(let x=0;x<5;x++){
                let roadline=document.createElement('div');
                roadline.setAttribute('class','lines');
                roadline.y=(x*300);
                roadline.style.top=roadline.y+'px';
                gamearea.appendChild(roadline);
            }
            
            let car=document.createElement('div');
            car.setAttribute('class','car');
            gamearea.appendChild(car);

            player.x=car.offsetLeft;
            player.y=car.offsetTop;


            for(let x=0;x<4;x++){
                
                const randomOtherCarArray = ['carOne','carTwo','carThree'];
                let randomOtherCar =  randomOtherCarArray[Math.floor(Math.random()*randomOtherCarArray.length)]  ;
                console.log(randomOtherCar)
  
                let othercar=document.createElement('div');
                othercar.setAttribute('class','otherCar');
               othercar.setAttribute('id', randomOtherCar)
                othercar.y=((x+1)*350)* -1;
                othercar.style.top=othercar.y+'px';
                othercar.style.left=Math.floor(Math.random()*350) + 'px';
                gamearea.appendChild(othercar);
            }
        }
        