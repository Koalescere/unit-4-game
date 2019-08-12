 // Global variables

//Crystal Variables:

var crystals = {
    R:
    {
    name:  "RUBY_BUTTON",
    value: 0
    },

    D:
    {
    name:  "DIAMOND_BUTTON",
    value: 0
    },
 
    C:
    {
    name:  "CITRINE_BUTTON",
    value: 0
    },
    
    E:
    {
    name:  "EMERALD_BUTTON",
    value: 0
    }
};

//counter Variables
var currentTally = 0;
var targetofTally = 0;
var winCount = 0;
var lossCount = 0;


//functions, are to be applied where code is repeated
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max-min+1)) +min;
    // Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    // Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

var startGame = function() {

    currentTally = 0;
    //getRandom = Math.floor(Math.random() * (max-min+1)) +min;
    //targetofTally = getRandom(19, 120) =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //crystals.R.value = getRandom(1, 12) = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    targetofTally = getRandom(19, 120); 

    crystals.R.value = getRandom(1, 12);
    crystals.D.value = getRandom(1, 12);
    crystals.C.value = getRandom(1, 12);
    crystals.E.value = getRandom(1, 12);
    
    // html id="Target_Randomly_Generated-No).html;" mapped via jqery to java script object
    $("#Target_Randomly_Generated-No").html(targetofTally);
    // html id="Score;" mapped via jqwery to java script object
    $("#Score").html(currentTally);

    // view randomizer
    console.log ("Target of Tally: " + targetofTally);
    console.log ("R:  " + crystals.R.value + " | D:  " + crystals.D.value + " | C:  "+ crystals.C.value + " | E:  "+ crystals.E.value); 
  
}

var add2Count = function (crystals){
    //Self itteration
    currentTally = currentTally + crystals.value;

    //Push update to html
    $("#Score").html(currentTally);

    //console.log("Your Score: " + currentTally);

    checkifWin();

    console.log("Your Score: " + currentTally);
};
// id="Target_Randomly_Generated-No;"
// id="Score"

//MAIN PROCESS-RUN GAME

var checkifWin = function(){

    if(currentTally > targetofTally) {
        alert("Sorry.  You Lost!!");
        console.log ("You Lost!!");
        lossCount ++;
        
        $("#You_Lost").html("Losses: " + lossCount);
        startGame ();
    }

    else if (currentTally == targetofTally) {
        alert("Win.  Winner Winner Chicken Dinner");
        console.log ("You Won!!");
        winCount ++;

        $("#You_Won").html("Wins:  " + winCount);
        startGame ();
    }   
}

startGame();

//click events
$("#ruby").click(function() {
    //updates value on each click, with the random value for that button, updates take place in add2Count function
    add2Count(crystals.R)
});

$("#diamond").click(function() {
    add2Count(crystals.D)
});

$("#citrine").click(function() {
    add2Count(crystals.C)
});

$("#emerald").click(function() {
    add2Count(crystals.E)
});