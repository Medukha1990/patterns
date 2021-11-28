class Car {
    constructor(options) {
        for (const option in options) {
            this[option] = options[option];
        }
    };

    getInfo() {
        console.log(`This is ${this.color} ${this.model} with the ${this.transmission} transmission`);
    };
}

class Builder {
    constructor() {
        this.requiredAttrs = ['model', 'color', 'transmission'];
    };

    setModel(model) {
        this.model = model;
        return this;
    };

    setColor(color) {
        this.color = color;
        return this;
    };

    setTransmission(transmission) {
        this.transmission = transmission;
        return this;
    };

    build() {
        const checkMissingAttributes = this.requiredAttrs.some((attr) => !this[attr]);

        if (checkMissingAttributes) {
            throw new Error(`Required params are missing`);
        }
        return new Car(this);
    };

}

//testing

const testing = () => {
    const builder = new Builder();
    const car1 = builder.setColor('red').setModel('Audi').setTransmission('auto').build();
    const car2 = builder.setColor('black').setModel('Volvo').setTransmission('auto').build();

    car1.getInfo();
    car2.getInfo();
};

testing();
