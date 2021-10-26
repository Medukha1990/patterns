class interface_Coffee {
    constructor() {
        if (this.constructor.name === 'Creator') {
            throw new Error(`${this.constructor.name}: can not create instance of interface`);
        }
    }
    getCost() {
        throw new Error(`Doesn't describe getCost() in class ${this.constructor.name}`);
    }
    getDescription() {
        throw new Error(`Doesn't describe getDescription() in class ${this.constructor.name}`);
    }
}

class StandardCoffee extends interface_Coffee {
    cost = 10;

    getCost() {
        return this.cost
    }

    getDescription() {
        return 'Standard coffee'
    }
}

class MilkCoffee extends interface_Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 2
    }

    getDescription() {
        return this.coffee.getDescription() + ', milk'
    }
}

class WhipCoffee extends interface_Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 5
    }

    getDescription() {
        return this.coffee.getDescription() + ', whip'
    }
}

class VanillaCoffee extends interface_Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 3
    }

    getDescription() {
        return this.coffee.getDescription() + ', vanilla'
    }
}

class DiscountCoffee extends interface_Coffee {
    constructor(coffee, percent) {
        super();
        this.coffee = coffee;
        this.percent = percent;
    }

    getDescription() {
        return this.coffee.getDescription() + `, with discount ${this.percent}%`
    }
}


let someCoffee = new StandardCoffee()
console.log(someCoffee.getCost())// 10
console.log(someCoffee.getDescription())// standard coffee

someCoffee = new MilkCoffee(someCoffee)
console.log(someCoffee.getCost())// 12
console.log(someCoffee.getDescription())// standard coffee, milk

someCoffee = new WhipCoffee(someCoffee)
console.log(someCoffee.getCost())// 17
console.log(someCoffee.getDescription())// standard coffee, milk, cream

someCoffee = new VanillaCoffee(someCoffee)
console.log(someCoffee.getCost())// 20
console.log(someCoffee.getDescription())// standard coffee, milk, cream, vanilla

someCoffee = new DiscountCoffee(someCoffee, 20)
console.log(someCoffee.getCost())// 16
console.log(someCoffee.getDescription())// standard coffee, milk, cream,
// vanilla, discount 20%
