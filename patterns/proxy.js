// Build an image loader that logs requests before actually loading the image.

class RealImage {
    constructor(filename) {
        this.filename = filename;
    }

    load() {
        console.log(`Loading image: ${this.filename}`);
    }
}

class Proxy {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }

    load() {
        console.log("image loading");
        if(!this.realImage) this.realImage = new RealImage(this.filename);
        this.realImage.load();
    }
}

const filename = "image1"

const image = new Proxy(filename);
image.load()