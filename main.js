let allCards = document.getElementsByClassName('box');
let allFronts = document.getElementsByClassName('front');
let allBacks = document.getElementsByClassName('back');
let movesText = document.getElementById('moves');
let clickCount = 0, cardChosen=0;
let orders = [], chosenCardID = [], chosenCard = [], chosenCardCopy = [];

for(let i = 1; i <= allCards.length; i++){
    let num = Math.ceil(Math.random() * allCards.length);
    if(orders.indexOf(num) < 0){
        orders.push(num);
    }
    else{
        i--;
    }
}
for(let i = 0; i < allBacks.length; i++){
    allCards[i].style.order = orders[i];
}
function init(){
    for(let i = 0; i < allFronts.length; i++){
        allFronts[i].addEventListener('click',flipCard);
    }
    setTimeout(showAll, 1000);
    setTimeout(removeAll, 5000);
}
function flipCard(event){
    // console.log(chosenCard);
    clickCount++;
    event.target.previousElementSibling.classList.add('rotateBack');
    event.target.classList.add('rotate');
    movesText.textContent = clickCount;
    chosenCardID[cardChosen] = event.target.previousElementSibling.id;
    chosenCard[cardChosen] = event.target;
    chosenCardCopy[cardChosen] = chosenCard[cardChosen];
    cardChosen++;
    if(cardChosen === 2){
        cardChosen = 0;
        setTimeout(checkForMatch,800);
    }
}
function checkForMatch(){
    if(chosenCardID[0] === chosenCardID[1]){
    }
    else{
        removeClass();
    }
}
function removeClass(){
    chosenCard[0].classList.remove('rotate');
    chosenCard[0].previousElementSibling.classList.remove('rotateBack')
    chosenCard[1].classList.remove('rotate');
    chosenCard[1].previousElementSibling.classList.remove('rotateBack')

}
function showAll(){
    for(let i = 0; i < allBacks.length; i++){
        allBacks[i].classList.add('rotateBack');
        allFronts[i].classList.add('rotate');
    }
}
function removeAll(){
    for(let i = 0; i < allBacks.length; i++){
        allBacks[i].classList.remove('rotateBack');
        allFronts[i].classList.remove('rotate');
    }
}
init();
