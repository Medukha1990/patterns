import { carType, cars } from './helpers/constants';

class AbstractCarFactory {
    createPremiumCar(product) {
        return new AbstractPremiumCar(product);
    };

    createSportCar(product) {
        return new AbstractSportCar(product);
    };
}

class AbstractPremiumCar {
    constructor(model) {
        this.type = carType.PREMIUM_CAR;
        this.model = model;
    };
}

class AbstractSportCar {
    constructor(model) {
        this.type = carType.SPORT_CAR;
        this.model = model;
    };
}

// Toyota

class ToyotaFactory extends AbstractCarFactory {
    createPremiumCar(model) {
        return new ToyotaPremiumCar(model);
    };

    createSportCar(model) {
        return new ToyotaSportCar(model);
    };
}

class ToyotaPremiumCar extends AbstractPremiumCar {
    constructor(model) {
        super(model);
    };
}

class ToyotaSportCar extends AbstractSportCar {
    constructor(model) {
        super(model);
    };
}

// Audi

class AudiFactory extends AbstractCarFactory {
    createPremiumCar(model) {
        return new AudiPremiumCar(model);
    };

    createSportCar(model) {
        return new AudiSportCar(model);
    };
}

class AudiPremiumCar extends AbstractPremiumCar {
    constructor(model) {
        super(model);
    };
}

class AudiSportCar extends AbstractSportCar {
    constructor(model) {
        super(model);
    };
}

// testing

const testing = (Factory, premiumCarName, sportCarName) => {
    const concreteFactory = new Factory();
    const concretePremiumCar = concreteFactory.createPremiumCar(premiumCarName);
    const concreteSportCar = concreteFactory.createSportCar(sportCarName);

    console.log(concreteFactory, concretePremiumCar, concreteSportCar);
};

testing(ToyotaFactory, cars.TOYOTA.CAMRY, cars.TOYOTA.SUPRA);
testing(AudiFactory, cars.AUDI.A8, cars.AUDI.TT);
