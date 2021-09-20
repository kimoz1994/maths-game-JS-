//******************************* Quick Maths Game Logic *******************************************//

//if we click on the start/reset
var playing = false;
var score;
var x;
var action;
var correctanswer;
 document.getElementById("startreset").onclick = function(){
    //if we are playing
     if(playing == true ){
        
        window.location.reload();
        
        
        }
        
        else{
            //change mode to playing
            playing = true;
            //if we are not playing
            //set score to zero
        
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
            
            
            //show countdown box
            
        document.getElementById("timeremaining").style.display = "inline-block";
            
         x = 60;
         document.getElementById("timeremainingvalue").innerHTML = x; 
            //hide game over box
            hide("gameover");
                    //change button to "reset"

        document.getElementById("startreset").innerHTML = "Reset Game";
        
            //start countdown
            
            startcountdown();   
            
            //generate a new question and multiple answers
            generate();
            
            
        }
     

 };




//clicking on an answer box

for(var i =1 ; i<5 ; i++){
    document.getElementById("box"+i).onclick = function(){
    //if we are playing
    if (playing==true &&document.getElementById("gameover").style.display == "none"){//yes
        
       if(this.innerHTML == correctanswer){
           //correct answer
           
           score++;
           document.getElementById("scorevalue").innerHTML = score;
           
           //hide wrong box and show correct box
           hide("wrong");
           show("correct");
           document.getElementById("correctsound").play();
           setTimeout(function(){
               
               hide("correct");
               
               
           },1000);
           
           //generate a new question
           
           
           generate();
           
           
       }
        else{
            
            show("wrong");
            document.getElementById("wrongsound").play();
            hide("correct");
            setTimeout(function(){
                hide("wrong")
            },1000);
        } 
            
        
    }
    
    
//    if(document.getElementById("gameover").style.display != "none"){
//        
//        window.location.reload();
//        
//        
//    }
       
        
    
        
    
}
    
    
    
    
}
     

//------------------------------------------------------------------//

//if we click on an answer box
    //if we aare playing 
        //correct?
            //yes
                //increase the score by 1
                //show correct box for 1 sec
                //generate new question and answers
            //no
                //show try again for 1sec
            


//  next we define the funcitons we use in the code 



//start counter
    function startcountdown(){
        
        
         action = setInterval(function(){x-=1;
                    
                    document.getElementById("timeremainingvalue").innerHTML = x; 
                                     
                        if(x== 0) {//game over
                            
                            stopcountdown();
                            
                            //show gameover message
                            show("gameover");
                            document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + "</p>";
                            hide(timeremaining);                            
                            hide("correct");
                            hide("wrong");
                            
                            
                            
                            
                            
                            playing = false;
                            
                            document.getElementById("startreset").innerHTML = "Start Game"
                        }                      
                                               
                                               
                                               
                                               ;},1000);

        
        
    }
    

// stop counting
    function stopcountdown(){
        
        clearInterval(action);
    }
    

// hide an element
    function hide(id){
        
        document.getElementById(id).style.display = "none";
        
    }

//show an element
     function show(id){
        
        document.getElementById(id).style.display = "block";
        
    }

//generate question and myltiple answers 

function generate(){
    var num1 = Math.round(Math.random()*10);
    var num2 = Math.round(Math.random()*10);
    correctanswer = num1 * num2;    
    document.getElementById("question").innerHTML=num1+"x"+num2;
    var correctposition = Math.round(Math.random()*3+1);
    document.getElementById("box" + correctposition ).innerHTML = correctanswer;
    
    
    var answers = [correctanswer]
    
    for(var i = 1; i<5 ; i++ ){
        
      if(i!= correctposition) {
          var wronganswer;
          
          do{
              
              wronganswer= (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random())); //wrong answer
              
          }
          while(answers.indexOf(wronganswer)> -1)
          document.getElementById("box" + i ).innerHTML = wronganswer;
          
          answers.push(wronganswer);
          
          
      } 
        
        
    }
    
    
    
    
    
    
    

    
    
    
    
    

}



