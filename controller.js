export class Controller {
    #model;

    constructor(model) {
        this.#model = model;
        this.#model.addEventListener("loss", () => this.#handleLoss());
        this.#model.addEventListener("win", () => this.#handleWin());
    }

    #doAsync() {
        return new Promise(r => setTimeout(r, 0));
    }

    start() {
        this.#doAsync().then(() => this.#model.start());
    }

    guessLetter(letter) {
        if (this.#model.getLettersNotGuessed().includes(letter) === false) {
            alert("Controller error: Invalid guess.");
            return;
        }

        this.#doAsync().then(() => this.#model.guessLetter(letter));
    }

    #handleLoss() {
        console.log("Game lost.");
    }

    #handleWin() {
        console.log("Game won.");
    }
}