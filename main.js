var scoreA = 0;
var scoreB = 0;
var Q = [];
var A = [];
var flg = 1;
var djeop, tjeop;
var counter = 0;

Q[1] = "This game ranks number 1 in the list of Philippines most popular sports";
Q[2] = "Filipino actor, best known for playing the lead role in Juan dela Cruz and FPJ's Ang Probinsyano.";
Q[3] ="Man's best friend";
Q[4] ="Tokyo is the capital of this country.";
Q[5] ="is a popular Filipino dish and cooking process in Filipino cuisine that involves meat";
Q[6] ="National sport of the Philippines";
Q[7] ="King of Comedy";
Q[8] ="It is often valued by humans for companionship and for its ability to hunt vermin.";
Q[9] ="Seoul is the capital of this country.";
Q[10] ="Is a Filipino soup or stew characterized by its sour and savoury taste most often associated with tamarind";
Q[11] ="Sport which two teams of six players are separated by a net";
Q[12] ="The fighting senator worked as a baker, a construction worker and a donut vendor before becoming a legend in boxing.";
Q[13] ="Commonly raised as livestock for meat and milk";
Q[14] ="Pyongyang is the capital of this country";
Q[15] ="Filipino dish which was popularized in the district of Malate, Manila but made in traditional Bicolano style.";
Q[16] ="Sports that requires the use of one's arms and legs to move the body through water";
Q[17] ="Filipino actor, television presenter, comedian, singer and songwriter. He is one of three pioneer hosts of Eat Bulaga!";
Q[18] ="The Heaviest Land Animal in the World";
Q[19] ="Beijing is the capital of this country";
Q[20] ="Is a developing bird embryo (usually a duck) that is boiled and eaten from the shell.";
Q[21] ="Sports that involve kicking the ball to score a goal";
Q[22] ="Spanish Filipino comedian, actor, television presenter and songwriter. He hosts the noontime variety show Eat Bulaga!. He is a member of the comedy trio.";
Q[23] ="The Tallest Land Animal in the World";
Q[24] ="New Delhi is the capital of this country";
Q[25] ="Is a type of baked rice cake from the Philippines. It is usually eaten for breakfast, especially during the Christmas season.";

A[1] ="Basketball";
A[2] ="Coco Martin";
A[3] ="Dog";
A[4] ="Japan";
A[5] ="Adobo";
A[6] ="Arnis";
A[7] ="Dolphy";
A[8] ="Cat";
A[9] ="South Korea";
A[10] ="Sinigang";
A[11] ="Volleyball";
A[12] ="Manny Pacquiao";
A[13] ="Cow";
A[14] ="North Korea";
A[15] ="Bicol Express";
A[16] ="Swimming";
A[17] ="Vic Sotto";
A[18] ="Elephant";
A[19] ="China";
A[20] ="Balut";
A[21] ="Football";
A[22] ="Joey de Leon";
A[23] ="Giraffe";
A[24] ="India";
A[25] ="Bibingka";


var teamA = prompt("Enter Team Name","Team A");
if(teamA==null){
    teamA="TeamA";
}
var teamB = prompt("Etner Team Name","Team B");
if(teamB==null){
    teamB="TeamB";
}
document.getElementById('enteredTeamA').innerHTML = teamA;
document.getElementById('enteredTeamB').innerHTML = teamB;
   
document.getElementById("scoreA").innerHTML = scoreA;
document.getElementById("scoreB").innerHTML = scoreB;

for(var i = 1; i < Q.length; i++){
    var x = Q[i];
}
for(var i = 1; i < A.length; i++){
    var x = A[i];
}

var rdm = parseInt(Math.random()*2)+1;
if(rdm==1){
    flg = 1 
    alert(teamA + ", goes first!");
    document.getElementById("ans").innerHTML = teamA + " get to pick first" ;
}
else if (rdm==2) {
    flg = 2
    alert(teamB + ", goes first!");
    document.getElementById("ans").innerHTML = teamB + " get to pick first" ;
}

for(var i = 0; i<1; i++){
    djeop = parseInt(Math.random()*25)+1;
    tjeop = parseInt(Math.random()*25)+1;
    var sameNum = true;
    if(djeop == tjeop){
        sameNum = false;
    }
    if(sameNum){
        djeop = djeop;
        tjeop = tjeop;
    }else {
        i--;
    }
}

function btnFunction(x) {
    counter++;
    if(flg>2){ flg=1
        
    }
    var question, answer, comment;
    var scr = 0;
    var scrDeop = 0;
   
    if(Q[x]=="This game ranks number 1 in the list of Philippines most popular sports"){scr=500;}
    if(Q[x]=="Filipino actor, best known for playing the lead role in Juan dela Cruz and FPJ's Ang Probinsyano."){scr=500;}
    if(Q[x]=="Man's best friend"){scr=500;}
    if(Q[x]=="Tokyo is the capital of this country."){scr=500;}
    if(Q[x]=="is a popular Filipino dish and cooking process in Filipino cuisine that involves meat"){scr=500;}
    if(Q[x]=="National sport of the Philippines"){scr=400;}
    if(Q[x]=="King of Comedy"){scr=400;}
    if(Q[x]=="It is often valued by humans for companionship and for its ability to hunt vermin."){scr=400;}
    if(Q[x]=="Seoul is the capital of this country."){scr=400;}
    if(Q[x]=="Is a Filipino soup or stew characterized by its sour and savoury taste most often associated with tamarind"){scr=400;}
    if(Q[x]=="Sport which two teams of six players are separated by a net"){scr=300;}
    if(Q[x]=="The fighting senator worked as a baker, a construction worker and a donut vendor before becoming a legend in boxing."){scr=300;}
    if(Q[x]=="Commonly raised as livestock for meat and milk"){scr=300;}
    if(Q[x]=="Pyongyang is the capital of this country"){scr=300;}
    if(Q[x]=="Filipino dish which was popularized in the district of Malate, Manila but made in traditional Bicolano style."){scr=300;}
    if(Q[x]=="Sports that requires the use of one's arms and legs to move the body through water"){scr=200;}
    if(Q[x]=="Filipino actor, television presenter, comedian, singer and songwriter. He is one of three pioneer hosts of Eat Bulaga!"){scr=200;}
    if(Q[x]=="The Heaviest Land Animal in the World"){scr=200;}
    if(Q[x]=="Beijing is the capital of this country"){scr=200;}
    if(Q[x]=="Is a developing bird embryo (usually a duck) that is boiled and eaten from the shell."){scr=200;}
    if(Q[x]=="Sports that involve kicking the ball to score a goal"){scr=100;}
    if(Q[x]=="Spanish Filipino comedian, actor, television presenter and songwriter. He hosts the noontime variety show Eat Bulaga!. He is a member of the comedy trio."){scr=100;}
    if(Q[x]=="The Tallest Land Animal in the World"){scr=100;}
    if(Q[x]=="New Delhi is the capital of this country"){scr=100;}
    if(Q[x]=="Is a type of baked rice cake from the Philippines. It is usually eaten for breakfast, especially during the Christmas season."){scr=100;}
    

    if(x==djeop){
            alert("Double Jeopardy!")
        }
    if(x==tjeop){
            alert("Triple Jeopardy!")
        }

    answer = A[x];
    question = prompt("Question: "+Q[x])

    if(question.toUpperCase() == answer.toUpperCase()){
        if(flg == 1){
            scoreA = scoreA + scr;
            if(x==djeop){
                scoreA += (scr * 2)-scr;
            }
            if(x==tjeop){
                scoreA += (scr * 2);
            }
            document.getElementById('ans').innerHTML = teamA + "\'s answer is correct! It\'s "+ teamB + "\'s turn. <br>The answer is: "+A[x];
        } 
        else{
            scoreB = scoreB + scr;
            if(x==djeop){
                scoreB +=  (scr * 2)-scr;
            }
            if(x==tjeop){
                scoreB += (scr * 2);
            }
            document.getElementById('ans').innerHTML = teamB + "\'s answer is correct! It\'s "+ teamA + "\'s turn. <br>The answer is: "+A[x];
        }     
    }
    else{
        if(flg==1){//team A is wrrong
            question = prompt(teamA+"\'s answer is wrong! "+teamB+" can steal \n\nQuestion: "+Q[x])
            if (question == null) question = " "
            if(question.toUpperCase() == answer.toUpperCase()){
                scoreB = scoreB + scr;
                if(scoreA <= 0){
                    scoreA = 0;
                }
                else{
                    scoreA = scoreA - scr;
                    if(scoreA <= 0){
                        scoreA = 0;
                    }
                }

                if(x==djeop){
                    scoreB +=(scr * 2)-scr;
                    if(scoreA <= 0){
                        scoreA = 0;
                    }
                    else {
                        scoreA -= (scr * 2)-scr;
                        if(scoreA <= 0){
                            scoreA = 0;
                        }
                    }
                }
                if(x==tjeop){
                    scoreB +=(scr * 2);
                    if(scoreA <= 0){
                        scoreA = 0;
                    }
                    else{
                         scoreA -=(scr * 3)-scr;
                         if(scoreA <= 0){
                            scoreA = 0;
                         }
                    } 
                }
                document.getElementById('ans').innerHTML = teamB + "\'s answer is correct! It\'s still "+ teamB + "\'s turn. <br>The answer is: "+A[x];
            }
            else{
                 document.getElementById('ans').innerHTML = teamB + "\'s answer is wrong! It\'s still "+ teamB + "\'s turn. <br>The answer is: "+A[x];
            }
        }
        else{//team B is wrong
            question = prompt(teamB + "\'s answer is wrong! " + teamA + " can steal \n\n Question: "+Q[x])
            if (question == null) question = " "
            if(question.toUpperCase() == answer.toUpperCase()){
                scoreA = scoreA + scr;
                if(scoreB <= 0){
                    scoreB = 0;
                }
                else{
                    scoreB = scoreB - scr;
                    if(scoreB <= 0){
                        scoreB = 0;
                    }
                }

                if(x==djeop){
                    scoreA += (scr * 2)-scr;
                    if(scoreB <= 0){
                        scoreB = 0;
                    }
                    else {
                        scoreB -= (scr * 2)-scr;
                        if(scoreB <= 0){
                            scoreB = 0;
                        }
                    } 
                }
                if(x==tjeop){
                    scoreA += (scr * 2);
                    if(scoreB <= 0){
                        scoreB = 0;
                    }
                    else {
                        scoreB -= (scr * 3)-scr;
                        if(scoreB <= 0){
                            scoreB = 0;
                        }
                    }
                }    
                document.getElementById('ans').innerHTML = teamA + "\'s answer is correct! It\'s still "+ teamA + "\'s turn. <br>The answer is: "+A[x];
            }
            else{
                 document.getElementById('ans').innerHTML = teamA + "\'s answer is wrong! It\'s still "+ teamA + "\'s turn. <br>The answer is: "+A[x];
            }
        }      
    }
 score();
        flg++
        if(counter == 25){
            if(scoreA == scoreB){document.getElementById('ans').innerHTML = "End of Game. It's a tie!"}
            else if(scoreA > scoreB){ document.getElementById('ans').innerHTML = "End of Game. " + teamA + " wins!";}
            else{document.getElementById('ans').innerHTML = "End of Game. " + teamB + " wins!";}
        }
        
    if(A[x] == 'Basketball'){var elem = document.getElementById('bnt-1').style.visibility='hidden';
    }else if(A[x] == 'Coco Martin'){ var elem = document.getElementById('bnt-2').style.visibility='hidden';
    }else if(A[x] == 'Dog'){var elem = document.getElementById('bnt-3').style.visibility='hidden';
    }else if(A[x] == 'Japan'){var elem = document.getElementById('bnt-4').style.visibility='hidden';
    }else if(A[x] == 'Adobo'){var elem = document.getElementById('bnt-5').style.visibility='hidden';
    }else if(A[x] == 'Arnis'){var elem = document.getElementById('bnt-6').style.visibility='hidden';
    }else if(A[x] == 'Dolphy'){var elem = document.getElementById('bnt-7').style.visibility='hidden';
    }else if(A[x] == 'Cat'){var elem = document.getElementById('bnt-8').style.visibility='hidden';
    }else if(A[x] == 'South Korea'){var elem = document.getElementById('bnt-9').style.visibility='hidden';
    }else if(A[x] == 'Sinigang'){var elem = document.getElementById('bnt-10').style.visibility='hidden';
    }else if(A[x] == 'Volleyball'){var elem = document.getElementById('bnt-11').style.visibility='hidden';
    }else if(A[x] == 'Manny Pacquiao'){var elem = document.getElementById('bnt-12').style.visibility='hidden';
    }else if(A[x] == 'Cow'){var elem = document.getElementById('bnt-13').style.visibility='hidden';
    }else if(A[x] == 'North Korea'){var elem = document.getElementById('bnt-14').style.visibility='hidden';
    }else if(A[x] == 'Bicol Express'){var elem = document.getElementById('bnt-15').style.visibility='hidden';
    }else if(A[x] == 'Swimming'){var elem = document.getElementById('bnt-16').style.visibility='hidden';
    }else if(A[x] == 'Vic Sotto'){var elem = document.getElementById('bnt-17').style.visibility='hidden';
    }else if(A[x] == 'Elephant'){var elem = document.getElementById('bnt-18').style.visibility='hidden';
    }else if(A[x] == 'China'){var elem = document.getElementById('bnt-19').style.visibility='hidden';
    }else if(A[x] == 'Balut'){var elem = document.getElementById('bnt-20').style.visibility='hidden';
    }else if(A[x] == 'Football'){var elem = document.getElementById('bnt-21').style.visibility='hidden';
    }else if(A[x] == 'Joey de Leon'){var elem = document.getElementById('bnt-22').style.visibility='hidden';
    }else if(A[x] == 'Giraffe'){var elem = document.getElementById('bnt-23').style.visibility='hidden';
    }else if(A[x] == 'India'){var elem = document.getElementById('bnt-24').style.visibility='hidden';
    }else if(A[x] == 'Bibingka'){var elem = document.getElementById('bnt-25').style.visibility='hidden';
    }
}
function score(){
    document.getElementById('scoreA').innerHTML = scoreA;
    document.getElementById('scoreB').innerHTML = scoreB;
}
