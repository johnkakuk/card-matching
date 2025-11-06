import "./styles/index.scss";
// Generate asset URLs via import.meta.url (webpack 5 compatible)
const successSnd = new URL('./sound/success.mp3', import.meta.url).toString();
const errorSnd = new URL('./sound/error.mp3', import.meta.url).toString();
const victorySnd = new URL('./sound/victory.mp3', import.meta.url).toString();
const defeatSnd = new URL('./sound/defeat.mp3', import.meta.url).toString();
const volumeIcon = new URL('./img/volume.svg', import.meta.url).toString();
const cardSnd = new URL('./sound/card.mp3', import.meta.url).toString();
// AudioPool: enable overlapping/restarting sounds
class AudioPool {
    constructor(src, size = 4) {
        this.idx = 0;
        this.nodes = Array.from({ length: size }, () => {
            const a = new Audio(src);
            a.preload = 'auto';
            return a;
        });
    }
    setMuted(muted) {
        this.nodes.forEach(a => (a.muted = muted));
    }
    play() {
        const a = this.nodes[this.idx];
        this.idx = (this.idx + 1) % this.nodes.length;
        try {
            a.currentTime = 0;
        }
        catch (_) { }
        a.play().catch(() => { });
    }
    reset() {
        this.nodes.forEach(a => {
            try {
                a.pause();
                a.currentTime = 0;
            }
            catch (_) { }
        });
        this.idx = 0;
    }
}
const SND_SUCCESS = new AudioPool(successSnd, 4);
const SND_ERROR = new AudioPool(errorSnd, 2);
const SND_VICTORY = new AudioPool(victorySnd, 1);
const SND_DEFEAT = new AudioPool(defeatSnd, 1);
const SND_CARD = new AudioPool(cardSnd, 6);
function resetSoundPools() {
    SND_SUCCESS.reset();
    SND_ERROR.reset();
}
const suits = ["&clubs;", "&diams;", "&hearts;", "&spades;"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
class Card {
    constructor(_rank, _suit) {
        this.rank = _rank;
        this.suit = _suit;
    }
}
// Query UI elements
const cards = document.querySelectorAll(".card");
const cardRanks = document.querySelectorAll(".card .rank:first-of-type");
const cardRanks2 = document.querySelectorAll(".card .rank:nth-of-type(2)");
const dealButton = document.querySelector("#deal");
const triesRemainingLabel = document.querySelector("#triesRemaining");
const outcome = document.querySelector(".outcome");
const button = document.querySelector("button");
// Wire up asset URLs so they get emitted by the bundler
const muteImg = document.querySelector("#muteBtn img");
if (muteImg)
    muteImg.src = volumeIcon;
const aSuccessEl = document.getElementById("s-success");
const aErrorEl = document.getElementById("s-error");
const aVictoryEl = document.getElementById("s-victory");
const aDefeatEl = document.getElementById("s-defeat");
if (aSuccessEl)
    aSuccessEl.src = successSnd;
if (aErrorEl)
    aErrorEl.src = errorSnd;
if (aVictoryEl)
    aVictoryEl.src = victorySnd;
if (aDefeatEl)
    aDefeatEl.src = defeatSnd;
// Audio elements
const aSuccess = aSuccessEl;
const aError = aErrorEl;
const aVictory = aVictoryEl;
const aDefeat = aDefeatEl;
const allAudio = [aSuccess, aError, aVictory, aDefeat].filter(Boolean);
// Mute toggle
const muteBtn = document.getElementById("muteBtn");
let muted = false;
function applyMuteState() {
    allAudio.forEach(a => (a.muted = muted));
    SND_SUCCESS.setMuted(muted);
    SND_ERROR.setMuted(muted);
    SND_VICTORY.setMuted(muted);
    SND_DEFEAT.setMuted(muted);
    SND_CARD.setMuted(muted);
    if (muteBtn instanceof HTMLElement) {
        muteBtn.classList.toggle("muted", muted);
        muteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
    }
}
function playSound(kind) {
    if (muted)
        return;
    switch (kind) {
        case "success":
            SND_SUCCESS.play();
            break;
        case "error":
            SND_ERROR.play();
            break;
        case "victory":
            SND_VICTORY.play();
            break;
        case "defeat":
            SND_DEFEAT.play();
            break;
    }
}
if (muteBtn) {
    muteBtn.addEventListener("click", () => {
        muted = !muted;
        applyMuteState();
    });
}
// Global variables
let deck = [];
let hand = [];
let triesRemaining = 3;
let matches = 0;
let lastClicked = [];
let justClicked = [];
function setCardsLocked(locked) {
    cards.forEach(el => (el.style.pointerEvents = locked ? 'none' : ''));
}
function revealCardsSequentially(nodeList) {
    const arr = Array.from(nodeList);
    // Ensure every card starts hidden so we always animate into view
    arr.forEach((el) => el.classList.add("hidden"));
    let i = 0;
    const revealNext = () => {
        if (i >= arr.length)
            return;
        const card = arr[i++];
        const onEnd = () => {
            card.removeEventListener("transitionend", onEnd);
            revealNext();
        };
        card.addEventListener("transitionend", onEnd, { once: true });
        // Force reflow to make sure the transition triggers when removing .hidden
        card.offsetWidth;
        SND_CARD.play();
        card.classList.remove("hidden");
    };
    revealNext();
}
// Primary functions
function buildDeck() {
    for (const suit of suits) {
        for (const rank of ranks) {
            const card = new Card(rank, suit);
            deck.push(card);
        }
    }
}
function shuffle(deckToShuffle) {
    // Fisher-Yates shuffle
    let currentIndex = deckToShuffle.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [deckToShuffle[currentIndex], deckToShuffle[randomIndex]] = [deckToShuffle[randomIndex], deckToShuffle[currentIndex]];
    }
}
function newHand() {
    // Reset
    triesRemaining = 3;
    matches = 0;
    if (triesRemainingLabel instanceof Element)
        triesRemainingLabel.innerHTML = `Tries remaining: ${triesRemaining.toString()}`;
    // Ensure card dealing sound pool is fresh for each hand
    SND_CARD.reset();
    SND_VICTORY.reset();
    SND_DEFEAT.reset();
    hand.forEach(card => {
        deck.push(card);
    });
    hand.length = 0;
    outcome === null || outcome === void 0 ? void 0 : outcome.classList.add("hidden");
    if (button)
        button.textContent = "Deal Again";
    shuffle(deck);
    // Get initial 3 cards from deck
    while (hand.length < 3) {
        // Get a card from the deck
        const card = deck.pop();
        // Push automatically if no items in hand
        if (hand.length == 0 && card instanceof Card)
            hand.push(card);
        else {
            // Check the card against the hand. If there are already two of the same rank, move it to the bottom of the deck.
            let existingOfRank = 0;
            hand.forEach(cardInHand => {
                // Increment existingOfRank if there's already a card of this rank
                if (card && cardInHand.rank == card.rank)
                    existingOfRank++;
            });
            // If there are more than 2 of this rank, put it on the bottom of the deck
            if (card && existingOfRank == 2)
                deck.unshift(card);
            // If not, move the card to hand and advance the index
            else if (card)
                hand.push(card);
        }
    }
    // Get 3 other cards of same rank from deck (first occurring)
    hand.forEach(cardInHand => {
        const rank = cardInHand.rank;
        const match = deck.findIndex(card => card.rank == rank);
        if (match !== -1) {
            // Needs brackets because .splice() returns an array?
            const [card] = deck.splice(match, 1);
            hand.push(card);
        }
    });
    // Randomize order
    shuffle(hand);
    // Send cards in hand to the DOM
    hand.forEach((card, i) => {
        var _a;
        cards[i].querySelectorAll(".card-front .suit").forEach(e => e.remove());
        cards[i].classList.remove("red");
        cardRanks[i].innerHTML = hand[i].rank;
        cardRanks2[i].innerHTML = hand[i].rank;
        // Add suit symbols
        let value;
        if (["J", "Q", "K"].includes(card.rank))
            value = 10;
        else if (card.rank == "A")
            value = 1;
        else
            value = parseInt(card.rank);
        for (let ind = 0; ind < value; ind++) {
            const el = document.createElement("span");
            el.className = "suit";
            el.innerHTML = card.suit;
            (_a = cards[i].querySelector(".card-front")) === null || _a === void 0 ? void 0 : _a.appendChild(el);
        }
        // Color control
        if (["&diams;", "&hearts;"].includes(card.suit))
            cards[i].classList.add("red");
    });
    // Prepare card elements and reveal sequentially
    cards.forEach(card => {
        // Always start in a flipped state (back showing)
        card.classList.add("flipped");
        // Ensure we have a fresh click handler each deal
        card.removeEventListener("click", flipCard);
        card.addEventListener("click", flipCard);
        // Start hidden; the sequential reveal will remove this class one-by-one
        card.classList.add("hidden");
    });
    // Reveal one card at a time using transitionend chaining
    revealCardsSequentially(cards);
}
function flipCard(event) {
    var _a, _b, _c;
    // If cards are locked (during animations), ignore clicks
    if (((_a = cards[0]) === null || _a === void 0 ? void 0 : _a.style.pointerEvents) === 'none')
        return;
    // Run styling and remove flipCard listener
    if (event.currentTarget instanceof Element) {
        event.currentTarget.classList.toggle("flipped");
        event.currentTarget.removeEventListener("click", flipCard);
    }
    // If something has already been clicked, assign it to lastClicked
    if (justClicked.length == 1)
        lastClicked[0] = justClicked[0];
    // Assign the clicked element to justClicked
    justClicked.length = 0;
    if (event.currentTarget instanceof Element)
        justClicked.push(event.currentTarget);
    // Only run if 2 things have been clicked
    if (lastClicked.length == 1) {
        // Lock board while resolving match/mismatch
        setCardsLocked(true);
        // If match:
        if (((_b = justClicked[0].querySelector(".rank")) === null || _b === void 0 ? void 0 : _b.textContent) == ((_c = lastClicked[0].querySelector(".rank")) === null || _c === void 0 ? void 0 : _c.innerHTML)) {
            playSound("success");
            justClicked[0].addEventListener("transitionend", () => {
                matches++;
                if (matches == 3)
                    victory();
                justClicked.length = 0;
                lastClicked.length = 0;
                resetSoundPools();
                setCardsLocked(false);
            }, { once: true });
        }
        else {
            // If no match:
            playSound("error");
            justClicked[0].addEventListener("transitionend", () => {
                setTimeout(() => {
                    // Hold things up for quarter second for better UX
                    triesRemaining--;
                    if (triesRemainingLabel instanceof Element)
                        triesRemainingLabel.innerHTML = `Tries remaining: ${triesRemaining.toString()}`;
                    if (triesRemaining == 0)
                        defeat();
                    justClicked[0].classList.add("flipped");
                    lastClicked[0].classList.add("flipped");
                    justClicked[0].addEventListener("click", flipCard);
                    lastClicked[0].addEventListener("click", flipCard);
                    justClicked.length = 0;
                    lastClicked.length = 0;
                    resetSoundPools();
                    setCardsLocked(false);
                }, 250);
            }, { once: true });
        }
    }
}
function defeat() {
    outcome === null || outcome === void 0 ? void 0 : outcome.classList.remove("hidden");
    if (outcome)
        outcome.textContent = "You lose";
    playSound("defeat");
    cards.forEach(card => {
        card.classList.add("flipped");
        card.classList.add("hidden");
    });
}
function victory() {
    outcome === null || outcome === void 0 ? void 0 : outcome.classList.remove("hidden");
    if (outcome)
        outcome.textContent = "You win!";
    playSound("victory");
    cards.forEach(card => {
        card.classList.add("flipped");
        card.classList.add("hidden");
    });
}
(() => {
    // Boot
    buildDeck();
    // Attach event listener to deal button
    if (dealButton instanceof Element)
        dealButton.addEventListener("click", newHand);
    applyMuteState();
})();
/* Session 1:
 * 1. DONE Attach event listeners to buttons and cards (hidden and flipped at start)
 * 2. DONE On click deal:
 *      1. DONE Assign rank and suits to cards
 *      2. DONE Remove hidden from cards. Transition to place, still flipped
 * 3. DONE On click card:
 *      1. DONE Remove flipped from card. Transition to normal
 *      2. DONE Remove event listener so it only flips once
 * 4. DONE On click reset:
 *      1. DONE Add flipped to cards. Transition to flipped
 *      2. DONE Add hidden to cards. Transition off screen
 *
 * Session 2:
 * 1. DONE Rebuild newHand to deliver 3 pairs instead of 6 random
 * 2. DONE Rebuild tries remaining to only subtract 1 try IF the user doesn't get a match
 * 3. DONE Add victory method if user flips all cards
 * 4. DONE Add method to run every two flips and, if they don't mach, subtract a try + re-flip + readd click/flip event listeners.
 *
 * Session 3:
 * 1. Create card styling
 * 2. Create card dealing/flip animations
 * 3. Create victory/defeat animations
 */ 
