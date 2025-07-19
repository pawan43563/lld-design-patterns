/*
Strategy Pattern Implementation Exercise

Problem Statement:
Implement a pricing strategy system for an e-commerce platform using the Strategy Pattern.

Requirements:
1. Create a Product class that has:
   - name
   - price
   - a strategy for calculating the final price

2. Implement two pricing strategies:
   - RegularPricing: Returns the original price
   - DiscountPricing: Applies a 50% discount

3. The Product class should use these strategies to calculate the final price

Example Usage:
- Create a product with regular pricing
- Create a product with discount pricing
- Calculate and display the final prices

Your task is to implement this system following the Strategy Pattern principles.
Think about:
- How to make the pricing strategy easily swappable
- How to ensure new pricing strategies can be added without modifying existing code
- How to maintain single responsibility principle
*/


class Product {
    constructor(name, price, strategy) {
        this.price = price;
        this.name = name;
        this.strategy = strategy;
    }

    calculateTotal() {
        return this.strategy.calculateTotal(this.price);
    }
}

class DiscountPricing {
    calculateTotal(price) {
        return price * 0.5;
    }
}

class RegularPricing {
    calculateTotal(price) {
        return price;
    }
}

const product = new Product("apple", 50, new DiscountPricing());
console.log(product.calculateTotal())