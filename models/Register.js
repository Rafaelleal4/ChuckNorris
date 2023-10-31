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

    removeComment(dados) {
        this.madeComments = this.madeComments.filter(comment => comment.id !== dados)
    }

    addHeart(comment) {
        const commentFind = comment;
        if(commentFind.heart == false) {
            commentFind.heart = true;
        } else {
            commentFind.heart = false;
        }
        console.log(commentFind);
    }

    getCommentsById(id) {
        return this.madeComments.find((comment) => comment.id == id)
    }

    editComment(id, frase, author) {
        const comment = this.getCommentsById(id);

        comment.frase = frase;
        comment.author = author;
        return comment;
    }
}