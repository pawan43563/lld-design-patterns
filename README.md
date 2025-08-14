# Design Patterns in JavaScript

Welcome! 👋 This repository contains a comprehensive collection of design patterns implemented in JavaScript. Each pattern comes with practical examples, questions, and solutions to help you understand and apply these patterns effectively.

To explore the implementations, **[go to the `patterns` folder](./patterns/)**.

## Pattern Categories

### Creational Patterns
These patterns deal with object creation mechanisms:

#### Abstract Factory
- **Question**: Create a vehicle factory that returns either a luxury or ordinary vehicle depending on type.
- **Solution**: [Abstract Factory](./patterns/AbstractFactory.js) implementation shows how to create families of related objects (vehicles) using abstract factories for different categories (luxury vs ordinary).
- **Follow-up**: How would you add a new vehicle category (e.g., electric vehicles) to the existing factory system?

#### Builder
- **Question**: Design a way to build a UserProfile object with optional fields using chained setting methods. The builder should allow setting properties like name and age in any order before building the final object.
- **Solution**: [Builder](./patterns/Builder.js) demonstrates how to construct objects step by step using method chaining for a cleaner and more flexible object creation process.
- **Follow-up**: How would you add validation to ensure required fields are set before building the object?

#### Factory
- **Question**: Create a shape factory that returns different shapes (Box, Circle) based on input. Each shape should implement a common draw method. Consider how to extend this to handle shape-specific properties like width and height.
- **Solution**: [Factory](./patterns/Factory.js) shows how to create different shape objects through a centralized factory without exposing the instantiation logic.
- **Follow-up**: How would you handle invalid shape types in the factory method?

#### Object Pool
- **Question**: Build a database connection pool manager where clients can acquire and release connections efficiently. The pool should have a fixed size and reuse connections when they become available.
- **Solution**: [Object Pool](./patterns/ObjectPool.js) demonstrates how to manage and reuse expensive resources (database connections) from a fixed pool, combining Object Pool with Singleton pattern for global access.
- **Follow-up**: What would you do when the pool is full and a new connection is requested?

### Structural Patterns
These patterns deal with object composition and relationships:

#### Adapter
- **Question**: Build an adapter that converts XML response from a service into a JSON-compatible format. The existing service returns XML, but the client code expects JSON.
- **Solution**: [Adapter](./patterns/Adapter.js) shows how to make incompatible data formats work together by wrapping the XML service with a JSON adapter interface.
- **Follow-up**: How would you handle XML parsing errors in the adapter?

#### Bridge
- **Question**: Implement breathing behavior for different living beings (fish, humans, trees) that share a common interface but have varying implementations (gills, lungs, stomata).
- **Solution**: [Bridge](./patterns/Bridge.js) demonstrates how to separate living beings from their breathing mechanisms, allowing each to vary independently.
- **Follow-up**: How would you add a new type of breathing mechanism without modifying existing code?

#### Composite
- **Question**: Implement a file system structure with folders and files that supports ls() listing recursively. Both files and directories should share a common interface but handle listing differently.
- **Solution**: [Composite](./patterns/Composite.js) shows how to compose objects into tree structures where individual objects (files) and compositions (directories) are treated uniformly.
- **Follow-up**: How would you implement a search function that works on both files and directories?

#### Decorator
- **Question**: Create a pizza ordering system where users can add multiple toppings (cheese, tomato) dynamically without creating a separate class for each combination.
- **Solution**: [Decorator](./patterns/Decorator.js) demonstrates how to add behavior (toppings) to objects (pizzas) dynamically while maintaining the same interface.
- **Follow-up**: How would you implement a maximum limit for the number of toppings?

#### Facade
- **Question**: Build a car engine startup system that coordinates multiple subsystems (battery, fuel pump, ignition) with a unified start interface. The client should not need to know about the individual subsystems.
- **Solution**: [Facade](./patterns/Facade.js) provides a simplified interface (car.start()) that coordinates multiple complex subsystems (battery, fuel, ignition) behind the scenes.
- **Follow-up**: How would you handle a failure in one of the subsystems during startup?

#### Flyweight
- **Question**: Optimize memory usage by sharing robot type instances (model, weapon) across multiple robot objects. Each robot has its own position but shares common properties with other robots of the same type.
- **Solution**: [Flyweight](./patterns/Flyweight.js) shows how to share common state (robot types) between multiple objects (robot instances) to reduce memory usage.
- **Follow-up**: How would you handle updates to shared properties across all instances?

#### Proxy
- **Question**: Build an image loader that logs requests before actually loading the image. The proxy should handle lazy loading of the real image and provide logging functionality.
- **Solution**: [Proxy](./patterns/proxy.js) demonstrates how to control access to objects by intercepting requests and adding behavior like logging and lazy loading.
- **Follow-up**: How would you implement caching in the image loading proxy?

### Behavioral Patterns
These patterns deal with communication between objects:

#### Chain of Responsibility
- **Question**: Design an ATM system that dispenses ₹2000, ₹500, and ₹100 notes based on requested amount. Each denomination handler should process what it can and pass the remaining amount to the next handler.
- **Solution**: [Chain of Responsibility](./patterns/chainOfResponsibilty.js) shows how to pass requests (amount to dispense) through a chain of handlers (note dispensers) where each handles what it can and passes the rest along.
- **Follow-up**: How would you handle a situation where no handler can process the request?

#### Command
- **Question**: Design a remote control system that supports ON/OFF operations for devices (like lights), along with undo/redo capabilities. Each operation should be encapsulated as a command.
- **Solution**: [Command](./patterns/Command.js) demonstrates how to encapsulate operations (turn on/off) as objects with execute, undo, and redo capabilities.
- **Follow-up**: How would you implement a batch command that executes multiple commands in sequence?

#### Interpreter
- **Question**: Build a simple arithmetic interpreter to evaluate expressions like "3 + 5" and "2 * (3 + 4)". Each operation (number, addition, multiplication) should be represented as an expression object.
- **Solution**: [Interpreter](./patterns/Interpretor.js) shows how to evaluate mathematical expressions by breaking them down into a hierarchy of expression objects.
- **Follow-up**: How would you add support for variables in the expressions?

#### Iterator
- **Question**: Design a music playlist system that allows users to loop through songs one by one. The album should manage the songs while providing a way to iterate through them without exposing the internal collection.
- **Solution**: [Iterator](./patterns/Iterator.js) demonstrates how to access collection elements (songs in an album) sequentially using a standardized iterator interface.
- **Follow-up**: How would you implement a reverse iterator for the playlist?

#### Mediator
- **Question**: Design an auction system where bidders can place bids and get notified when others place bids. Bidders shouldn't communicate directly but through an auctioneer.
- **Solution**: [Mediator](./patterns/Mediator.js) shows how to reduce coupling between communicating objects by having them interact through a central mediator (auctioneer).
- **Follow-up**: How would you implement a minimum bid increment rule in the auction system?

#### Memento
- **Question**: Design a text editor that allows undoing the last typed sentence. The editor should be able to save its state and restore to a previous state without exposing its internal content structure.
- **Solution**: [Memento](./patterns/Memento.js) demonstrates how to capture and restore object states by creating snapshots that can be saved and restored later.
- **Follow-up**: How would you limit the number of states that can be stored?

#### Observer
- **Question**: Implement a product stock alert system where customers get notified (via email or SMS) when stock updates. Customers should be able to subscribe/unsubscribe and choose their notification method.
- **Solution**: [Observer](./patterns/ObervableObservee.js) shows how to implement publish-subscribe relationships where products notify their observers (customers) about stock changes.
- **Follow-up**: How would you handle failed notification deliveries?

#### State
- **Question**: Build a vending machine system that handles coin insertion, product selection, dispensing, and sold-out scenarios using internal states. The machine should behave differently in each state (idle, has money, dispensing, sold out).
- **Solution**: [State](./patterns/StateDesign.js) demonstrates how objects can change behavior based on internal state, with each state encapsulating its own behavior and transition rules.
- **Follow-up**: How would you handle an invalid state transition request?

#### Strategy
- **Question**: Implement a pricing strategy system for an e-commerce platform where products can have different pricing calculations (regular price, discount price). The pricing strategy should be easily swappable at runtime.
- **Solution**: [Strategy](./patterns/Strategy.js) shows how to make algorithms (pricing calculations) interchangeable without changing the product class.
- **Follow-up**: How would you implement a fallback pricing strategy?

#### Template
- **Question**: Implement a beverage preparation system where the general flow (boil water, brew, add condiments) remains the same but specific steps vary by beverage type (tea vs coffee).
- **Solution**: [Template](./patterns/Template.js) demonstrates how to define a skeleton algorithm (beverage preparation) with customizable steps (brewing and condiments) for different implementations.
- **Follow-up**: How would you make certain steps optional in the template?

#### Visitor
- **Question**: Implement a room inspection and cleaning system where actions depend on room type (bedroom, kitchen) and visitor role (cleaner, inspector). Each visitor should handle rooms differently without modifying the room classes.
- **Solution**: [Visitor](./patterns/Visitor.js) shows how to add operations (cleaning, inspection) to object structures (rooms) without modifying the objects themselves.
- **Follow-up**: How would you implement access control for different visitor roles?

#### Null Object
- **Question**: Create a vehicle fallback handler that gracefully handles missing or unknown vehicle types without requiring null checks throughout the code.
- **Solution**: [Null Object](./patterns/NullObject.js) demonstrates how to provide default behavior (unknown vehicle type) instead of null references.
- **Follow-up**: How would you implement different default behaviors based on context?

## Examples

### Snake and Ladder Game
A complete implementation of the classic Snake and Ladder board game that demonstrates multiple design patterns working together:

[View Question](./examples/SnakeAndLadder/question.txt)
[View Implementation](./examples/SnakeAndLadder/index.js)

## Deep Dive Resources
This repository covers the fundamental concepts of design patterns. For a more comprehensive and in-depth understanding, check out:
https://refactoring.guru/design-patterns

## Contributing

Feel free to:
- Explore the patterns and learn from the examples
- Contribute new patterns or improve existing ones
- Suggest better examples or documentation

---

Happy coding! 🚀