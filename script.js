window.onload = function(){

  var canvas = document.getElementById("my-canvas");
  var ctx = canvas.getContext("2d");

  //Assign card images to card variables.
  var twoHeart = "images/2heart.png";
  var threeHeart = "images/3heart.png";
  var fourHeart = "images/4heart.png";
  var fiveHeart = "images/5heart.png";
  var sixHeart = "images/6heart.png";
  var sevenHeart = "images/7heart.png";
  var eightHeart = "images/8heart.png";
  var nineHeart = "images/9heart.png";
  var tenHeart = "images/10heart.png";
  var jackHeart = "images/jackheart.png";
  var queenHeart = "images/queenheart.png";
  var kingHeart = "images/kingheart.png";
  var aceHeart = "images/aceheart.png";
  var twoDiamond = "images/2diamond.png";
  var threeDiamond = "images/3diamond.png";
  var fourDiamond = "images/4diamond.png";
  var fiveDiamond = "images/5diamond.png";
  var sixDiamond = "images/6diamond.png";
  var sevenDiamond = "images/7diamond.png";
  var eightDiamond = "images/8diamond.png";
  var nineDiamond = "images/9diamond.png";
  var tenDiamond = "images/10diamond.png";
  var jackDiamond = "images/jackdiamond.png";
  var queenDiamond = "images/queendiamond.png";
  var kingDiamond = "images/kingdiamond.png";
  var aceDiamond = "images/acediamond.png";
  var twoSpade = "images/2spade.png";
  var threeSpade = "images/3spade.png";
  var fourSpade = "images/4spade.png";
  var fiveSpade = "images/5spade.png";
  var sixSpade = "images/6spade.png";
  var sevenSpade = "images/7spade.png";
  var eightSpade = "images/8spade.png";
  var nineSpade = "images/9spade.png";
  var tenSpade = "images/10spade.png";
  var jackSpade = "images/jackspade.png";
  var queenSpade = "images/queenspade.png";
  var kingSpade = "images/kingspade.png";
  var aceSpade = "images/acespade.png";
  var twoClub = "images/2club.png";
  var threeClub = "images/3club.png";
  var fourClub = "images/4club.png";
  var fiveClub = "images/5club.png";
  var sixClub = "images/6club.png";
  var sevenClub = "images/7club.png";
  var eightClub = "images/8club.png";
  var nineClub = "images/9club.png";
  var tenClub = "images/10club.png";
  var jackClub = "images/jackclub.png";
  var queenClub = "images/queenclub.png";
  var kingClub = "images/kingclub.png";
  var aceClub = "images/aceclub.png";
  var backCard = "images/backcard.png";



  //Card variables into an array.
  var cardVariation = [twoHeart, threeHeart, fourHeart, fiveHeart, sixHeart, sevenHeart, eightHeart, nineHeart, tenHeart, jackHeart, queenHeart, kingHeart, aceHeart, twoDiamond, threeDiamond, fourDiamond, fiveDiamond, sixDiamond, sevenDiamond, eightDiamond, nineDiamond, tenDiamond, jackDiamond, queenDiamond, kingDiamond, aceDiamond, twoSpade, threeSpade, fourSpade, fiveSpade, sixSpade, sevenSpade, eightSpade, nineSpade, tenSpade, jackSpade, queenSpade, kingSpade, aceSpade, twoClub, threeClub, fourClub, fiveClub, sixClub, sevenClub, eightClub, nineClub, tenClub, jackClub, queenClub, kingClub, aceClub];

  //Points array.
  var pointScale = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

  //Allows html elements to be edited in JS.
  var deal = document.querySelector('#deal');
  var dealt = document.querySelector('.dealt-cards');
  var firstCard = document.querySelector('.card-one');
  var secondCard = document.querySelector('.card-two');
  var thirdCard = document.querySelector('.card-three');
  var fourthCard = document.querySelector('.card-four');
  var fifthCard = document.querySelector('.card-five');
  var firstDealCard = document.querySelector('.deal-one');
  var secondDealCard = document.querySelector('.deal-two');
  var thirdDealCard = document.querySelector('.deal-three');
  var fourthDealCard = document.querySelector('.deal-four');
  var fifthDealCard = document.querySelector('.deal-five');

  //Adds function to deal the cards when button pressed.
deal.addEventListener('click', function () {

  //Disable the 'deal' button after it's been pressed.
  deal.disabled = true;
  deal.style = "background-color: #a5a3a3;";

  //Create text box to be used later.
  var textPosition = document.querySelector('.dealt-cards');
  var textBox = document.createElement('div');
  textBox.setAttribute('class', 'text-box');

  //Try again link to be used later.
  var tryAgainElement = document.createElement('a');
  var tryAgainText = document.createTextNode('Try again?');
  tryAgainElement.setAttribute('href', '');
  tryAgainElement.appendChild(tryAgainText);
  //textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);

  //Play again link to be used later.
  var playAgainElement = document.createElement('a');
  var playAgainText = document.createTextNode('Play again?');
  playAgainElement.setAttribute('href', '');
  playAgainElement.appendChild(playAgainText);


  //Random number generators to shuffle cards.
  var i = Math.floor(Math.random() * cardVariation.length);
  var a = Math.floor(Math.random() * cardVariation.length);
  while (a == i) {
    a = Math.floor(Math.random() * cardVariation.length);
  }
  var j = Math.floor(Math.random() * cardVariation.length);
  while (j == i || j == a) {
    j = Math.floor(Math.random() * cardVariation.length);
  }
  var b = Math.floor(Math.random() * cardVariation.length);
  while (b == i || b == a || b == j) {
    b = Math.floor(Math.random() * cardVariation.length);
  }
  var c = Math.floor(Math.random() * cardVariation.length);
      while (c == i || c == j || c == a || c == b) {
        c = Math.floor(Math.random() * cardVariation.length);
      }
  var d = Math.floor(Math.random() * cardVariation.length);
      while (d == i || d == j || d == a || d == b || d == c) {
        d = Math.floor(Math.random() * cardVariation.length);
      }
  var e = Math.floor(Math.random() * cardVariation.length);
      while (e == i || e == j || e == a || e == b || e == c || e == d) {
        e = Math.floor(Math.random() * cardVariation.length);
      }
  var f = Math.floor(Math.random() * cardVariation.length);
      while (f == i || f == j || f == a || f == b || f == c || f == d || f == e) {
        f = Math.floor(Math.random() * cardVariation.length);
      }
  var g = Math.floor(Math.random() * cardVariation.length);
      while (g == i || g == j || g == a || g == b || g == c || g == d || g == e || g == f) {
        g = Math.floor(Math.random() * cardVariation.length);
      }
  var h = Math.floor(Math.random() * cardVariation.length);
      while (h == i || h == j || h == a || h == b || h == c || h == d || h == e || h == f || h == g) {
        h = Math.floor(Math.random() * cardVariation.length);
      }


  var userCardOne = cardVariation[i];
  var userPointOne = pointScale[i];
  var userCardTwo = cardVariation[j];
  var userPointTwo = pointScale[j];
  var fullPointOne = userPointOne + userPointTwo;
  var firstCardElement = document.createElement('img');
  var secondCardElement = document.createElement('img');
  firstCard.style = "border: 3px solid #fff; background-color: #fff;";
  firstCardElement.setAttribute('src', userCardOne);
  firstCard.appendChild(firstCardElement);
  setTimeout(function (){
    secondCard.style = "border: 3px solid #fff; background-color: #fff;";
    secondCardElement.setAttribute('src', userCardTwo);
    secondCard.appendChild(secondCardElement);
  }, 200);


  var dealCardOne = cardVariation[a];
  var dealPointOne = pointScale[a];
  var dealCardTwo = cardVariation[b];
  var dealPointTwo = pointScale[b];
  var dealFullOne = dealPointOne + dealPointTwo;
  var firstDealCardElement = document.createElement('img');
  var secondDealCardElement = document.createElement('img');
  firstDealCard.style = "border: 3px solid #427493; background-color: #427493;";
  firstDealCardElement.setAttribute('src', backCard);
  firstDealCard.appendChild(firstDealCardElement);
  setTimeout(function (){
    secondDealCard.style = "border: 3px solid #427493; background-color: #427493;";
    secondDealCardElement.setAttribute('src', backCard);
    secondDealCard.appendChild(secondDealCardElement);
  }, 200);

  //Adds button for twist action.
  var twistButton = document.createElement('input');
  twistButton.type = 'button';
  twistButton.value = 'Hit me!';

  //Creates button to stick.
  var stickButton = document.createElement('input');
  stickButton.type = 'button';
  stickButton.value = 'Stick';

   dealt.appendChild(twistButton);
  dealt.appendChild(stickButton);

  if (fullPointOne == 21 && dealFullOne == 21) {
    stickButton.disabled = true;
    twistButton.disabled = true;
    stickButton.style = "background-color: #a5a3a3;";
    twistButton.style = "background-color: #a5a3a3;";
    setTimeout(function (){
      firstDealCard.style = "border: 3px solid #fff; background-color: #fff;";
      firstDealCardElement.setAttribute('src', dealCardOne);
      firstDealCard.appendChild(firstDealCardElement);
      secondDealCard.style = "border: 3px solid #fff; background-color: #fff;";
      secondDealCardElement.setAttribute('src', dealCardTwo);
      secondDealCard.appendChild(secondDealCardElement);
      var drawBlackjackElement = document.createElement('p');
      var drawBlackjackText = document.createTextNode(`You have Blackjack, but so does the dealer! Dealer wins...`);
      drawBlackjackElement.appendChild(drawBlackjackText);
      textBox.appendChild(drawBlackjackElement);
      textBox.appendChild(tryAgainElement);
      textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
    }, 1000);
  } else if (fullPointOne == 21) {
      stickButton.disabled = true;
      twistButton.disabled = true;
      stickButton.style = "background-color: #a5a3a3;";
      twistButton.style = "background-color: #a5a3a3;";
      setTimeout(function (){
        firstDealCard.style = "border: 3px solid #fff; background-color: #fff;";
        secondDealCard.style = "border: 3px solid #fff; background-color: #fff;";
        firstDealCardElement.setAttribute('src', dealCardOne);
        firstDealCard.appendChild(firstDealCardElement);
        secondDealCardElement.setAttribute('src', dealCardTwo);
        secondDealCard.appendChild(secondDealCardElement);
        var blackjackElement = document.createElement('p');
        var blackjackText = document.createTextNode(`Blackjack! You Win!`);
        blackjackElement.appendChild(blackjackText);
        textBox.appendChild(blackjackElement);
        textBox.appendChild(playAgainElement);
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1000);
    } else if (dealFullOne == 21) {
      stickButton.disabled = true;
      twistButton.disabled = true;
      stickButton.style = "background-color: #a5a3a3;";
      twistButton.style = "background-color: #a5a3a3;";
      setTimeout(function (){
        firstDealCard.style = "border: 3px solid #fff; background-color: #fff;";
        secondDealCard.style = "border: 3px solid #fff; background-color: #fff;";
        firstDealCardElement.setAttribute('src', dealCardOne);
        firstDealCard.appendChild(firstDealCardElement);
        secondDealCardElement.setAttribute('src', dealCardTwo);
        secondDealCard.appendChild(secondDealCardElement);
        var dealBlackjackElement = document.createElement('p');
        var dealBlackjackText = document.createTextNode(`Dealer has Blackjack. Dealer wins.`);
        dealBlackjackElement.appendChild(dealBlackjackText);
        textBox.appendChild(dealBlackjackElement);
        textBox.appendChild(tryAgainElement);
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1000);
    }

  //Counter determines how many cards on the table.
  var counter = 0;

  var twistOne = cardVariation[c];
  var userPointThree = pointScale[c];
  var fullPointTwo = fullPointOne + userPointThree;
  while (fullPointTwo > 21) {
    if (userPointOne == 11) {
      fullPointTwo -= 10;
      userPointOne = 1;
    } else if (userPointTwo == 11) {
      fullPointTwo -= 10;
      userPointTwo = 1;
    } else if (userPointThree == 11) {
      fullPointTwo -= 10;
      userPointThree = 1;
    } else {
      break;
    }
  }

  var thirdCardElement = document.createElement('img');
  thirdCardElement.setAttribute('src', twistOne);

  var twistTwo = cardVariation[d];
      var userPointFour = pointScale[d];
  var fullPointThree = fullPointTwo + userPointFour;
  while (fullPointThree > 21) {
    if (userPointOne == 11) {
      fullPointThree -= 10;
      userPointOne = 1;
    } else if (userPointTwo == 11) {
      fullPointThree -= 10;
      userPointTwo = 1;
    } else if (userPointThree == 11) {
      fullPointThree -= 10;
      userPointThree = 1;
    } else if (userPointFour == 11) {
      fullPointThree -= 10;
      userPointFour = 1;
    } else {
      break;
    }
  }

  var fourthCardElement = document.createElement('img');
  fourthCardElement.setAttribute('src', twistTwo);

  var twistThree = cardVariation[e];
      var userPointFive = pointScale[e];
  var fullPointFour = fullPointThree + userPointFive;
 while (fullPointFour > 21) {
    if (userPointOne == 11) {
      fullPointFour -= 10;
      userPointOne = 1;
    } else if (userPointTwo == 11) {
      fullPointFour -= 10;
      userPointTwo = 1;
    } else if (userPointThree == 11) {
      fullPointFour -= 10;
      userPointThree = 1;
    } else if (userPointFour == 11) {
      fullPointFour -= 10;
      userPointFour = 1;
    } else if (userPointFive == 11) {
      fullPointFour -= 10;
      userPointFive = 1;
    } else {
      break;
    }
  }

  var fifthCardElement = document.createElement('img');
  fifthCardElement.setAttribute('src', twistThree);

  var dealTwistOne = cardVariation[f];
    var dealPointThree = pointScale[f];
  var dealFullTwo = dealFullOne + dealPointThree;
  while (dealFullTwo > 21) {
    if (dealPointOne == 11) {
      dealFullTwo -= 10;
      dealPointOne = 1;
    } else if (dealPointTwo == 11) {
      dealFullTwo -= 10;
      dealPointTwo = 1;
    } else if (dealPointThree == 11) {
      dealFullTwo -= 10;
      dealPointThree = 1;
    } else {
      break;
    }
  }

  var thirdDealCardElement = document.createElement('img');
  thirdDealCardElement.setAttribute('src', dealTwistOne);

  var dealTwistTwo = cardVariation[g];
    var dealPointFour = pointScale[g];
var dealFullThree = dealFullTwo + dealPointFour;
  while (dealFullThree > 21) {
    if (dealPointOne == 11) {
      dealFullThree -= 10;
      dealPointOne = 1;
    } else if (dealPointTwo == 11) {
      dealFullThree -= 10;
      dealPointTwo = 1;
    } else if (dealPointThree == 11) {
      dealFullThree -= 10;
      dealPointThree = 1;
    } else if (dealPointFour == 11) {
      dealFullThree -= 10;
      dealPointFour = 1;
    } else {
      break;
    }
  }

  var fourthDealCardElement = document.createElement('img');
  fourthDealCardElement.setAttribute('src', dealTwistTwo);

  var dealTwistThree = cardVariation[h];
  var dealPointFive = pointScale[h];
  var dealFullFour = dealFullThree + dealPointFive;
  while (dealFullFour > 21) {
    if (dealPointOne == 11) {
      dealFullFour -= 10;
      dealPointOne = 1;
    } else if (dealPointTwo == 11) {
      dealFullFour -= 10;
      dealPointTwo = 1;
    } else if (dealPointThree == 11) {
      dealFullFour -= 10;
      dealPointThree = 1;
    } else if (dealPointFour == 11) {
      dealFullFour -= 10;
      dealPointFour = 1;
    } else if (dealPointFive == 11) {
      dealFullFour -= 10;
      dealPointFive = 1;
    } else {
      break;
    }
  }

  var fifthDealCardElement = document.createElement('img');
  fifthDealCardElement.setAttribute('src', dealTwistThree);

  //Adds function to twist button.
  twistButton.addEventListener('click', function () {

    if (counter == 0) {

      thirdCard.appendChild(thirdCardElement);
      thirdCard.style = "border: 3px solid #fff; background-color: #fff;";

      if (fullPointTwo > 21) {
            twistButton.disabled = true;
            stickButton.disabled = true;
            stickButton.style = "background-color: #a5a3a3;";
            twistButton.style = "background-color: #a5a3a3;";
            var bustOneElement = document.createElement('p');
            var bustOneText = document.createTextNode(`Bust! You have ${fullPointTwo}. You lose...`);
            bustOneElement.appendChild(bustOneText);
            textBox.appendChild(bustOneElement);
            textBox.appendChild(tryAgainElement);
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
        }
      counter++;
    } else if (counter == 1) {

      fourthCard.appendChild(fourthCardElement);
      fourthCard.style = "border: 3px solid #fff; background-color: #fff;";

      if (fullPointThree > 21) {
        twistButton.disabled = true;
        stickButton.disabled = true;
        stickButton.style = "background-color: #a5a3a3;";
        twistButton.style = "background-color: #a5a3a3;";
        var bustTwoElement = document.createElement('p');
        var bustTwoText = document.createTextNode(`Bust! You have ${fullPointThree}. You lose...`);
        bustTwoElement.appendChild(bustTwoText);
        textBox.appendChild(bustTwoElement);
        textBox.appendChild(tryAgainElement);
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }
      counter++;
    } else if (counter == 2) {

      fifthCard.appendChild(fifthCardElement);
      fifthCard.style = "border: 3px solid #fff; background-color: #fff;";

      twistButton.disabled = true;
      twistButton.style = "background-color: #a5a3a3;";
      if (fullPointFour > 21) {
        stickButton.disabled = true;
        stickButton.style = "background-color: #a5a3a3;";
        var bustThreeElement = document.createElement('p');
        var bustThreeText = document.createTextNode(`Bust! You have ${fullPointFour}. You lose...`);
        bustThreeElement.appendChild(bustThreeText);
        textBox.appendChild(bustThreeElement);
        textBox.appendChild(tryAgainElement);
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }
      counter++;
    }
  });


  stickButton.addEventListener('click', function () {
    stickButton.disabled = true;
    twistButton.disabled = true;
    stickButton.style = "background-color: #a5a3a3;";
    twistButton.style = "background-color: #a5a3a3;";

    firstDealCard.style = "border: 3px solid #fff; background-color: #fff;";
    secondDealCard.style = "border: 3px solid #fff; background-color: #fff;";
    firstDealCardElement.setAttribute('src', dealCardOne);
    firstDealCard.appendChild(firstDealCardElement);
    secondDealCardElement.setAttribute('src', dealCardTwo);
    secondDealCard.appendChild(secondDealCardElement);

    if (dealFullOne < 17) {
      setTimeout(function (){
        thirdDealCard.appendChild(thirdDealCardElement);
        thirdDealCard.style = "border: 3px solid #fff; background-color: #fff;";
        if (dealFullTwo > 21) {
          var dealBustOneElement = document.createElement('p');
          var dealBustOneText = document.createTextNode(`Dealer bust at ${dealFullTwo}. You win!`);
          dealBustOneElement.appendChild(dealBustOneText);
          textBox.appendChild(dealBustOneElement);
          textBox.appendChild(playAgainElement);
          setTimeout(function (){
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
          }, 1500);
        } else if (dealFullTwo < 17) {
          setTimeout(function (){
            fourthDealCard.appendChild(fourthDealCardElement);
            fourthDealCard.style = "border: 3px solid #fff; background-color: #fff;";
            if (dealFullThree > 21) {
              var dealBustTwoElement = document.createElement('p');
              var dealBustTwoText = document.createTextNode(`Dealer bust at ${dealFullThree}. You   win!`);
              dealBustTwoElement.appendChild(dealBustTwoText);
              textBox.appendChild(dealBustTwoElement);
              textBox.appendChild(playAgainElement);
              setTimeout(function (){
                textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
              }, 1500);
            } else if (dealFullThree < 17) {
              setTimeout(function (){
                fifthDealCard.appendChild(fifthDealCardElement);
                fifthDealCard.style = "border: 3px solid #fff; background-color: #fff;";
                if (dealFullFour > 21) {
                  var dealBustThreeElement = document.createElement('p');
                  var dealBustThreeText = document.createTextNode(`Dealer bust at ${dealFullFour}. You  win!`);
                  dealBustThreeElement.appendChild(dealBustThreeText);
                  textBox.appendChild(dealBustThreeElement);
                  textBox.appendChild(playAgainElement);
                  setTimeout(function (){
                    textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
                  }, 1500);
                } else if ((counter == 3 && dealFullFour < fullPointFour)) {
                  var fiveCardWinElement = document.createElement('p');
                  var fiveCardWinText = document.createTextNode(`You have ${fullPointFour} with a five card trick. Dealer has ${dealFullFour} with a five card trick. You win!`);
                  fiveCardWinElement.appendChild(fiveCardWinText);
                  textBox.appendChild(fiveCardWinElement);
                  textBox.appendChild(playAgainElement);
                  setTimeout(function (){
                    textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
                  }, 1500);
                } else if (counter == 3) {
                  var fiveCardLoseElement = document.createElement('p');
                  var fiveCardLoseText = document.createTextNode(`You have ${fullPointFour} with a five card trick. Dealer has ${dealFullFour} with a five card trick. You lose...`);
                  fiveCardLoseElement.appendChild(fiveCardLoseText);
                  textBox.appendChild(fiveCardLoseElement);
                  textBox.appendChild(tryAgainElement);
                  setTimeout(function (){
                    textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
                  }, 1500);
                } else if (counter == 2) {
                  var dealFiveCardElement = document.createElement('p');
                  var dealFiveCardText = document.createTextNode(`You have ${fullPointThree}. Dealer has ${dealFullFour} with a five card trick. You lose...`);
                  dealFiveCardElement.appendChild(dealFiveCardText);
                  textBox.appendChild(dealFiveCardElement);
                  textBox.appendChild(tryAgainElement);
                  setTimeout(function (){
                    textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
                  }, 1500);
                } else if (counter == 1) {
                  var dealFiveCardTwoElement = document.createElement('p');
                  var dealFiveCardTwoText = document.createTextNode(`You have ${fullPointTwo}. Dealer has ${dealFullFour} with a five card trick. You lose...`);
                  dealFiveCardTwoElement.appendChild(dealFiveCardTwoText);
                  textBox.appendChild(dealFiveCardTwoElement);
                  textBox.appendChild(tryAgainElement);
                  setTimeout(function (){
                    textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
                  }, 1500);
                } else if (counter == 0) {
                  var dealFiveCardThreeElement = document.createElement('p');
                  var dealFiveCardThreeText = document.createTextNode(`You have ${fullPointOne}. Dealer has ${dealFullFour} with a five card trick. You lose...`);
                  dealFiveCardThreeElement.appendChild(dealFiveCardThreeText);
                  textBox.appendChild(dealFiveCardThreeElement);
                  textBox.appendChild(tryAgainElement);
                  setTimeout(function (){
                    textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
                  }, 1500);
                }
              }, 1000);
            } else if (counter == 0 && dealFullThree < fullPointOne) {
              var youWinOneElement = document.createElement('p');
              var youWinOneText = document.createTextNode(`You have ${fullPointOne}. Dealer sticks with ${dealFullThree}. You win!`);
              youWinOneElement.appendChild(youWinOneText);
              textBox.appendChild(youWinOneElement);
              textBox.appendChild(playAgainElement);
              setTimeout(function (){
                textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
              }, 1500);
            } else if (counter == 0) {
              var youLoseOneElement = document.createElement('p');
              var youLoseOneText = document.createTextNode(`You have ${fullPointOne}. Dealer sticks with ${dealFullThree}. You lose...`);
              youLoseOneElement.appendChild(youLoseOneText);
              textBox.appendChild(youLoseOneElement);
              textBox.appendChild(tryAgainElement);
              setTimeout(function (){
                textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
              }, 1500);
            } else if (counter == 1 && dealFullThree < fullPointTwo) {
              var youWinTwoElement = document.createElement('p');
              var youWinTwoText = document.createTextNode(`You have ${fullPointTwo}. Dealer sticks with ${dealFullThree}. You win!`);
              youWinTwoElement.appendChild(youWinTwoText);
              textBox.appendChild(youWinTwoElement);
              textBox.appendChild(playAgainElement);
              setTimeout(function (){
                textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
              }, 1500);
            } else if (counter == 1) {
              var youLoseTwoElement = document.createElement('p');
              var youLoseTwoText = document.createTextNode(`You have ${fullPointTwo}. Dealer sticks with ${dealFullThree}. You lose...`);
              youLoseTwoElement.appendChild(youLoseTwoText);
              textBox.appendChild(youLoseTwoElement);
              textBox.appendChild(tryAgainElement);
              setTimeout(function (){
                textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
              }, 1500);
            } else if (counter == 2 && dealFullThree < fullPointThree) {
              var youWinThreeElement = document.createElement('p');
              var youWinThreeText = document.createTextNode(`You have ${fullPointThree}. Dealer sticks with ${dealFullThree}. You win!`);
              youWinThreeElement.appendChild(youWinThreeText);
              textBox.appendChild(youWinThreeElement);
              textBox.appendChild(playAgainElement);
              setTimeout(function (){
                textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
              }, 1500);
            } else if (counter == 2) {
              var youLoseThreeElement = document.createElement('p');
              var youLoseThreeText = document.createTextNode(`You have ${fullPointThree}. Dealer sticks with ${dealFullThree}. You lose...`);
              youLoseThreeElement.appendChild(youLoseThreeText);
              textBox.appendChild(youLoseThreeElement);
              textBox.appendChild(tryAgainElement);
              setTimeout(function (){
                textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
              }, 1500);
            } else {
              var fiveCardFourElement = document.createElement('p');
              var fiveCardFourText = document.createTextNode(`You have ${fullPointFour} with a 5 card trick! Dealer sticks with ${dealFullThree}. You win!`);
              fiveCardFourElement.appendChild(fiveCardFourText);
              textBox.appendChild(fiveCardFourElement);
              textBox.appendChild(playAgainElement);
              setTimeout(function (){
                textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
              }, 1500);
            }
          }, 1000);
        } else if (counter == 0 && dealFullTwo < fullPointOne) {
          var youWinFourElement = document.createElement('p');
          var youWinFourText = document.createTextNode(`You have ${fullPointOne}. Dealer sticks with ${dealFullTwo}. You win!`);
          youWinFourElement.appendChild(youWinFourText);
          textBox.appendChild(youWinFourElement);
          textBox.appendChild(playAgainElement);
          setTimeout(function (){
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
          }, 1500);
        } else if (counter == 0) {
          var youLoseFourElement = document.createElement('p');
          var youLoseFourText = document.createTextNode(`You have ${fullPointOne}. Dealer sticks with ${dealFullTwo}. You lose...`);
          youLoseFourElement.appendChild(youLoseFourText);
          textBox.appendChild(youLoseFourElement);
          textBox.appendChild(tryAgainElement);
          setTimeout(function (){
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
          }, 1500);
        } else if (counter == 1 && dealFullTwo < fullPointTwo) {
          var youWinFiveElement = document.createElement('p');
          var youWinFiveText = document.createTextNode(`You have ${fullPointTwo}. Dealer sticks with ${dealFullTwo}. You win!`);
          youWinFiveElement.appendChild(youWinFiveText);
          textBox.appendChild(youWinFiveElement);
          textBox.appendChild(playAgainElement);
          setTimeout(function (){
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
          }, 1500);
        } else if (counter == 1) {
          var youLoseFiveElement = document.createElement('p');
          var youLoseFiveText = document.createTextNode(`You have ${fullPointTwo}. Dealer sticks with ${dealFullTwo}. You lose...`);
          youLoseFiveElement.appendChild(youLoseFiveText);
          textBox.appendChild(youLoseFiveElement);
          textBox.appendChild(tryAgainElement);
          setTimeout(function (){
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
          }, 1500);
        } else if (counter == 2 && dealFullTwo < fullPointThree) {
          var youWinSixElement = document.createElement('p');
          var youWinSixText = document.createTextNode(`You have ${fullPointThree}. Dealer sticks with ${dealFullTwo}. You win!`);
          youWinSixElement.appendChild(youWinSixText);
          textBox.appendChild(youWinSixElement);
          textBox.appendChild(playAgainElement);
          setTimeout(function (){
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
          }, 1500);
        } else if (counter == 2) {
          var youLoseSixElement = document.createElement('p');
          var youLoseSixText = document.createTextNode(`You have ${fullPointThree}. Dealer sticks with ${dealFullTwo}. You lose...`);
          youLoseSixElement.appendChild(youLoseSixText);
          textBox.appendChild(youLoseSixElement);
          textBox.appendChild(tryAgainElement);
          setTimeout(function (){
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
          }, 1500);
        } else {
          var fiveCardFiveElement = document.createElement('p');
          var fiveCardFiveText = document.createTextNode(`You have ${fullPointFour} with a 5 card trick! Dealer sticks with ${dealFullTwo}. You win!`);
          fiveCardFiveElement.appendChild(fiveCardFiveText);
          textBox.appendChild(fiveCardFiveElement);
          textBox.appendChild(playAgainElement);
          setTimeout(function (){
            textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
          }, 1500);
        }
      }, 1000);
    } else if (counter == 0 && dealFullOne < fullPointOne) {
      var youWinSevenElement = document.createElement('p');
      var youWinSevenText = document.createTextNode(`You have ${fullPointOne}. Dealer sticks with ${dealFullOne}. You win!`);
      youWinSevenElement.appendChild(youWinSevenText);
      textBox.appendChild(youWinSevenElement);
      textBox.appendChild(playAgainElement);
      setTimeout(function (){
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1500);
    } else if (counter == 0) {
      var youLoseSevenElement = document.createElement('p');
      var youLoseSevenText = document.createTextNode(`You have ${fullPointOne}. Dealer sticks with ${dealFullOne}. You lose...`);
      youLoseSevenElement.appendChild(youLoseSevenText);
      textBox.appendChild(youLoseSevenElement);
      textBox.appendChild(tryAgainElement);
      setTimeout(function (){
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1500);
    } else if (counter == 1 && dealFullOne < fullPointTwo) {
      var youWinEightElement = document.createElement('p');
      var youWinEightText = document.createTextNode(`You have ${fullPointTwo}. Dealer sticks with ${dealFullOne}. You win!`);
      youWinEightElement.appendChild(youWinEightText);
      textBox.appendChild(youWinEightElement);
      textBox.appendChild(playAgainElement);
      setTimeout(function (){
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1500);
    } else if (counter == 1) {
      var youLoseEightElement = document.createElement('p');
      var youLoseEightText = document.createTextNode(`You have ${fullPointTwo}. Dealer sticks with ${dealFullOne}. You lose...`);
      youLoseEightElement.appendChild(youLoseEightText);
      textBox.appendChild(youLoseEightElement);
      textBox.appendChild(tryAgainElement);
      setTimeout(function (){
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1500);
    } else if (counter == 2 && dealFullOne < fullPointThree) {
      var youWinNineElement = document.createElement('p');
      var youWinNineText = document.createTextNode(`You have ${fullPointThree}. Dealer sticks with ${dealFullOne}. You win!`);
      youWinNineElement.appendChild(youWinNineText);
      textBox.appendChild(youWinNineElement);
      textBox.appendChild(playAgainElement);
      setTimeout(function (){
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1500);
    } else if (counter == 2) {
      var youLoseNineElement = document.createElement('p');
      var youLoseNineText = document.createTextNode(`You have ${fullPointThree}. Dealer sticks with ${dealFullOne}. You lose...`);
      youLoseNineElement.appendChild(youLoseNineText);
      textBox.appendChild(youLoseNineElement);
      textBox.appendChild(tryAgainElement);
      setTimeout(function (){
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1500);
    } else {
      var fiveCardSixElement = document.createElement('p');
      var fiveCardSixText = document.createTextNode(`You have ${fullPointFour} with a 5 card trick! Dealer sticks with ${dealFullOne}. You win!`);
      fiveCardSixElement.appendChild(fiveCardSixText);
      textBox.appendChild(fiveCardSixElement);
      textBox.appendChild(playAgainElement);
      setTimeout(function (){
        textPosition.parentNode.insertBefore(textBox, textPosition.nextSibling);
      }, 1500);
    }
  });
});

}
