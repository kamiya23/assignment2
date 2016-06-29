/*//STEP 1
var num = window.prompt("Enter a number :");
window.console.log(Math.abs(num));
*/

/*//STEP 2
var num = window.prompt("Enter a decimal value :");
window.console.log(Math.round(num));
*/

/*//STEP 3
var num = window.prompt("Enter a decimal value :");
window.console.log(Math.floor(num));
*/

/*//STEP 4
var num =window.prompt("Enter five numbers between 1 - 9 by using comma :");
x = (num.match(/\d/g));

window.console.log("Largest Number is : " + Math.max(x[0], x[1], x[2], x[3], x[4]));
window.console.log("Smallest Number is : " + Math.min(x[0], x[1], x[2], x[3], x[4]));
*/


/*//STEP 5
var num = window.prompt("Enter a number :");
window.console.log(Math.sqrt(num));
*/

/*//STEP 6
var curDate = new Date();
window.console.log(curDate.getDate());
*/

/*//STEP 7
var numOfDays = new Date();
var num = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
windows.console.log(num[numOfDays.getMonth()] + " Days");
*/



/*//STEP 8

var d = new Date();
var monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 window.console.log(monthName[d.getMonth()]);
*/



/*//STEP 9
var nameDay = new Date();
var days = nameDay.getDay();
if (days == 0 || days == 6){
    window.console.log("This is weekend date");
}else{
 window.console.log("This is not a weekend date");
}
*/
 

/*//Step 10

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var x = (d.getDay()) - 1;

if (x<0){
    x = 6;
}
window.console.log(days[x]);
*/

/*//STEP 11
var d = new Date();

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var printDay = days[d.getDay()] ;
window.console.log(printDay[0]);
*/


/*//STEP 12
var num1 = window.prompt("Enter first number :");
var num2 = window.prompt("Enter second number :");

if(num1 > num2){
    window.console.log(num1);    
} else {
    window.console.log(num2);
}
*/



/* //STEP 13
var studName = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var marks = [88, 77, 88, 95, 68];

for(var i=0; i<=4; i++)
{
if (marks[i]< 60)
{
window.console.log(studName[i] + " Grade: F");
} else if((marks[i]>=60) && marks[i] < 70 )
{
 window.console.log(studName[i] + " Grade: D");
} else if((marks[i]>=70) && (marks[i] < 80))
{
window.console.log(studName[i] + " Grade: C");
}else if((marks[i]>=80) && (marks[i] < 90))
{
window.console.log(studName[i] + " Grade: B");
}else {
window.console.log(studName[i] + " Grade: A");
}
}
*/


/*//STEP 14
for (var n=1; n<=15; n++)
    {
        if ((n%2)==0)
            {
                window.console.log("Current Number " + n + " is Even");
            } else {
                window.console.log("Current Number " + n + " is Odd");
            }
    }
*/



/*//STEP 15

for(var x = 1; x<=100; x++)
    {
     
        if(((x%3)==0) && ((x%5)==0)){
            window.console.log("FizzBuzz");
            
        }else if(x%5==0){
            window.console.log("Buzz");
        }
        
        else if((x%3)==0){
                window.console.log("Fizz");
    }
    else{
            window.console.log(x);
        }
        
    }
*/

 /* //PART 4 - The "Hitchhiker's Guide to the Galaxy" Game
//STEP 1
var wish = window.confirm("Are you ready to play game?");
if(wish == true){
    window.console.log("Awesome, our hero is waiting!");
}else{
    window.console.log("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}
//STEP 2
window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");


//STEP 3
var x = window.prompt("Which direction would you like to head (please enter forward, left, or right)");


//STEP 4
switch (x) {
    case "forward":
        window.alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
        
    case "left":
        window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
        break;
        
    case "right":
        window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
        
    default:
        window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
}

//STEP 5 & 6
var scale = window.prompt("Rate this game on a scale of 1 to 10.");
if ((scale == "") || (scale >10) || (scale < 1)){
    scale =10;
}

if ((scale >= 6) && (scale <= 10))  {
    window.alert("Thank you, we will continue to make improvements to the game!");
} else if (scale >= 1 && scale <= 5){
    window.alert("Whatever, you weren’t very good at this game anyway!");
} 

/* //STEP 5 & 6  Two methods this is optional

var scale = window.prompt("Rate this game on a scale of 1 to 10.");
if ((scale == "") || (scale >10) || (scale < 1)){
    scale =10;
   window.alert("Thank you! See you next time.");
}else {

if ((scale >= 6) && (scale <= 10))  {
    window.alert("Thank you, we will continue to make improvements to the game!");
} else if (scale >= 1 && scale <= 5){
    window.alert("Whatever, you weren’t very good at this game anyway!");
}
}*/




/*//PART 5 The "CoinFlip" Game

var coinFlip = Math.random(); 
var choice = window.prompt(' Choose "Heads or Tails" :');
var cerNum = .50;

if(coinFlip < cerNum){
    coinFlip = "Heads";
} else {
    coinFlip = "Tails";
}
   
if((coinFlip == "Heads") && ((choice == "heads") ||(choice == "Heads") ) ){
     window.alert("The flip was heads and you chose heads...you win!");
}
else if ((coinFlip == "Heads") && ((choice == "tails") ||(choice == "Tails") ) ) {
    window.alert("The flip was heads and you chose tails...you lose");
} 
else if((coinFlip == "Tails") && ((choice == "heads") ||(choice == "Heads") ) ) {
   
    window.alert("The flip was tails but you chose heads...you lose!");
    }
else if((coinFlip == "Tails") && ((choice == "tails") ||(choice == "Tails") ) ) {
    window.alert("The flip was tails and you chose tails...you win!");
}
*/


/* //PART 6 - The "CoinFlip" Game Redux

var coinFlip;
for(var n=1; n<=10; n++){
    coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);
   // window.console.log(coinFlip);

if(coinFlip == 0) {
    window.console.log("Heads");
} else {
    window.console.log("Tails");
}

}
*/

/* //PART 7

var coinFlip;
do {
 coinFlip = Math.random();
 coinFlip = Math.round(coinFlip);
    
 if(coinFlip == 0){
   window.console.log("Heads"); 
 }
 else { 
     window.console.log("Tails"); 
 }
    
 }while (coinFlip != 1);
     
  // working properly.. pls try many times to check this condition.
 
*/


/*//PART 8
var tri = ['#', '##', '###', '####', '#####','######', '#######'];

for(var n=0; n<7; n++)
    {
        window.console.log(tri[n]);  
    }
*/


    

/*//PART 9
var n;
for(n=0; n<=15; n++)
    {
        if((n%2)==0)
            {
            window.console.log('"' + n + ' is even"');
            } else {
                window.console.log('"' + n + ' is odd"');
            }
    }
*/

