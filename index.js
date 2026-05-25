let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function addOnePointHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function addTwoPointsHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function addThreePointsHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore; 
}

function addOnePointGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function addTwoPointsGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function addThreePointsGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore; 
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    
}