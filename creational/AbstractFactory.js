class AbstractCarFactory {
    createPremiumCar(product) {
        return new AbstractPremiumCar(product);
    }

    createSportCar(product) {
        return new AbstractSportCar(product);
    }
}

class AbstractPremiumCar {
    constructor(model) {
        this.type = 'Premium car';
        this.model = model;
    }
}

class AbstractSportCar {
    constructor(model) {
        this.type = 'sport car';
        this.model = model;
    }
}

// Toyota

class ToyotaFactory extends AbstractCarFactory {
    createPremiumCar(model) {
        return new ToyotaPremiumCar(model);
    }

    createSportCar(model) {
        return new ToyotaSportCar(model);
    }
}

class ToyotaPremiumCar extends AbstractPremiumCar {
    constructor(model) {
        super(model);
    }
}

class ToyotaSportCar extends AbstractSportCar {
    constructor(model) {
        super(model);
    }
}

// Audi

class AudiFactory extends AbstractCarFactory {
    createPremiumCar(model) {
        return new AudiPremiumCar(model);
    }

    createSportCar(model) {
        return new AudiSportCar(model);
    }
}

class AudiPremiumCar extends AbstractPremiumCar {
    constructor(model) {
        super(model);
    }
}

class AudiSportCar extends AbstractSportCar {
    constructor(model) {
        super(model);
    }
}

// testing

const testing = (Factory, premiumCarName, sportCarName) => {
    const concreteFactory = new Factory();
    const concretePremiumCar = concreteFactory.createPremiumCar(premiumCarName);
    const concreteSportCar = concreteFactory.createSportCar(sportCarName)

    console.log(concreteFactory, concretePremiumCar, concreteSportCar);
};

testing(ToyotaFactory, 'Camry', 'Supra')
testing(AudiFactory, 'A8', 'TT')
