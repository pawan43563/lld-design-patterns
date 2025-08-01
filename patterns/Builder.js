// Design a way to build a UserProfile object with optional fields using chained setting methods.

class UserProfile {
    constructor(builder) {
        this.name = builder.name;
        this.age = builder.age;
    }

    show() {
        console.info(this);
    }
}

class UserProfileBuilder {
    
    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    build() {
        return new UserProfile(this);
    }
}

const user = new UserProfileBuilder().setName("pawan").setAge(25).build()

user.show()