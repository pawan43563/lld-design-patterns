// Build an image loader that logs requests before actually loading the image.

class ImageLoader {
    load() {
        throw new Error('Method not implemented');
    }
}

class RealImage extends ImageLoader {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    load() {
        console.log(`Loading image: ${this.filename}`);
    }
}

class ImageProxy extends ImageLoader {
    constructor(filename) {
        super();
        this.filename = filename;
        this.realImage = null;
    }

    load() {
        console.log(`[Proxy] Intercepting request to load image: ${this.filename}`);
        
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        
        this.realImage.load();
    }
}


const filename = "image1.jpg";

const image = new ImageProxy(filename);
image.load();