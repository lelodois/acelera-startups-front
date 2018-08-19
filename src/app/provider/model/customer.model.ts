export class Customer {

    private _id: string;
    private _name: string;
    private _description: string;
    private _email: string;
    private _address: string;
    private _phone: string;
    private _findInvestiments: boolean;
    private _mentoring: string;

    public static isValid(customer: Customer) {
        return customer.name
            && customer.description
            && customer.email
            && customer.address;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get findInvestiments(): boolean {
        return this._findInvestiments;
    }

    set findInvestiments(value: boolean) {
        this._findInvestiments = value;
    }

    get mentoring(): string {
        return this._mentoring;
    }

    set mentoring(value: string) {
        this._mentoring = value;
    }
}