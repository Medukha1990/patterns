import { employees } from './helpers/constants';

class Factory {
    createEmployee(employeeType) {
        if (employeeType === employees.STAFF_MEMBER) {
            return new FullTime(employeeType);
        }
        if (employeeType === employees.INTERN) {
            return new Intern(employeeType);
        }
        if (employeeType === employees.CONTRACTOR) {
            return new Contractor(employeeType);
        }
    };
}

class AbstractWorker {
    constructor(type, hourly) {
        this.type = type;
        this.hourly = hourly;
    };

    describe() {
        console.log(`hi! I'm ${this.type} and I work ${this.hourly} per month`);
    };
}

class FullTime extends AbstractWorker {
    constructor(type) {
        const hourly = '100';
        super(type, hourly);
    };
}

class Intern extends AbstractWorker {
    constructor(type) {
        const hourly = '50';
        super(type, hourly);
    };
}

class Contractor extends AbstractWorker {
    constructor(type) {
        const hourly = '200';
        super(type, hourly);
    };
}

const testing = () => {
    const employees = [];
    const factory = new Factory();
    employees.push(factory.createEmployee(employees.STAFF_MEMBER));
    employees.push(factory.createEmployee(employees.INTERN));
    employees.push(factory.createEmployee(employees.CONTRACTOR));
    employees.forEach(employee => employee.describe());
};

testing();


