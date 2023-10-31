export class Registro {
    constructor(frase, author) {
        this.id = this.generateId();
        this.frase = frase;
        this.author = author;
        this.heart = false;
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
        return this.madeComments;
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

    removeComment(id) {
        this.madeComments = this.madeComments.filter(comment => comment.id !== id)
        console.log(this.madeComments);
    }
}