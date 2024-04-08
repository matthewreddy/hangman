export class Model extends EventTarget {
    #word;
    #guesses;
    #lettersNotGuessed;
    #correctLetters;
    #incorrectLetters;
    #lettersLeft;
    #revealer;

    constructor() {
        super();

        this.#guesses = 11;
        this.#lettersNotGuessed = ["A", "B", "C", "D", "E", "F", "G", "H",
                                    "I", "J", "K", "L", "M", "N", "O", "P", 
                                    "Q", "R", "S", "T", "U", "V", "W", "X",
                                    "Y", "Z"];
        this.#correctLetters = [];
        this.#incorrectLetters = [];
    }

    start() {
        this.dispatchEvent(new Event("start"));

        this.#word = "ABCDEF";
        this.#lettersLeft = this.#word.split("");
        this.#revealer = "";
        for (let i = 0; i < this.#word.length; i++) {
            this.#revealer += "_";
        }
    }

    guessLetter(letter) {
        let correct;

        if (this.#word.includes(letter)) {
            this.#correctLetters.push(letter);
            this.#lettersLeft.splice(this.#lettersLeft.indexOf(letter), 1);
            correct = true;
            let revealerUpdate = "";

            for (let i = 0; i < this.#word.length; i++) {
                if (this.#word[i] === letter && this.#revealer[i] === "_") {
                    // reveal the guessed letter
                    revealerUpdate += letter.toUpperCase();
                } else if (this.#revealer[i] !== "_") {
                    // letter previously guessed
                    revealerUpdate += this.#revealer[i];
                } else {
                    // letter not yet guessed
                    revealerUpdate += "_";
                }
            }

            this.#revealer = revealerUpdate;

        } else {
            this.#incorrectLetters.push(letter);
            this.#guesses--;
            correct = false;
        }

        this.dispatchEvent(new CustomEvent("guess", {detail: {
            letter: letter,
            correct: correct,
        }}));

        this.#lettersNotGuessed.splice(this.#lettersNotGuessed.indexOf(letter), 1);

        if (this.#guesses <= 0) {
            this.dispatchEvent(new Event("loss"));
        }

        if (this.#lettersLeft.length === 0) {
            this.dispatchEvent(new Event("win"));
        }

    }

    getWord() {
        return this.#word;
    }

    getGuesses() {
        return this.#guesses;
    }

    getLettersNotGuessed() {
        return this.#lettersNotGuessed;
    }

    getCorrectLetters() {
        return this.#correctLetters;
    }

    getIncorrectLetters() {
        return this.#incorrectLetters;
    }

    getLettersLeft() {
        return this.#lettersLeft;
    }

    getRevealer() {
        return this.#revealer;
    }
}