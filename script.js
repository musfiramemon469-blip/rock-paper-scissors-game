let userScore = 0;
let compScore = 0;

const emojiMap = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

function playGame(userChoice) {
    // Generate computer choice
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Display choices made
    document.getElementById('choices-made').innerHTML = 
        `You chose ${emojiMap[userChoice]} vs Computer chose ${emojiMap[computerChoice]}`;

    const resultElement = document.getElementById('round-result');

    // Determine winner
    if (userChoice === computerChoice) {
        resultElement.textContent = "It's a Tie!";
        resultElement.className = "result-message tie";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        document.getElementById('user-score').textContent = userScore;
        resultElement.textContent = "You Win this round!";
        resultElement.className = "result-message win";
    } else {
        compScore++;
        document.getElementById('comp-score').textContent = compScore;
        resultElement.textContent = "Computer Wins this round!";
        resultElement.className = "result-message lose";
    }
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = compScore;
    document.getElementById('choices-made').textContent = "Choose your weapon!";
    document.getElementById('round-result').textContent = "";
    document.getElementById('round-result').className = "result-message";
}