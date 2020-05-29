/*
var current = 1;

function nextCard(current) {
    current += 1;
}

for (i=0;i<=3;i++) {
    document.getElementById('arrow_right').onclick = nextCard(i);
    function nextCard() {
        document.getElementById('01').document.write('02');
    }
}
*/
var cards, current, firstcard, secondcard, thirdcard;
current = "01";
firstcard = document.getElementById("01");
secondcard = document.getElementById("02");
thirdcard = document.getElementById("03");
cards = [firstcard, secondcard, thirdcard];

for (i = 0; i < 3; i++) {
    document.getElementById('arrow_right').onclick = cards[i+1].show();
    //cards[i].hide();
    
}

/*$(document).ready(function() {
    document.getElementById("#front_01").onclick(function() {
        style.display='none';
    });
    
    $("#back_01").click(function() {
        $("#front_01").show();
    });
    "document.getElementById('front_01').style.display='none'; document.getElementById('back_01').style.display='block'";
    
});




let currentCard = 1;

$flip = document.querySelectorAll(".front");
$prevButton = document.querySelector("#arrow_left");
$nextButton = document.querySelector("#arrow_right");


const getCurrentCard = () => document.querySelector('#flashcard${currentCard}');

$nextButton.addEventListener("click", function() {
    $currentCard = getCurrentCard();
    $currentCard.classList.remove("flashcard--current");
    currentCard++;
    $currentCard = getCurrentCard();
    $currentCard.classList.add("flashcard--current");
});
$flip.addEventListener("click", function() {
    $currentCard = getCurrentCard();
    $currentCard.classList.toggle("flipped");
});


$(document).ready(function() {
    $("#arrow_right").click(function() {
        $("01").hide();
    });
    $("#arrow_right").click(function() {
        $("02").show();
    });
});*/