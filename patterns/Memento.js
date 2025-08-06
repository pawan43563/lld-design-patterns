
// Design a text editor that allows undoing the last typed sentence.


class Memento {
    constructor(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

class HistoryManager {
    constructor() {
        this.history = []
    }

    save(memento) {
        this.history.push(memento);
    }

    undo() {
        return this.history.pop();
    }
}

class Editor {
    constructor() {
        this.content = ""
    }

    type(text) {
        this.content+=text;
    }

    getContent() {
        return this.content;
    }

    save() {
        return new Memento(this.content);
    }

    restore(memento) {
        this.content = memento.getContent();
    }
}


const editor = new Editor();
const history = new HistoryManager();

editor.type("Hello");
history.save(editor.save()); // Save snapshot #1

editor.type(" World");
history.save(editor.save()); // Save snapshot #2

editor.type("!!!"); // You typed extra stuff by mistake

console.log("Before undo:", editor.getContent()); 
// Output: Hello World!!!

const prev = history.undo(); // Go back one step
editor.restore(prev); // Restore that snapshot

console.log("After undo:", editor.getContent());