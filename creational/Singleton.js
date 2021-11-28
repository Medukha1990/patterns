import { tests } from "./helpers/constants";

class Singleton {
    constructor(data) {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.data = data;

        return this;
    }
}

const testing = () => {
    const a = new Singleton(tests.TEST_1);
    const b = new Singleton(tests.TEST_2);

    if (a === b) {
        console.log('Singleton is working, the one copy');
    }
};

testing();
