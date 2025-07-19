// Implement a file system structure with folders and files that supports ls() listing recursively.

class FileSystem {
    constructor(name) {
        this.filename = name;
    }
    ls() {
        throw new Error("Implement this");
    }
}

class File extends FileSystem {
    constructor(name) {
        super(name);
    }

    ls(indent = 0) {
        console.log(" ".repeat(indent) + "📁 " + this.filename);
    }
}

class Directory extends FileSystem {
    constructor(name) {
        super(name);
        this.files = []
    }

    add(file) {
        this.files.push(file);
    }

    ls(indent = 0) {
        console.log(" ".repeat(indent) + "📁 " + this.filename);
        for(const file of this.files) {
            file.ls(indent+2);
        }
    }
}

const root = new Directory("root");
const docs = new Directory("docs");
docs.add(new File("readme.md"));
docs.add(new File("setup.txt"));

root.add(new File("index.js"));
root.add(docs);

root.ls();