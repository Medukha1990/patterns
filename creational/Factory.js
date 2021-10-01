class Factory {
    createEmployee(employeeType) {
        if (employeeType === 'staff member') {
            return new FullTime(employeeType);
        }
        if (employeeType === 'intern') {
            return new Intern(employeeType);
        }
        if (employeeType === 'contractor') {
            return new Contractor(employeeType);
        }
        throw Error('this kind of type doesn\'t exist');
    }
}

class AbstractWorker {
    constructor(type, hourly) {
        this.type = type;
        this.hourly = hourly;
    }

    describe() {
        console.log(`Hi, i\'m ${this.type} and I work ${this.hourly} hours per month`);
    }
}

class FullTime extends AbstractWorker {
    constructor(type) {
        const hourly = '100';
        super(type, hourly);
    }
}

class Intern extends AbstractWorker {
    constructor(type) {
        const hourly = '50';
        super(type, hourly);
    }
}

class Contractor extends AbstractWorker {
    constructor(type) {
        const hourly = '200';
        super(type, hourly);
    }
}


const testing = () => {
    const employees = [];
    const factory = new Factory();
    employees.push(factory.createEmployee('staff member'));
    employees.push(factory.createEmployee('intern'));
    employees.push(factory.createEmployee('contractor'));
    employees.forEach(employee => employee.describe());
};

testing();
