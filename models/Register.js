export class Registro {
    constructor(frase, author) {
        this.id = this.generateId();
        this.frase = frase;
        this.author = author;
    }

    generateId() {
        return Math.floor(Math.random() * 100)
    }
}

export class ListaRegistro {
    constructor() {
        this.madeComments = [];
    }

    add(param) {
        this.madeComments.push(param)
    }

    getAllComments() {
        return this.madeComments
    }

    emptyInputs(frase, author) {
        if(frase == "" && author == "") {
            return true
        } else if(frase == "" || author == "") {
            return true
        } else {
            return false
        }
    }
}