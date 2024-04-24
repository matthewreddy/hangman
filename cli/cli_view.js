export class CLIView {
    #model;
    #controller;

    constructor(model, controller) {
        this.#model = model;
        this.#controller = controller;
    }

    render(render_div) {
        let out = document.createElement("textarea");
        out.style.width = "800px";
        out.style.height = "800px";
        out.readOnly = true;

        let cli = document.createElement("input");
        cli.type = "text";
        cli.style.width = "800px";

        render_div.append(out);
        render_div.append(document.createElement("br"));
        render_div.append(cli);

        cli.addEventListener("change", () => {
            out.append(`> ${cli.value}\n`);
            this.#controller.guessLetter(cli.value);
            cli.value = "";
        });

        this.#model.addEventListener("start", () => {
            out.append("Game started. Type a letter to guess.\n");
            out.append(this.#model.getRevealer() + "\n");
        });

        this.#model.addEventListener("guess", e => {
            out.append(`You guessed: ${e.detail.letter}\n`);
            let res = e.detail.correct ? "correct" : "incorrect";
            out.append(`That guess was ${res}.\n`);
            out.append(this.#model.getRevealer() + "\n");
            out.append(`Incorrect guesses: ${this.#model.getIncorrectLetters().toString()}\n`);
            out.append(`Guesses remaining: ${this.#model.getGuesses()}\n`);
        });

        this.#model.addEventListener("loss", () => {
            out.append("Game lost.\n");
        });

        this.#model.addEventListener("win", () => {
            out.append("Game won.\n");
        });

        this.#controller.start();
    }

}