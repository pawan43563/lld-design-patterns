// Implement a product stock alert system where customers get notified when stock updates.

class Product {
    constructor(name, initialStock) {
        this.name = name;
        this.stocks = initialStock;
        this.customerObservers = new Set(); // Using Set to prevent duplicate observers
    }

    addObserver(customer) {
        this.customerObservers.add(customer);
    }

    removeObserver(customer) {
        this.customerObservers.delete(customer);
    }

    getStock() {
        return this.stocks;
    }

    updateStock(quantity) {

        const newStock = this.stocks - quantity;
        if (newStock < 0) {
            throw new Error(`Cannot reduce stock below 0. Current stock: ${this.stocks}, Requested reduction: ${quantity}`);
        }
        this.stocks = newStock;
        this.notifyObservers();
    }

    // Internal method to handle observer notifications
    notifyObservers() {
        this.customerObservers.forEach(customer => {
            customer.notify(this);
        });
    }
}

class NotificationStrategy {
    notify(product, customerName) {
        throw new Error("Notification strategy must implement notify method");
    }
}

class EmailNotification extends NotificationStrategy {
    notify(product, customerName) {
        console.info(`[EMAIL] Dear ${customerName}, product "${product.name}" stock has been updated to ${product.stocks} units`);
    }
}

class SMSNotification extends NotificationStrategy {
    notify(product, customerName) {
        console.info(`[SMS] Hi ${customerName}, ${product.name} stock: ${product.stocks} units`);
    }
}

class Customer {
    constructor(name, notificationStrategy) {        
        this.name = name;
        this.notificationStrategy = notificationStrategy;
    }

    notify(product) {
        this.notificationStrategy.notify(product, this.name);
    }

    updateNotificationStrategy(newStrategy) {
        this.notificationStrategy = newStrategy;
    }
}

const iPhone = new Product("iPhone 15", 100);

// Create customers with different notification preferences
const customer1 = new Customer("Pawan", new EmailNotification());
const customer2 = new Customer("Sharma", new SMSNotification());

// Subscribe customers to product updates
iPhone.addObserver(customer1);
iPhone.addObserver(customer2);

// Update stock and trigger notifications
iPhone.updateStock(20);