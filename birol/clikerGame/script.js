if (localStorage.getItem("endings")==null) {
    localStorage.setItem("endings", 0);
};
var endingsId=document.getElementById("endingsNum");
endingsId.innerHTML="You Have "+localStorage.getItem("endings")+" Out Of The 4 Endings";
var count=0;
var score_num=0;
var upgradeLvl=0;
var amount=1;
var price_num="Price: 30";
var fix_repeat=0;
var name=0;
var hello=0;
var error=0;
var winChecker=(ending)=>{
    if (localStorage.getItem(ending)!=1);
        if (localStorage.getItem("endings")==0) {
            localStorage.setItem("endings", 1);
        } else if (localStorage.getItem("endings")==1) {
            localStorage.setItem("endings", 2);
        } else if (localStorage.getItem("endings")==2) {
            localStorage.setItem("endings", 3);
        } else if (localStorage.getItem("endings")==3) {
            localStorage.setItem("endings", 4)}};
var fix=()=>{
    fix_repeat++;
    if (upgradeLvl==3&&score_num>=2000) {
        winChecker("win");
        localStorage.setItem("win", 1);
        document.body.innerHTML='<center><h1>Congratulations, You got ending #1(Win&#127942;)</h1><h2>Try to find the other endings!</h2><p>Description: Win the game</p><p>A game made by: Birol</p><br><br><br><br><br><br><br><br><br><br><img src="trophy.png" alt="An image of a trophy" width="200" height"150"></img></center>';
    } else if (fix_repeat>=10) {
        winChecker("mechanic");
        localStorage.setItem("mechanic", 1);
        document.body.innerHTML='<center><h1>Congratulations, You got ending #3(Mechanic&#x1F527;)</h1><h2>Try to find the other endings!</h2><p>Description: Press the fix button 10 times</p><p>A game made by: Birol</p><br><br><br><br><br><br><br><br><br><br><img src="trophy.png" alt="An image of a trophy" width="200" height"150"></img></center>';
    };
};
var upgrade=()=>{
    var fix=document.getElementById("fix_price");
    var price=document.getElementById("price_id");
    var upgrade=document.getElementById("up");
    if (error>=5) {
        winChecker("error");
        localStorage.setItem("error", 1);
        document.body.innerHTML='<center><h1>ERROR Yo ERRORot ndERRORng ERROR)</h1><h2>TrERROR o fERRORd te otERRORh ERROR</h2><p>psERROtmRycd</p><p>AzERROR ERROR mERRORde y: ERROR</p><br><br><br><br><br><br><br><br><br><br><img src="errorScreenPhoto.png" alt="ERROR" width="400" height="300"></img></center>';
    };
    if (upgradeLvl==0&&score_num>=30) {
        score_num-=30;
        upgradeLvl=1;
        amount++;
        price_num="Price: 100";
        score.innerHTML=score_num;
    } else if (upgradeLvl==1&&score_num>=100) {
        score_num-=100;
        upgradeLvl=2;
        amount=5;
        price_num="Price: 300";
        score.innerHTML=score_num;
    } else if (upgradeLvl==2&&score_num>=300) {
        score_num-=300;
        upgradeLvl=3;
        amount=20;
        error+=1;
        price_num="ERROR&#9888;";
        score.innerHTML=score_num;
        upgrade.innerHTML="ERROR&#9888;";
        fix.innerHTML="Price: 2000";
    } else if (upgradeLvl==3) {
        error+=1;
    };
    price.innerHTML=price_num;
};
var func=()=>{
    var head=document.getElementById("head");
    var button=document.getElementById("button");
    var score=document.getElementById("score");
    switch(count) {
        case 0:
        head.innerHTML="Hello, World";
        count++;
        break;
    case 1:
        head.innerHTML="Hello, Worl";
        count++;
        break;
    case 2:
        head.innerHTML="Hello, Wor";
        count++;
        break;
    case 3:
        head.innerHTML="Hello, Wo";
        count++;
        break;
    case 4:
        head.innerHTML="Hello, W";
        count++;
        break;
    case 5:
        head.innerHTML="Hello,";
        count++;
        break;
    case 6:
        head.innerHTML="Hello";
        count++;
        break;
    case 7:
        head.innerHTML="Hell";
        count++;
        break;
    case 8:
        head.innerHTML="Hel";
        count++;
        break;
    case 9:
        head.innerHTML="He";
        count++;
        break;
    case 10:
        head.innerHTML="H";
        button.innerHTML="Revive";
        count++;
        button=1;
        break;
    case 11:
        head.innerHTML="Hello, World!";
        button.innerHTML="Break";
        count=0;
        score_num-=(amount+1);
        break;
    };
    score_num+=amount;
    score.innerHTML=score_num;
    if (score_num>=5000) {
        winChecker("grinder");
        localStorage.setItem("grinder", 1);
        document.body.innerHTML='<center><h1>Congratulations, You got ending #2(Grinder)</h1><h2>Try to find the other endings!</h2><p>Description: Get 5000 score</p><p>A game made by: Birol</p><br><br><br><br><br><br><br><br><br><br><img src="trophy.png" alt="An image of a trophy" width="200" height"150"></img></center>';
    };
};
var resetWins=()=>{
    var resetWinsCon=confirm("Are you sure you want to reset all you wins?");
    if (resetWinsCon==true){
        localStorage.setItem("endings", 0);
        localStorage.setItem("win", 0);
        localStorage.setItem("grinder", 0);
        localStorage.setItem("mechanic", 0);
        localStorage.setItem("error", 0);
        endingsId.innerHTML="You Have "+localStorage.getItem("endings")+" Out Of The 4 Endings";
    };
};
const audio=new Audio();
audio.src="clickingSnd.mp3"