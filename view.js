export class View {
    #model;
    #controller;

    constructor(model, controller) {
        this.#model = model;
        this.#controller = controller;
    }

    render(render_div) {
        let header = document.createElement("h1");
        header.innerText = "Your guess: ";
        render_div.append(header);

        let hang = document.createElement("div");
        hang.classList.add("hang");
        render_div.append(hang);

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

        render_div.append(keyboard);

        addEventListener("keydown", e => {
            header.innerText = "Your guess: " + e.key;
        });

        this.#model.addEventListener("start", () => {

        });

        this.#model.addEventListener("guess", e => {

        });

        this.#model.addEventListener("loss", () => {

        });

        this.#model.addEventListener("win", () => {

        });

        this.#controller.start();
    }

}