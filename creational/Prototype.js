import { forProto } from './helpers/constants'

class Prototype {
    setOption(key, val) {
        this[key] = val;
    }

    clone() {
        const clone = new Prototype();
        const keys = Object.keys(this);

        keys.forEach((k) => clone.setOption(k, this[k]));

        return clone;
    }
}

const testing = () => {
    const proto1 = new Prototype();
    proto1.setOption(forProto.OPTION_1, forProto.VALUE_1);
    const clone1 = proto1.clone();
    clone1.setOption(forProto.OPTION_2, forProto.VALUE_2);
    const clone2 = clone1.clone();
    clone2.setOption(forProto.OPTION_3, forProto.VALUE_3);

    console.log(proto1, clone1, clone2);
};

testing();

