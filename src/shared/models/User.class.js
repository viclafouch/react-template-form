export default class User {

    firstname = null;
    lastname = null;
    email = null;
    description = null;
    civility = null;
    age = null;


    constructor(user = {}) {
        this.firstname = user.firstname || ''
        this.lastname = user.lastname || ''
        this.email = user.email || ''
        this.description = user.description || ''
        this.civility = user.civility || ''
        this.age = user.age || ''
    }

    static canChange(name, value) {
        switch (name) {
            case "firstname":
                return !(/\d/.test(value));

            case "lastname":
                return !(/\d/.test(value));

            case "email":
                return !/\s/g.test(value);
            default:
                return true;
        }
    }

    clear() {
        this.constructor({})
    }

    static isValid(name, value) {
        switch (name) {
            case "firstname":
                return value.length > 0;
            case "lastname":
                return value.length > 0;
            case "email":
                return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(String(value).toLowerCase())
            case "description":
                return value.length > 0;
            case "civility":
                return value === "Male" || value === "Female"
            case "age":
                return value === "> 25" || value === "< 25"
            default:
                return true;
        }
    }
}