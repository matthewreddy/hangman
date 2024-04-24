export class View {
    #model;
    #controller;

    constructor(model, controller) {
        this.#model = model;
        this.#controller = controller;
    }

    render(render_div) {
        let alphabet = this.#model.getLettersNotGuessed();

        let header = document.createElement("h1");
        header.innerText = "Your guess: ";

        let revealer = document.createElement("p");

        let updateHeader = (letter) => {
            letter = letter.toUpperCase();
            if (alphabet.includes(letter)) {
                header.innerText = "Your guess: " + letter;
            }
        }

        let hang = document.createElement("div");
        hang.classList.add("hang");

        // TODO: figure out how to update this whenever a letter is guessed
        let keyboard = document.createElement("div");

        let qKey = document.createElement("button");        
        let wKey = document.createElement("button");
        let eKey = document.createElement("button");
        let rKey = document.createElement("button");
        let tKey = document.createElement("button");
        let yKey = document.createElement("button");
        let uKey = document.createElement("button");
        let iKey = document.createElement("button");
        let oKey = document.createElement("button");
        let pKey = document.createElement("button");
        let aKey = document.createElement("button");
        let sKey = document.createElement("button");
        let dKey = document.createElement("button");
        let fKey = document.createElement("button");
        let gKey = document.createElement("button");
        let hKey = document.createElement("button");
        let jKey = document.createElement("button");
        let kKey = document.createElement("button");
        let lKey = document.createElement("button");
        let zKey = document.createElement("button");
        let xKey = document.createElement("button");
        let cKey = document.createElement("button");
        let vKey = document.createElement("button");
        let bKey = document.createElement("button");
        let nKey = document.createElement("button");
        let mKey = document.createElement("button");

        qKey.innerText = "Q";
        wKey.innerText = "W";
        eKey.innerText = "E";
        rKey.innerText = "R";
        tKey.innerText = "T";
        yKey.innerText = "Y";
        uKey.innerText = "U";
        iKey.innerText = "I";
        oKey.innerText = "O";
        pKey.innerText = "P";
        aKey.innerText = "A";
        sKey.innerText = "S";
        dKey.innerText = "D";
        fKey.innerText = "F";
        gKey.innerText = "G";
        hKey.innerText = "H";
        jKey.innerText = "J";
        kKey.innerText = "K";
        lKey.innerText = "L";
        zKey.innerText = "Z";
        xKey.innerText = "X";
        cKey.innerText = "C";
        vKey.innerText = "V";
        bKey.innerText = "B";
        nKey.innerText = "N";
        mKey.innerText = "M";

        qKey.addEventListener("click", () => updateHeader("Q"));
        wKey.addEventListener("click", () => updateHeader("W"));
        eKey.addEventListener("click", () => updateHeader("E"));
        rKey.addEventListener("click", () => updateHeader("R"));
        tKey.addEventListener("click", () => updateHeader("T"));
        yKey.addEventListener("click", () => updateHeader("Y"));
        uKey.addEventListener("click", () => updateHeader("U"));
        iKey.addEventListener("click", () => updateHeader("I"));
        oKey.addEventListener("click", () => updateHeader("O"));
        pKey.addEventListener("click", () => updateHeader("P"));
        aKey.addEventListener("click", () => updateHeader("A"));
        sKey.addEventListener("click", () => updateHeader("S"));
        dKey.addEventListener("click", () => updateHeader("D"));
        fKey.addEventListener("click", () => updateHeader("F"));
        gKey.addEventListener("click", () => updateHeader("G"));
        hKey.addEventListener("click", () => updateHeader("H"));
        jKey.addEventListener("click", () => updateHeader("J"));
        kKey.addEventListener("click", () => updateHeader("K"));
        lKey.addEventListener("click", () => updateHeader("L"));
        zKey.addEventListener("click", () => updateHeader("Z"));
        xKey.addEventListener("click", () => updateHeader("X"));
        cKey.addEventListener("click", () => updateHeader("C"));
        vKey.addEventListener("click", () => updateHeader("V"));
        bKey.addEventListener("click", () => updateHeader("B"));
        nKey.addEventListener("click", () => updateHeader("N"));
        mKey.addEventListener("click", () => updateHeader("M"));
        
        keyboard.append(qKey);
        keyboard.append(wKey);
        keyboard.append(eKey);
        keyboard.append(rKey);
        keyboard.append(tKey);
        keyboard.append(yKey);
        keyboard.append(uKey);
        keyboard.append(iKey);
        keyboard.append(oKey);
        keyboard.append(pKey);
        keyboard.append(aKey);
        keyboard.append(sKey);
        keyboard.append(dKey);
        keyboard.append(fKey);
        keyboard.append(gKey);
        keyboard.append(hKey);
        keyboard.append(jKey);
        keyboard.append(kKey);
        keyboard.append(lKey);
        keyboard.append(zKey);
        keyboard.append(xKey);
        keyboard.append(cKey);
        keyboard.append(vKey);
        keyboard.append(bKey);
        keyboard.append(nKey);
        keyboard.append(mKey);

        let guessBtn = document.createElement("button");
        guessBtn.innerText = "Make Guess";

        render_div.append(header);
        render_div.append(revealer);
        render_div.append(hang);
        render_div.append(keyboard);
        render_div.append(document.createElement("br"));
        render_div.append(guessBtn);

        this.#model.addEventListener("start", () => {
            revealer.textContent = this.#model.getRevealer();
            addEventListener("keydown", e => updateHeader(e.key));
            guessBtn.addEventListener("click", () => {
                let letter = header.innerText[header.innerText.length - 1];
                if (alphabet.includes(letter)) {
                    this.#controller.guessLetter(letter);
                }
            });
        });

        this.#model.addEventListener("guess", e => {
            revealer.textContent = this.#model.getRevealer();
            alphabet = this.#model.getLettersNotGuessed();

        });

        this.#model.addEventListener("loss", () => {
            let lossText = document.createElement("p");
            lossText.textContent = "Game lost.";
            render_div.append(lossText);
        });

        this.#model.addEventListener("win", () => {
            let winText = document.createElement("p");
            winText.textContent = "Game won.";
            render_div.append(winText);

        });

        this.#controller.start();
    }

}