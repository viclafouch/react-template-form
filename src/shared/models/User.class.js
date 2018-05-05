export default class User {

    firstname = null;
    lastname = null;
    email = null;
    description = null;

    static get fullName() {
        return `${this.firstname} ${this.lastname}`
    }

    constructor( user = {} ) {
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.email = user.email
        this.description = user.description
    }
}