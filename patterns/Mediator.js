// Design an auction system where bidders place bids and get notified when others place bids.

class Bidder {
    constructor(name, auctioner) {
        this.name = name;
        this.auctioner = auctioner;
        this.auctioner.register(this);
    }

    notify(amount, fromBidder) {
        console.info(`${this.name} place an bid of ${amount} from ${fromBidder.name}`)
    }

    placeBid(amount) {
        this.auctioner.placeBid(amount, this)
    }
}

class Auctioner {
    constructor() {
        this.bidders = [];
    }

    register(bidder) {
        this.bidders.push(bidder);
    }

    placeBid(amount, fromBidder) {
        const filter_bidders = this.bidders.filter((bid) => bid !== fromBidder)
        for(const bid of filter_bidders) {
            bid.notify(amount, fromBidder);
        }
    }
}

const auction = new Auctioner();
const bidder1 = new Bidder("pawan", auction);
const bidder2 = new Bidder("sharma", auction);
bidder1.placeBid(100);