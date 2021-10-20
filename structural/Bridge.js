class interface_Pages {
    getContent() {
        throw new Error(`There are no describe of getContent() method in ${this.constructor.name}`)
    }
    setTheme() {
        throw new Error(`There are no describe of setTheme() method in ${this.constructor.name}`)
    }
}

class About extends interface_Pages {
    constructor(theme) {
        super();
        this.theme = theme
    }

    getContent() {
        return "About page in " + this.theme.getColor()
    }
    setTheme(theme) {
        this.theme = theme
    }
}

class Careers extends interface_Pages {
    constructor(theme) {
        super();
        this.theme = theme
    }

    getContent() {
        return "Careers page in " + this.theme.getColor()
    }
    setTheme(theme) {
        this.theme = theme
    }
}

class DarkTheme {
    getColor() {
        return 'Dark Black'
    }
}

class LightTheme {
    getColor() {
        return 'Off white'
    }
}

const darkTheme = new DarkTheme()
const lightTheme = new LightTheme;

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent())
console.log(careers.getContent())

about.setTheme(lightTheme);
careers.setTheme(lightTheme);

console.log(about.getContent())
console.log(careers.getContent())
