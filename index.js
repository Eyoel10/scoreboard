let homeScore = 0
let guestScore = 0
let periodScore = 0
let foulHomeScore = 0
let foulGuestScore = 0
let minute = 0
let second = 0
let called = 0
const myInterval = setInterval(displayTime, 100)

let homeScrEl = document.getElementById("scr-home")
let guestScrEl = document.getElementById("scr-guest")
let periodScrEl = document.getElementById("scr-per")
let foulHScrEl = document.getElementById("foul-home")
let foulGScrEl = document.getElementById("foul-guest")
let timeEl = document.getElementById("scr-time")


function add1h() {
    homeScore += 1
    homeScrEl.textContent = homeScore
    compare()
}

function add2h() {
    homeScore += 2
    homeScrEl.textContent = homeScore
    compare()
}

function add3h() {
    homeScore += 3
    homeScrEl.textContent = homeScore
    compare()
}

function add1g() {
    guestScore += 1
    guestScrEl.textContent = guestScore
    compare()
}

function add2g() {
    guestScore += 2
    guestScrEl.textContent = guestScore
    compare()
}

function add3g() {
    guestScore += 3
    guestScrEl.textContent = guestScore
    compare()
}

function add1fh() {
    foulHomeScore += 1
    foulHScrEl.textContent = foulHomeScore
}

function add1fg() {
    foulGuestScore += 1
    foulGScrEl.textContent = foulGuestScore
}

function add1p() {
    periodScore += 1
    periodScrEl.textContent = periodScore
}

function compare() {
    if (homeScore > guestScore) {
        homeScrEl.style.color = "#F9FF6D"
        guestScrEl.style.color = "#F94F6D"
    } else if (guestScore > homeScore) {
        homeScrEl.style.color = "#F94F6D"
        guestScrEl.style.color = "#F9FF6D"
    } else {
        homeScrEl.style.color = "#F94F6D"
        guestScrEl.style.color = "#F94F6D"
    }
}

function reset() {
    homeScore = 0
    guestScore = 0
    periodScore = 0
    foulHomeScore = 0
    foulGuestScore = 0
    second = 0
    minute = 0
    homeScrEl.textContent = homeScore
    guestScrEl.textContent = guestScore
    periodScrEl.textContent = periodScore
    foulHScrEl.textContent = foulHomeScore
    foulGScrEl.textContent = foulGuestScore
    compare()
    timer()
}

function resetTime() {
    called = 0
    second = 0
    minute = 0
    timeEl.textContent = minute +":"+ second
}

function displayTime() {
    if (called === 1) {
        second += 1
        if (second%60 === 0) {
            second = 0
            minute += 1
        }   
        timeEl.textContent = minute +":"+ second
    }
}

function timer() {
    called = 1
}