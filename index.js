const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords = ['swarnim','athrav','keshav','raj','kashish','ankur','anisha','rajeev','mona','aadarsh','nikki','chhoti','jai','kunal','chiku','nannu','vikash','neelam','tanupriya','anupriya','kishu','soumya','jassi','ashmita','megha','jayant','rajeshwer','khushbu','pihu','chandan','sarika'];

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length)
    let newTempWord = sWords[ranNum];
    return newTempWord;
}

const scrambleWords = (arr) => {
    for (let i = arr.length-1; i>0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

btn.addEventListener('click', () => {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the Word: ${randWords}`;
    } else {
        let tempWords = guess.value;
        if(tempWords === newWords){
            play = false;
            msg.innerHTML = `Awesome it's Correct. It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }else{
            msg.innerHTML = `Sorry its Wrong. Plz Try Again ${randWords}`;
        }
    }
})


