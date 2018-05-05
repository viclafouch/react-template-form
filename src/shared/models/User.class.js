export default class User {

    firstname = null;
    lastname = null;
    email = null;
    description = null;

    static get fullName() {
        return `${this.firstname} ${this.lastname}`
    }

    static change(name, value) {
        switch (name) {
            case "firstname":
                return value;
                break;

            default:
                break;
        }
    }

    static isValid(name, value) {
        switch (name) {
            case "firstname":
                return true;
                break;

            default:
                break;
        }
    }

    constructor( user = {} ) {
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.email = user.email
        this.description = user.description
    }
}